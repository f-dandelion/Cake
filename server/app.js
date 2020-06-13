//app.js 服务器端项目
//将第三方模块引入到当前程序中
const express= require("express");
const session = require("express-session");
const cors = require("cors");
const mysql = require("mysql");
//const qs=require("querystring");
const bodyParser = require('body-parser');
//创建数据库连接池
var pool = mysql.createPool({
   host:"127.0.0.1",
   user:"root",
   password:"",
   port:3306,
   connectionLimit:20,
   database:"cake"
})

//创建web服务器监听 8080 端口
var server = express();
server.listen(8080);
server.use(bodyParser.urlencoded({extended:false}));
//处理跨域 cors 
//每请求是否验证true
server.use(cors({
  origin:["http://127.0.0.1:5050","http://localhost:5050"],
  credentials:true
}))
//配置session
server.use(session({
   secret:"128位字符串",    //#安全字符串
   resave:true,            //#每次请求保存数据 
   saveUninitialized:true  //#保存初始化数据
}));
//配置静态目录
server.use(express.static("public"));

//首页商品
server.get("/product",(req,res)=>{
   //接收客户请求数据 
   //  pno 页码   pageSize 页大小
   //console.log(req.query)
   var pno = req.query.pno;
   var ps  = req.query.pageSize;
   //如果客户没有请示数据设置默认数据
   //  pno=1     pageSize=4
   if(!pno){
     pno = 1;
   }
   if(!ps){
     ps = 4;
   }

   var sql = "SELECT * FROM cake_details LIMIT ?,?";
   var offset = (pno-1)*ps;//起始记录数 ?
   ps = parseInt(ps);      //行数       ?

   pool.query(sql,[offset,ps],(err,result)=>{
    
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

  var u = req.query.uname;
  var p = req.query.upwd;


  var sql = "SELECT uid FROM cake_user";
  sql+=" WHERE uname = ? AND upwd = md5(?)";

  pool.query(sql,[u,p],(err,result)=>{

   if(err)throw err;

   if(result.length==0){
     res.send({code:-1,msg:"用户名或密码有误"})
   }else{
     //获取当前登录用户uid
     //result=[{uid:2}]
     var uid = result[0].uid;
     //将用户id保存session对象中
     req.session.uid = uid;
     //console.log(req.session);
     res.send({code:1,msg:"登录成功"});
   }
  });
})



//注册功能
server.post('/register',(req,res)=>{
  //console.log(req.body);

  var u=req.body.uname;
  var p=req.body.upwd;
  var phone=req.body.phone;
  var sql=`INSERT INTO  cake_user(uname,upwd,phone) values('${u}',md5('${p}'),'${phone}')`;
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    var sql1=`SELECT uid FROM cake_user WHERE uname = ? AND upwd = md5(?)`
    pool.query(sql1,[u,p],(err,result)=>{
      if(err)throw err;
      //console.log(result);
      var uid = result[0].uid;
      req.session.uid = uid;
    })
    //console.log(result);
	  res.send({code:200,msg:"注册成功"});
  })
})


//加入购物车
server.get('/addcart',(req,res)=>{
  var uid = req.session.uid;
   if(!uid){
    res.send({code:-1,msg:"请先登录"});
    return;
   }
  //console.log(req.query)
    var lid = req.query.lid;
    var price = req.query.price;
    var title = req.query.title;
    var count=req.query.count;
    var pic=req.query.pic;
    var sql = "SELECT id FROM cake_cart";
    sql+=" WHERE uid = ? AND lid = ?";
    pool.query(sql,[uid,lid],(err,result)=>{
      if(err)throw err;
      if(result.length==0){
       var sql = `INSERT INTO cake_cart VALUES(null,${lid},${price},${count},'${title}',${uid},'${pic}')`;
      }else{
       var sql = `UPDATE cake_cart SET count=count+1 WHERE uid=${uid} AND lid=${lid}`;
      }

      pool.query(sql,(err,result)=>{
        if(err)throw err;

        if(result.affectedRows>0){
          //console.log(result)
         res.send({code:1,msg:"商品添加成功"});
        }else{
         res.send({code:-2,msg:"添加失败"}); 
        }
      })
    })
})


//查看购物车
server.get("/carts",(req,res)=>{
  var uid = req.session.uid;
  if(!uid){
    res.send({code:-1,msg:"请先登录"})
    return
  }
  var sql = "SELECT * FROM ";
  sql+=" cake_cart WHERE uid = ?";
  pool.query(sql,[uid],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"查询成功",data:result})
  })
})


//删除购物车中的商品
server.get("/delItem",(req,res)=>{
  //获取客户端发送数据id
    var id = req.query.id;

    var sql = "DELETE FROM cake_cart WHERE id=?";

    pool.query(sql,[id],(err,result)=>{
       if(err)throw err;

       if(result.affectedRows>0){
         res.send({code:1,msg:"删除成功"});
       }else{
         res.send({code:-1,msg:"删除失败"});
       }
    })
})


//查询用户信息
server.get("/userInfo",(req,res)=>{
  var uid = req.session.uid;
  if(!uid){
    res.send({code:-1,msg:"请先登录"})
    return
  }
  var sql = "SELECT * FROM cake_user WHERE uid = ?";
  pool.query(sql,[uid],(err,result)=>{
    if(err)throw err;
    res.send(result)
  })
})


//按关键词搜索
server.get("/search",(req,res)=>{
  var kw=req.query.kw;

  if(kw){
    var kws=kw.split(" ");
    kws.forEach((elem,i,arr)=>{
        arr[i]=`title like '%${elem}%'`;
    })
    var where=kws.join(" and ");
    var sql=`select * from cake_details where ${where}`;
    pool.query(sql,[],(err,result)=>{
      if(err)throw err;
      res.send(result)
    })
  }
})


//退出登录
server.get("/logOut",(req,res)=>{
  //req.session.destroy();
  delete req.session.uid;
  //console.log(req.session.uid)
  //return res.render('/login');
  //req.session.setAttribute("uid",null)
  res.send({code:3,msg:"退出成功"})
})