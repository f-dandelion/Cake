SET NAMES UTF8;
DROP DATABASE IF EXISTS cake;
CREATE DATABASE cake CHARSET=UTF8;
USE cake;


/*详情*/
CREATE TABLE cake_details(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(128),         #主标题
  subtitle VARCHAR(128),      #副标题
  price DECIMAL(10,2),        #价格
  spec VARCHAR(64)           #规格
);

INSERT INTO cake_details VALUES
(1,'雪域牛乳芝士','经典之作 热销多年',118,'约13 x 13 x 4 cm,约480g'),
(2,'草莓雪域芝士','时令草莓邂逅浓浓芝士',118,'约 13 x 13 x 4 cm,约440g'),
(3,'雪域蓝莓芝士','营造生日派对闪耀时刻',118,'约 13 x 13 x 4 cm,约510g'),
(4,'美刀刀','人气咖 暴富暴美大赢家',236,'约 20 x 16 x 4 cm,约1000g'),
(5,'巧克力松露·熠彩','巧克力爱好者的福音',158,'约 13 x 13 x 4 cm,约420g'),
(6,'阿华田','浓郁麦芽可可 绵软与甜脆的碰撞',158,'约 13 x 5 cm,约450g'),
(7,'王子','小王子的专属宠溺',118,'约 13 x 4 cm,约510g'),
(8,'粉色玫瑰森林','近乎于童话的味道',118,'约 13 x 13 x 7 cm,约680g'),
(9,'花涧桃桃','桃香四溢 沁甜桃肉融入爽滑果冻',158,'约 13 x 13 x 4 cm,约415g'),
(10,'环游世界','9种口味一次过瘾',158,'约 13 x 13 x 4 cm,约405g'),
(11,'花花世界','绽放柔情的花花世界',236,'约 12 x 12 x 7 cm,约454g'),
(12,'公主','少女心爆棚 甜美公主必选',118,'约 13 x 6 cm,约500g'),
(13,'杨枝甘露','口碑超人气 清爽来袭',118,'约 13 x 13 x 4 cm,约650g'),
(14,'草莓拿破仑','薄脆酥皮搭配清甜草莓',118,'约 13 x 13 x 4 cm,约615g'),
(15,'蓝莓拿破仑','数不清的鲜果乐趣',118,'约 13 x 13 x 4 cm,约515g'),
(16,'萌萌紫','以“萌”之名 遇见美好',158,'约 15 x 15 x 9 cm，约540g'),
(17,'数字蛋糕','人见人爱火爆Ins 明星同款',118,'约 13 x 20 x 8 cm,约470g'),
(18,'茶草京都','抹茶控京都寻味 草色茶香自悠然',118,'约 13 x 13 x 4 cm,约470g'),
(19,'一杯奶茶','奶茶控的快乐源泉！',158,'约 12 x 12 x 8 cm,约530g'),
(20,'咸蛋皇','热度持续飙升 人气咸蛋黄蛋糕',158,'约 13 x 13 x 3 cm,约515g'),
(21,'栗栗可薯','秋季时令 板栗与红薯的浓郁绵密',158,'约 13 x 13 x 4 cm,约510g'),
(22,'芋见伯爵','芋泥+伯爵茶神仙CP 治愈系美味',118,'约 13 x 13 x 6 cm,约565g');


/*购物车*/
CREATE TABLE cake_cart(
  id     INT PRIMARY KEY AUTO_INCREMENT,
  lid    INT,
  price  DECIMAL(10,2),
  count  INT,
  title  VARCHAR(255),
  uid    INT
);

/*用户信息*/
CREATE TABLE cake_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  phone VARCHAR(16),
  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32)      #用户名，如王小明
);
INSERT INTO cake_user VALUES
(NULL,'tom',md5('123456'),'13111111111','','汤姆')