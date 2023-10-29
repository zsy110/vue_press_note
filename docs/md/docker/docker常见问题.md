## 1. Docker容器内部无法解析域名问题

https://blog.csdn.net/Lanna_w/article/details/125948683?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-1-125948683-blog-127728790.pc_relevant_3mothn_strategy_and_data_recovery&spm=1001.2101.3001.4242.2&utm_relevant_index=4

## 2. Docker 容器中的域名解析配置问题解决的四种方式

https://blog.csdn.net/qq_35427589/article/details/125219621?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-1-125219621-blog-125948683.pc_relevant_landingrelevant&spm=1001.2101.3001.4242.2&utm_relevant_index=4

## 3. 查看容器挂载目录

```dockerfile
 docker inspect 容器名或ID | grep Mounts -A 20
```

![image-20221206153943690](https://img-blog.csdnimg.cn/8ec7a442021f45aca6a0ae8986e17ff4.png)

## 4. 查看容器内存

```dockerfile
docker stats
```

PID：进程的ID

USER：进程所有者

PR：进程的优先级别，越小越优先被执行

NInice：值

VIRT：进程占用的虚拟内存

RES：进程占用的物理内存

SHR：进程使用的共享内存

S：进程的状态。S表示休眠，R表示正在运行，Z表示僵死状态，N表示该进程优先值为负数

%CPU：进程占用CPU的使用率

%MEM：进程使用的物理内存和总内存的百分比

TIME+：该进程启动后占用的总的CPU时间，即占用CPU使用时间的累加值。

COMMAND：进程启动命令名称
