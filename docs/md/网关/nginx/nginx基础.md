## 1. nginx配置文件路径

进入nginx安装目录（user/local/nginx）

进入sbin目录，输入 `./nginx -t`
查看nginx配置文件路径以及该文件语法是否正确

`./nginx -v` 查看nginx版本

```java
配置文件路径：/usr/local/nginx/conf/nginx.conf
```

## 2. 启动

启动代码格式：nginx安装目录地址 -c nginx配置文件地址

```java
[root@LinuxServer sbin]# /usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
```

## 3. 停止

三种方式（列举一种从容停止）

1.查看进程号

```java
[root@LinuxServer ~]# ps -ef|grep nginx
```

![img](https://img-blog.csdnimg.cn/1dc5cca5344b476daf03492ce5f8acba.png)

2.杀死进程

```java
[root@LinuxServer ~]# kill -QUIT 2072
```

## 4. 重启

进入nginx可执行目录sbin下，输入命令`./nginx -s reload` 

## 5. 常用nginx正则表达式

```java
^： 匹配字符串的开始位置；
$：匹配字符串的结束位置；.*:   .匹配任意字符，*匹配数量0到正无穷；
\. 斜杠用来转义，\.匹配 .    特殊使用方法，记住记性了；
（值1|值2|值3|值4）：或匹配模式，例：（jpg|gif|png|bmp）匹配jpg或gif或png或bmp
i不区分大小写？：重复0次或1次
+：重复一次或更多次
```

更多资料可看：[https://www.cnblogs.com/fengzhongzhuzu/p/8855258.html](https://www.cnblogs.com/fengzhongzhuzu/p/8855258.html)
