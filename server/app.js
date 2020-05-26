//app.js 服务器端项目
//1:下载第三方模块 
//express/express-session/cors/mysql
//2:将第三方模块引入到当前程序中
const express= require("express");
const session = require("express-session");
const cors = require("cors");
const mysql = require("mysql");
//const qs=require("querystring");
const bodyParser = require('body-parser');
//3:创建数据库连接池
var pool = mysql.createPool({
   host:"127.0.0.1",
   user:"root",
   password:"",
   port:3306,
   connectionLimit:20,
   database:"cake"
})

//4:创建web服务器监听 8080 端口
var server = express();
server.listen(8080);
server.use(bodyParser.urlencoded({extended:false}));
//5:处理跨域 cors 
//5.1：配置允许访问程序地址(脚手架)
//     http://127.0.0.1:5050  (ok)
//     http://localhost:5050
//5.2:每请求是否验证true
server.use(cors({
  origin:["http://127.0.0.1:5050","http://localhost:5050"],
  credentials:true
}))
//6:配置session
//#session配置一定要在所有请求之前
server.use(session({
   secret:"128位字符串",    //#安全字符串
   resave:true,            //#每次请求保存数据 
   saveUninitialized:true  //#保存初始化数据
}));
//7:配置静态目录
//http://127.0.0.1:8080/01.jpg
server.use(express.static("public"));

//首页商品
server.get("/product",(req,res)=>{
   //2:接收客户请求数据 
   //  pno 页码   pageSize 页大小
   //console.log(req.query)
   var pno = req.query.pno;
   var ps  = req.query.pageSize;
   //3:如果客户没有请示数据设置默认数据
   //  pno=1     pageSize=4
   if(!pno){
     pno = 1;
   }
   if(!ps){
     ps = 4;
   }
   //4:创建sql语句
   var sql = "SELECT * FROM cake_details LIMIT ?,?";
   var offset = (pno-1)*ps;//起始记录数 ?
   ps = parseInt(ps);      //行数       ?
   //5:发送sql语句
   pool.query(sql,[offset,ps],(err,result)=>{
     //6:获取返回结果发送客户端
     if(err) throw err;
     res.send({code:1,msg:"查询成功",data:result});
   });
  })

//所有分类商品
server.get("/listPro",(req,res)=>{
  var sql = "SELECT * FROM cake_details";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send({code:2,msg:"查询成功",data:result})
  })
})

//查看商品详情
server.get("/proDetail",(req,res)=>{
    var lid=req.query.lid;
    var sql=`select * from cake_details where lid=?`;
    pool.query(sql,[lid],(err,result)=>{
      if(err) throw err;
      res.send({code:3,msg:"查询成功",data:result})
    })
})


//登录功能
server.get("/login",(req,res)=>{
  //6.1:接收网页传递数据 用户名和密码
  var u = req.query.uname;
  var p = req.query.upwd;

  //6.2:创建sql
  var sql = "SELECT uid FROM cake_user";
  sql+=" WHERE uname = ? AND upwd = md5(?)";
  //6.3:执行sql语句并且获取返回结果
  pool.query(sql,[u,p],(err,result)=>{
   //6.4:判断登录是否成功
   if(err)throw err;
   //6.5:将结果返回网页
   if(result.length==0){
     res.send({code:-1,msg:"用户名或密码有误"})
   }else{
     //获取当前登录用户uid
     //result=[{uid:2}]
     var uid = result[0].uid;
     //将用户id保存session对象中
     //uid当前登录：用户凭证
     req.session.uid = uid;
     //console.log(req.session);
     res.send({code:1,msg:"登录成功"});
   }
  });
})



//注册功能
server.post('/register',(req,res)=>{
  console.log(req.body);

  var u=req.body.uname;
  var p=req.body.upwd;
  var phone=req.body.phone;
  var sql=`INSERT INTO  cake_user(uname,upwd,phone) values('${u}',md5('${p}'),'${phone}')`;
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    //console.log(result.affectedRows);
	  res.send({code:200,msg:"注册成功"});
  })
})
