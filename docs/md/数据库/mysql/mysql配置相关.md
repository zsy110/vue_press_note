## 1.1. 安装

（1）第一步：去官网下载安装

------

（2）第二步：先解压，然后在mysql下创建一个my.ini文件，
更改my.ini文件里面的两行安装目录，
第二行加上\data，
my.ini文件不能多或少一个符号，
在path（环境变量里面）加上mysql路径（/bin）。

------

（3）第三步：进入命令指示符（cmd），
输入mysqld --initialize-insecure --user=mysql；
再输入mysqld -install；
出现Service successfully installed.表示配置完成
启动数据库net start mysql；
输入mysql -u root -p，不用输入密码直接回车
出现mysql>表示配置完成
输入alter user user() identified by "密码";
输入net stop mysql关闭数据库
注意：使用过程分号别忘

## 1.2. mysql时区设置

方法1：

  set global time_zone = ‘+8:00’;
  这个可以修改mysql全局时区为北京时间，也就是我们所在的东8区

  set time_zone = ‘+8:00’;
   修改当前会话时区

   flush privileges;
   使之立即生效。

   方法2：
修改配置文件 /etc/my.cnf

```xml
[mysqld]
default-time_zone = '+8:00'
```

## mysql设置远程访问处理

```mysql
MySQL 8.0已经不支持下面这种命令写法
8.0以前可使用这种
grant all privileges on *.* to root@"%" identified by ".";
模板： grant all privileges on 库名.表名 to '用户名'@'IP地址' identified by '密码' with grant option; flush privileges;

正确的写法是先创建用户
CREATE USER 'root'@'%' IDENTIFIED BY '123456!';
再给用户授权
grant all privileges on *.* to 'root'@'%' ;

flush privileges;//刷新系统权限表 
```

## SQLyog错误号码 plugin caching_sha2_password could not be loaded

### 3.1. 原因

MySQL新版默认使用`caching_sha2_password`作为身份验证插件，而旧版是使用`mysql_native_password`
当连接MySQL时报错“plugin caching_sha2_password could not be loaded”时，可换回旧版插件。

### 3.2. 解决

```mysql
1 远程命令行登录mysql
mysql -hlocalhost -uroot -proot -P3306
2 操作mysql数据库
use mysql;
3 查看用户名使用的身份验证插件：
mysql> select Host,User,plugin from mysql.user;
4 修改root用户的身份验证插件
//本地用户
alter user root@localhost identified with mysql_native_password by '123456';
FLUSH PRIVILEGES；
//远程用户
alter user root@'%' identified with mysql_native_password by '123456';
FLUSH PRIVILEGES；
```

