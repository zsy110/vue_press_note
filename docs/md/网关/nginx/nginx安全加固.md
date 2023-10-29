## 1. 在Nginx中禁用server_tokens指令
该server_tokens指令告诉nginx的错误页面显示其当前版本。 这是不可取的，因为您不想与世界共享这些信息，以防止在您的Web服务器由特定版本中的已知漏洞造成的攻击。
要禁用server_tokens指令，设定在关闭服务器块内：
```prism language-c
server {
listen       192.168.0.88:80;
Server_tokens        off;
server_name  howtoinglovesnginx.com www.nginx.com;
access_log  /var/www/logs/nginx.access.log;
error_log  /var/www/logs/nginx.error.log error;
root   /var/www/nginx.com/public_html;
index  index.html index.htm;
}
```
## 2. 在Nginx中禁用不需要的HTTP方法
对于一般的网站和应用程序，你应该只允许GET，POST，和HEAD并禁用所有其他人。
为此，将以下行代码放在服务器块中。 444 HTTP响应指空响应，并经常在Nginx的用来愚弄恶意软件攻击：
```prism language-c
if ($request_method !~ ^(GET|HEAD|POST)$) {
return 444;
}
```
## 3. 在Nginx中设置缓冲区大小限制
为了防止对您的Nginx Web服务器的缓冲区溢出攻击，坐落在一个单独的文件以下指令（创建的文件名为/etc/nginx/conf.d/buffer.conf为例）：
```prism language-c
client_body_buffer_size  1k;
client_header_buffer_size 1k;
client_max_body_size 1k;
large_client_header_buffers 2 1k;
```
上面的指令将确保对您的Web服务器的请求不会导致系统中的缓冲区溢出。
然后在配置文件中添加一个include指令：
```prism language-c
include /etc/nginx/conf.d/*.conf;
```
## 4. 日志设置
查看nginx.conf配置文件中，error_log、access_log前的“#”是否去掉
将error_log前的“#”去掉，记录错误日志 将access_log前的“#”去掉，记录访问日志 设置access_log，修改配置文件如下：
```prism language-c
log_format  nsfocus  '$remote_addr - $remote_user [$time_local] '
              ' "$request" $status $body_bytes_sent "$http_referer" '
              ' "$http_user_agent" "$http_x_forwarded_for"'; access_log  logs/access.log  nsfocus;
```
nsfocus是设置配置文件格式的名称
## 5. 自定义错误信息
修改src/http/ngx_http_special_response.c，自己定制错误信息
```prism language-c
### messages with just a carriage return.
static char ngx_http_error_400_page[] = CRLF;
static char ngx_http_error_404_page[] = CRLF;
static char ngx_http_error_413_page[] = CRLF;
static char ngx_http_error_502_page[] = CRLF;
static char ngx_http_error_504_page[] = CRLF;
```
**常见错误：**
```prism language-c
400 bad request
404 NOT FOUND
413 Request Entity Too Large
502 Bad Gateway
504 Gateway Time-out
```
## Nginx安全防护
## 1.高Nginx后端服务指定的Header隐藏状态
当nginx作为反向代理时,会配置很多站点，为了不想泄露后端webserver主机信息，可以在http全局下配置隐藏Nginx后端服务X-Powered-By头。
隐藏Nginx后端服务X-Powered-By头
```prism language-c
隐藏Nginx后端服务指定Header的状态： 
1、打开conf/nginx.conf配置文件； 
2、在http下配置proxy_hide_header项； 
     增加或修改为 proxy_hide_header X-Powered-By; proxy_hide_header Server;
```
```prism language-c
http {
       .....
       proxy_hide_header X-Powered-By; 
       proxy_hide_header Server;
       ....
}
```
重新加载最新配置
## 2.针对Nginx SSL协议进行安全加固
配置此项请确认nginx支持OpenSSL，运行如果返回中包含built with OpenSSL则表示支持OpenSSL。如果没有返回，不需要后续配置了。
Nginx SSL协议的加密策略进行加固
```prism language-c
Nginx SSL协议采用TLSv1.2： 1、打开conf/nginx.cconf配置文件； 2、配置

server { 
               ...
              ssl_protocols TLSv1.2;
               ...
                     }
```
## 3.检查是否配置Nginx账号锁定策略
1.执行系统命令passwd -S nginx来查看锁定状态
出现Password locked证明锁定成功
如：nginx LK … (Password locked.)或nginx L …
2.默认符合，修改后才有（默认已符合）
3.执行系统命令passwd -l nginx进行锁定
```prism language-c
配置Nginx账号登录锁定策略：
Nginx服务建议使用非root用户(如nginx，nobody)启动，并且确保启动用户的状态为锁定状态。
可执行passwd -l <Nginx启动用户> 如passwd -l nginx 来锁定Nginx服务的启动用户。
命令 passwd -S <用户> 如passwd -S nginx可查看用户状态。 
修改配置文件中的nginx启动用户修改为nginx或nobody 如： user nobody;
```
## 4.检查Nginx进程启动账号
Nginx进程启动账号状态，降低被攻击概率
```prism language-c
修改Nginx进程启动账号： 
1、打开conf/nginx.conf配置文件； 
2、查看配置文件的user配置项，确认是非root启动的；
3、如果是root启动，修改成nobody或者nginx账号； 备注： 
4、修改完配置文件之后需要重新启动Nginx。
```
## 5.Nginx的WEB访问日志记录状态
Nginx后端服务指定的Header隐藏状态
```prism language-c
开启Nginx的WEB访问日志记录： 
1、打开conf/nginx.conf配置文件； 
2、在http下配置access_log项
   access_log logs/host.access.log main; 
3、 并删除off项
```
## 6.隐藏Nginx服务的版本
查看版本号
```java
##curl -I 127.0.0.1
/etc/nginx#nginx -V
```
Nginx服务的Banner隐藏状态
```prism language-c
Nginx后端服务指定的Header隐藏状态隐藏Nginx服务Banner的状态： 
1、打开conf/nginx.conf配置文件； 
2、在server栏目下，配置server_tokens项 server_tokens off;
```
```prism language-c
http{
    .....
    server_tokens off;
    ....
}
```
## 7.确保NGINX配置文件权限为644
把控配置文件权限以抵御外来攻击
```prism language-c
修改Nginx配置文件权限： 
执行chmod 644 <conf_path>来限制Nginx配置文件的权限；(<conf_path>为配置文件的路径，
如默认/安装目录/conf/nginx.conf或者/etc/nginx/nginx.conf，或用户自定义，请 自行查找)
```
## 8.nginstatus
```prism language-c
Active connections    Nginx正处理的活动链接数个数；重要
accepts               Nginx启动到现在共处理了多少个连接。
handled               Nginx启动到现在共成功创建几次握手。 
requests              Nginx总共处理了几次请求。
Reading               Nginx读取到客户端的 Header 信息数。
Writing               Nginx返回给客户端的 Header 信息数。
Waiting               Nginx已经处理完正在等候下一次请求指令的驻留链接，开启。
Keep-alive的情况下，Waiting这个值等于active-（reading + writing）。
请求丢失数=(握手数-连接数)可以看出,本次状态显示没有丢失请求。、
```
## 9.更改源码隐藏软件名称及版本号
在nginx编译安装之前，先更改，之后再编译安装
1.更改版本号
修改nginx-1.6.4/src/core/nginx.h
```java
nginx-1.6.2/src/core# sed -n '13,17p' nginx.h
##修改为需要的版本号
##将nginx修改为其他名称
```
查看修改效果
```java
nginx-1.6.4#curl -I 127.0.0.1
```
**改nginx-1.6.12/src/http/ngx_http_header_filter_module.c**
需要修改的字符串
```java
##grep 'Server:nginx' ngx_http_header_filter_module.c
```
修改后的字符串
```java
##grep 'Server:Apache' ngx_http_header_filter_module.c
```
## 10.更改掉nginx默认用户及用户组（worker进程服务用户优化）
**1.查看默认配置如下：**
默认情况下，nginx服务启动，使用的用户和组默认都是nobody，
```java
##grep '#user' nginx.conf.default
```
**2.建立nginx用户**
```java
##useradd nginx -s /sbin/nologin -M
##id nginx
```
**3.配置文件nginx.conf中修改（也可以编译安装时指定默认）**
在配置文件最外层上面
```java
worker_processes 1;
user nginx;
```
**4.让woker进程使用普通用户运行**
为master服务降权：使用非root跑nginx master
注意：不能用80特权端口 ，前端nginx反向代理转端口
```java
nginx -c config...
/home/inca/
bin,site,conf,logs
```
## 11.配置nginx worker进程个数
nginx由master和worker进程组成，master进程相当于管理员，worker进程为用户提供服务
一般设置为cpu核数或则核数x2，用top按1查看
修改nginx.conf配置文件第一行
```java
worker_processes 4;
```
## 12.根据cpu核数进行nginx进程优化
把几个进程分配在一个cup上，cup亲和力
1.不同cpu设置如下
四核cpu配置：
```java
worker_processes 4;
worker_cpu_affinity 001 0010 0100 1000;
```
八核cpu服务器参数配置：
```java
worker_processes 8;
worker_cpu_affinity 00000001 00000010 00000100 000010000 00010000 00100000 01000000 10000000;
worker_cpu_affinitv 0101 0101;
```
2.官方文档说明
```java
worker_processes 4;
worker_cpu_affinity 001 0010 0100 1000;
binds each worker process to a separate CPU,while
worker_processes 2;       4核2进程
worker_cpu_affinitv 0101 0101;
```
## 13.nginx事件处理模型优化
nginx的连接处理机制在不同的操作系统上采用不用的IO模型，在linux下，nginx使用epoll的IO多路复用模型，在freebsd使用kqueue的IO多路复用模型，在solaris使用/dev/pool方式的IO多路复用模型，在windows使用的icop等等。
根据系统类型不同选择不同的事务处理模型，选择有“use [ kqueue | rtsig |epool |dev/pool |select |pllo ];”我们使用的是Centos6.5的linux，因此将nginx的事件处理模型调整为epool模型。
具体参数如下在优化4下边挨着：
```java
events {
use epoll;
worker_connections 1024;
}
```
## 14.调整nginx worker单个进程允许的客户端最大连接数
这个值根据服务器性能和程序的内存来指定（一个进程启动使用的内存根据程序确定）
```java
events {
use epoll;
worker_connections 20480;
}
```
这个参数是单个进程的最大链接数，实际最大链接数是worker技能书乘以这个数。
Max_client=worker_processes*worker_connections
## 15.配置nginx worker进程最大打开文件数
```java
worker_rlimit_nofile 65535;
```
相当于系统ulimit -HSn，应该是总的。
理念：配置参数不是越大越好，最好设为服务器承受的极限点。
## 16.开启高效的文件传输模式
在http字段设置
```java
http {
include      mime.types;媒体类型
defaul_type application/octet-stream
sednfile      on;
tcp_nopush on ;   只有sendfile开启模式下有限
........  .   
}
```
tcp_nopush参数可以允许把http response header和文件的开始放在一个文件里发布，积极的作用是减少网络报文段的数量。
## 17.设置连接超时时间
保护服务器资源，硬件CPU mem，连接数。
建立连接也是要消耗资源的，我们一般断掉那些连上的链接，但是不做事的
php网站建议短连接，PHP程序建立连接消耗的资源和时间要少。
JAVA网站建议长连接，JAVA程序建立连接消耗的资源和时间要多。
在http字段设置
```java
http {
. . . . . . 
keepalive_timeout 60;
#####设置客户端连接保持会话的超时时间，超过这个时间，服务器会关闭该连接。
tcp_nodelay on;
#####打开tcp_nodelay，在包含了keepalive参数才有效
client_header_timeout 15;
#####设置客户端请求读取超时时间，如果超过这个时间，客户端还没有发送任何数据，Nginx将返回"Request time out (408)" 错误
client_body_timeout 15
#####设置客户端请求主题读取超时时间，如果超过这个时间，客户端还发送任何数据，Nginx将返回"Request time out (408)" 错误
send_timeout 15;
#####指定响应客户端的超时时间，这个超过仅限于两个连接活动之间的时间，客户端没有任何活动，Nginx将会关闭连接
. . . . . . 
}
```
## 18.上传文件大小限制（动态应用）
```java
http {
. . . . . . 
client_max_body_size 10m;
.... .  . 
}
```
参考连接 ：
nginx安全加固 ：https://mp.weixin.qq.com/s/EUxa9ZSBCVTHgq3RATvoQg
Nginx安全防护 ：https://www.jianshu.com/p/4e024c1f5591
本文链接：http://www.yunweipai.com/11467.html

本文转自[https://blog.csdn.net/qq_40907977/article/details/106942583?ops_request_misc=&amp;request_id=&amp;biz_id=102&amp;utm_term=nginx%E5%AE%89%E5%85%A8%E5%8A%A0%E5%9B%BA&amp;utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-0-106942583.142^v92^chatgptT0_1&amp;spm=1018.2226.3001.4187](https://blog.csdn.net/qq_40907977/article/details/106942583?ops_request_misc=&request_id=&biz_id=102&utm_term=nginx%E5%AE%89%E5%85%A8%E5%8A%A0%E5%9B%BA&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-0-106942583.142^v92^chatgptT0_1&spm=1018.2226.3001.4187)，如有侵权，请联系删除。
