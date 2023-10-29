## 1. NoSQL四大分类

### 1.1. KV键值：

新浪：BerkeleyDB+redis

美团：redis+tair

阿里、百度：memcache+redis

### 1.2. 文档型数据库

CouchDB

MongoDB

MongoDB 是一个**基于分布式文件存储的数据库**。由 C++ 语言编写。旨在为 WEB 应用提供可

扩展的高性能数据存储解决方案。

MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰

富，最像关系数据库的。

### 1.3. 列存储数据库

Cassandra, HBase

分布式文件系统

### 1.4. 图关系数据库

它不是放图形的，放的是关系比如:朋友圈社交网络、广告推荐系统

社交网络，推荐系统等。专注于构建关系图谱

Neo4J, InfoGrid

## 2. linux安装设置

### 2.1. redis.conf的daemonize 设置yes或者no区别

daemonize:yes

redis采用的是单进程多线程的模式。当redis.conf中选项daemonize设置成yes时，代表开启

守护进程模式。在该模式下，redis会在后台运行，并将进程pid号写入至redis.conf选项

pidfifile设置的文件中，此时redis将一直运行，除非手动kill该进程。

daemonize:no

当daemonize选项设置成no时，当前界面将进入redis的命令行界面，exit强制退出或者关闭

连接工具(putty,xshell等)都会导致redis进程退出。

## 3. Redis 的 Java 客户端

### 3.1.  Jedis

Jedis 是老牌的 Redis 的 Java 实现客户端，提供了比较全面的 Redis 命令的支持，其官方网址是：http://tool.oschina.net/uploads/apidocs/redis/clients/jedis/Jedis.html。

优点：

- 支持全面的 Redis 操作特性（可以理解为API比较全面）。

缺点：

- 使用阻塞的 I/O，且其方法调用都是同步的，程序流需要等到 sockets 处理完 I/O 才能执行，不支持异步；
- Jedis 客户端实例不是线程安全的，所以需要通过连接池来使用 Jedis。

### 3.2. lettuce

lettuce （[?let?s]），是一种可扩展的线程安全的 Redis 客户端，支持异步模式。如果避免阻塞和事务操作，如BLPOP和MULTI/EXEC，多个线程就可以共享一个连接。lettuce 底层基于 Netty，支持高级的 Redis 特性，比如哨兵，集群，管道，自动重新连接和Redis数据模型。lettuce 的官网地址是：https://lettuce.io/

优点：

- 支持同步异步通信模式；
- Lettuce 的 API 是线程安全的，如果不是执行阻塞和事务操作，如BLPOP和MULTI/EXEC，多个线程就可以共享一个连接。

### 3.3. Redisson

Redisson 是一个在 Redis 的基础上实现的 Java 驻内存数据网格（In-Memory Data Grid）。它不仅提供了一系列的分布式的 Java 常用对象，还提供了许多分布式服务。其中包括( BitSet, Set, Multimap, SortedSet, Map, List, Queue, BlockingQueue, Deque, BlockingDeque, Semaphore, Lock, AtomicLong, CountDownLatch, Publish / Subscribe, Bloom filter, Remote service, Spring cache, Executor service, Live Object service, Scheduler service) Redisson 提供了使用Redis 的最简单和最便捷的方法。Redisson 的宗旨是促进使用者对Redis的关注分离（Separation of Concern），从而让使用者能够将精力更集中地放在处理业务逻辑上。Redisson的官方网址是：https://redisson.org/

优点：

- 使用者对 Redis 的关注分离，可以类比 Spring 框架，这些框架搭建了应用程序的基础框架和功能，提升开发效率，让开发者有更多的时间来关注业务逻辑；
- 提供很多分布式相关操作服务，例如，分布式锁，分布式集合，可通过Redis支持延迟队列等。

缺点：

- Redisson 对字符串的操作支持比较差。

建议使用：Jedis + Redisson

### 3.4. Jedis与Redisson选型对比

**1.**  **Jedis**与**Redisson**对比

**1.1.**  **概况对比**

Jedis是Redis的Java实现的客户端，其API提供了比较全面的Redis命令的支持；Redisson实现了分布式和可扩展的Java数据结构，和Jedis相比，功能较为简单，不支持字符串操作，不支持排序、事务、管道、分区等Redis特性。Redisson的宗旨是促进使用者对Redis的关注分离，从而让使用者能够将精力更集中地放在处理业务逻辑上。

**1.2.**  **编程模型**

Jedis中的方法调用是比较底层的暴露的Redis的API，也即Jedis中的Java方法基本和Redis的API保持着一致，了解Redis的API，也就能熟练的使用Jedis。而Redisson中的方法则是进行比较高的抽象，每个方法调用可能进行了一个或多个Redis方法调用。

如下分别为Jedis和Redisson操作的简单示例：

```java
Jedis设置key-value与set操作：

Jedis jedis = …;

jedis.set("key", "value");

List<String> values = jedis.mget("key", "key2", "key3");

Redisson操作map：

Redisson redisson = …

RMap map = redisson.getMap("my-map"); // implement java.util.Map

map.put("key", "value");

map.containsKey("key");

map.get("key");
```

**1.3.**  **可伸缩性**

Jedis使用阻塞的I/O，且其方法调用都是同步的，程序流需要等到sockets处理完I/O才能执行，不支持异步。Jedis客户端实例不是线程安全的，所以需要通过连接池来使用Jedis。

Redisson使用非阻塞的I/O和基于Netty框架的事件驱动的通信层，其方法调用是异步的。Redisson的API是线程安全的，所以可以操作单个Redisson连接来完成各种操作。

**1.4.**  **数据结构**

Jedis仅支持基本的数据类型如：String、Hash、List、Set、Sorted Set。

Redisson不仅提供了一系列的分布式Java常用对象，基本可以与Java的基本数据结构通用，还提供了许多分布式服务，其中包括（BitSet, Set, Multimap, SortedSet, Map, List, Queue, BlockingQueue, Deque, BlockingDeque, Semaphore, Lock, AtomicLong, CountDownLatch, Publish / Subscribe, Bloom filter, Remote service, Spring cache, Executor service, Live Object service, Scheduler service）。

在分布式开发中，Redisson可提供更便捷的方法。

**1.5.**  **第三方框架整合**

1    Redisson提供了和Spring框架的各项特性类似的，以Spring XML的命名空间的方式配置RedissonClient实例和它所支持的所有对象和服务；

2    Redisson完整的实现了Spring框架里的缓存机制；

3    Redisson在Redis的基础上实现了Java缓存标准规范；

4    Redisson为Apache Tomcat集群提供了基于Redis的非黏性会话管理功能。该功能支持Apache Tomcat的6、7和8版。

5　Redisson还提供了Spring Session会话管理器的实现。

## 4. 连接数据库

```java
redis-cli -c -h 127.0.0.1 -p 7001 
```

加上--raw防止中文查看乱码

```
redis-cli -c -h 127.0.0.1 -p 7001 --raw
```

## 5. Redis 监控命令（info字典表）

```html
一、Server 服务器信息

二、clients 已连接客户端信息

三、stats 一般统计信息

四、cput 计算量统计信息

五、commandstats 命令统计信息

六、cluster 集群信息

七?keyspace 数据库相关的统计信息

八、replication 主从复制信息，slave上显示的信息

九、persistence RDB 和 AOF 相关持久化信息

十、memory 内存信息

十一、Redis 性能查看与监控常用工具

info <section> ：以一种易于解释（parse）且易于阅读的格式，返回关于 Redis 服务器的各种信息和统计数值。通过给定可选的参数 section，可以让命令只返回某一部分的信息。section：server、clients、memory、persistence、stats、replication、cpu、commandstats、cluster、keyspace、all、default。时间复杂度：O(1)

举个栗子：连接的客户端数量：redis-cli info clients|grep connected_clients 后面只列举参数信息。

一、Server 服务器信息
server 部分记录了 Redis 服务器的信息，它包含以下域：
  ●  redis_version：Redis 服务器版本
  ●  redis_git_sha1：Git SHA1
  ●  redis_git_dirty：Git dirty flag
  ●  os：Redis 服务器的宿主操作系统
  ●  arch_bits：架构（32 或 64 位）
  ●  multiplexing_api：Redis 所使用的事件处理机制
  ●  gcc_version：编译 Redis 时所使用的 GCC 版本
  ●  process_id：服务器进程的 PID
  ●  run_id：Redis 服务器的随机标识符（用于 Sentinel 和集群）
  ●  tcp_port：TCP/IP 监听端口
  ●  uptime_in_seconds：自 Redis 服务器启动以来，经过的秒数
  ●  uptime_in_days：自 Redis 服务器启动以来，经过的天数
  ●  lru_clock：以分钟为单位进行自增的时钟，用于 LRU 管理

二、clients 已连接客户端信息
clients 部分记录了已连接客户端信息，它包含以下域：
【1】connected_clients：已连接客户端的数量（不包括通过从属服务器连接的客户端）
【2】client_longest_output_list：当前连接的客户端当中，最长的输出列表
【3】client_longest_input_buf : 当前连接的客户端当中，最大输入缓存
【4】blocked_clients：正在等待阻塞命令（BLPOP、BRPOP、BRPOPLPUSH）的客户端的数量

三、stats 一般统计信息
部分记录了一般统计信息，它包含以下域：
  ●  total_connections_received：服务器已经接受的连接请求数量
  ●  total_commands_processed：服务器已经执行的命令数量
  ●  instantaneous_ops_per_sec：服务器每秒中执行的命令数量
  ●  rejected_connections：因为最大客户端数量限制而被拒绝的连接请求数量
  ●  expired_keys：因为过期而被自动删除的数据库键数量
  ●  evicted_keys：因为最大内存容量限制而被驱逐（evict）的键数量
  ●  keyspace_hits：查找数据库键成功的次数
  ●  keyspace_misses：查找数据库键失败的次数
  ●  pubsub_channels：目前被订阅的频道数量
  ●  pubsub_patterns：目前被订阅的模式数量
  ●  latest_fork_usec：最近一次 fork()操作耗费的时间(毫秒)

四、cput 计算量统计信息
cpu 部分记录了 CPU 的计算量统计信息，它包含以下域：
【1】used_cpu_sys：Redis 服务器耗费的系统CPU（0.03）
【2】used_cpu_user：Redis 服务器耗费的用户CPU（0.01）
【3】used_cpu_sys_children：Redis后台进程耗费的系统CPU（0.00）
【4】used_cpu_user_children：Redis后台进程耗费的用户CPU（0.00）

五、commandstats 命令统计信息
 commandstats 部分记录了各种不同类型的命令的执行统计信息，比如命令执行的次数、命令耗费的 CPU 时间、执行每个命令耗费的平均 CPU 时间等等，对于每种类型的命令，这个部分都会添加一行一下格式的信息：

cmdstat_get:calls=1664657469,usec=8266063320,usec_per_call=4.97 #get表示命令，call表示命令执行次数，usec总共消耗的CPU时长(单位微秒)，平均每次消耗的CPU时长(单位微秒)。

六、cluster 集群信息
部分记录了和集群有关的信息，它包含以下域：cluster_enabled：一个标志值，记录集群功能是否已经开启。

七 keyspace 数据库相关的统计信息
keyspace 部分记录了数据库相关的统计信息，比如数据库的键数量、数据库已经被删除的过期键数量等，对于每个数据库，这个部分都会添加一行以下格式信息：

db0:keys=2,expires=0,avg_ttl=0 0号数据库有2个键、已经被删除的过期键数量为0、以及带有生存期的 key的数量。

八、replication 主从复制信息，slave上显示的信息
【1】role：实例的角色，是master or slave。如果当前服务器没有在复制任何其他服务器，那么这个域的值就是 master；否则的话，这个域的值就是 salve。注意，再创建复制连的时候，一个服务器也可能是另一个服务器的主服务器。
【2】如果当前服务器是一个从服务器的话，那么这个部分还会加上以下域：
  ●  master_host：此节点对应的 master的ip；
  ●  master_port：此节点对应的 master的port；
  ●  master_link_status：复制连接当前的状态，up 表示连接正常，down 表示连接断开。
  ●  master_last_io_seconds_ago：主库多少秒未发送数据到从库
  ●  master_sync_in_progress：从服务器是否在与主服务器进行同步
【3】如果同步操作正在进行，那么这个部分还会加上以下域：
  ●  master_sync_left_bytes：距离同步完成还缺少多少字节数据；
  ●  master_sync_last_io_seconds_ago：距离最近一次因为 SYNC 操作而进行 I/O 已经过去了多少秒；
【4】如果主从服务器之间的连接处于断线状态，那么这个部分还会加上以下域：
  ●  master_link_down_since_seconds：主从服务器连接断开了多少秒；
【5】以下是一些总会出现的域：
  ●  slave_repl_offset：slave 复制偏移量；
  ●  slave_priority：slave优先级；
  ●  slave_read_only：从库是否设置只读；
  ●  connected_slaves：连接的 slave实例个数；
  ●  master_repl_offset：0；
  ●  repl_backlog_active：0 #复制积压缓冲区是否开启；
  ●  repl_backlog_size：复制积压缓冲大小；
  ●  repl_backlog_first_byte_offset：复制缓冲区里偏移量的大小；
  ●  repl_backlog_histlen：此值等于 master_repl_offset - repl_backlog_first_byte_offset，该值不会超过repl_backlog_size的大小；

九、persistence RDB 和 AOF 相关持久化信息
persistence 记录了 RDB 和 AOF 相关持久化信息，它包含以下域：
【1】loading：一个标志值，记录了服务器是否正在载入持久化文件；
【2】rdb_changes_since_last_save：距离最后一次成功创建持久化文件之后，改变了多少个键值；
【3】rdb_bgsave_in_progress：一个标志值，记录服务器是否正在创建 RDB文件；
【4】rdb_last_save_time：最近一次成功创建 RDB文件的UNIX时间；
【5】rdb_last_bgsave_status：ok 一个标志值，记录了最后一次创建 RDB文件的结果是成功还是失败；
【6】rdb_last_bgsave_time_sec：-1 记录最后一次创建RDB文件耗费的秒数；
【7】rdb_current_bgsave_time_sec：-1 如果服务器正在创建RDB文件，那么这个值记录的就是当前的创建 RDB操作已经耗费了多长时间（单位为秒）；
【8】aof_enabled：0 一个标志值，记录了AOF是否处于打开状态；
【9】aof_rewrite_in_progress：0 一个标志值，记录了服务器是否正在创建 AOF文件；
【10】aof_rewrite_scheduled：0 一个标志值，记录了 RDB文件创建完之后，是否需要执行预约的AOF重写操作；
【11】aof_last_rewrite_time_sec：-1 记录了最后一次 AOF重写操作的耗时；
【12】aof_current_rewrite_time_sec：-1 如果服务器正在进行 AOF重写操作，那么这个值记录的就是当前重写操作已经耗费的时间（单位是秒）；
【13】aof_last_bgrewrite_status：ok 一个标志值，记录了最后一次重写 AOF文件的结果是成功还是失败；

十、memory 内存信息
memory 部分记录了服务器的内存信息，它包含以下域：
  ●  used_memory：由 Redis 分配器分配的内存总量，以字节（byte）为单位；
  ●  used_memory_human：以人类可读的格式返回 Redis 分配的内存总量；
  ●  used_memory_rss：从操作系统的角度，返回 Redis 已分配的内存总量（俗称常驻集大小）。这个值和 top 、 ps 等命令的输出一致；
  ●  used_memory_peak：Redis 的内存消耗峰值（以字节为单位）；
  ●  used_memory_peak_human：以人类可读的格式返回 Redis 的内存消耗峰值；
  ●  used_memory_lua：Lua 引擎所使用的内存大小（以字节为单位）；
  ●  mem_fragmentation_ratio：used_memory_rss 和 used_memory 之间的比率；
  ●  mem_allocator：在编译时指定的， Redis 所使用的内存分配器。可以是 libc 、 jemalloc 或者 tcmalloc ；

在理想情况下，used_memory_rss 的值应该只比 used_memory 稍微高一点儿。当 rss > used 两者的值相差较大时，表示存在（内部或外部的）内存碎片。内存碎片的比率可以通过 mem_fragmentation_ratio 的值看出；当 used > rss 时，表示 Redis 的部分内存被操作系统换出到交换空间了，在这种情况下，操作可能会产生明显的延迟。
由于 Redis无法控制如何将其分配映射到内存页，因此高使用率的内存 rss通常是内存使用量激增的结果。当 Redis 释放内存时，分配器可能会，也可能不会，将内存返还给操作系统。如果 Redis 释放了内存，却没有将内存返还给操作系统，那么 used_memory 的值可能和操作系统显示的 Redis 内存占用并不一致。查看 used_memory_peak 的值可以验证这种情况是否发生。

十一、Redis 性能查看与监控常用工具
redis-benchmark：Redis 基准信息，Redis服务器性能检测。如下：100个并发连接，100000个请求，检测 host=localhost 端口=6379的 Redis服务器性能：

redis-benchmark -h localhost -p 6379 -c 100 -n 100000
```



## 6. 查看所有的key（keys和scan的区别）

redis的单线程的。keys指令会导致线程阻塞一段时间，线上服务会停顿，直到指令执行完毕，服务才能恢复。在生产环境禁止用使用keys和类似的命令smembers。

```java
redis 127.0.0.1:6379> KEYS PATTERN
```

**Redis 2.8以上版本**给我们提供了一个更好的遍历key的命令 SCAN ：SCAN  每次执行都只会返回少量元素，所以可以用于生产环境，而不会出现像 KEYS 或者 SMEMBERS 命令带来的可能会阻塞服务器的问题。 **当SCAN命令的游标参数（即cursor）被设置为 0 时， 服务器将开始一次新的迭代， 而当服务器向用户返回值为 0 的游标时， 表示迭代已结束。**

```java
SCAN cursor [MATCH pattern] [COUNT count]
cursor - 游标。
pattern - 匹配的模式。
count - 指定从数据集里返回多少元素，默认值为 10 。
```

![img](https://img-blog.csdnimg.cn/20210706185939243.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2x4dzE4NDQ5MTI1MTQ=,size_16,color_FFFFFF,t_70)

## 7. 查看你的key是什么类型

```java
type key
```

## 8. 数据库切换和清空

```java
Select命令切换数据库
127.0.0.1:6379> select 7 
OK
Dbsize查看当前数据库的key的数量
127.0.0.1:6379> DBSIZE (integer) 5
Flushdb：清空当前库
Flushall：清空全部的库
127.0.0.1:6379> DBSIZE 
(integer) 5 
127.0.0.1:6379> FLUSHDB 
OK
127.0.0.1:6379> DBSIZE 
(integer) 0
```

## 9. 字符串String（单值单Value）命令

```java
## set、get、del、append、strlen
127.0.0.1:6379> set key1 value1 # 设置值 
OK
127.0.0.1:6379> get key1 # 获得key 
"value1" 
127.0.0.1:6379> del key1 # 删除key 
(integer) 1
127.0.0.1:6379> APPEND key1 "-2333" # 对已存在的字符串进行 APPEND,对不存在的 key 进行 APPEND ，等同于 SET
127.0.0.1:6379> STRLEN key1 # 获取字符串的长度 
(integer) 10
```

```java
## setex（set with expire）键秒值 
## setnx（set if not exist）
127.0.0.1:6379> setex key3 60 expire # 设置过期时间 
OK
127.0.0.1:6379> ttl key3 # 查看剩余的时间 
(integer) 55 
127.0.0.1:6379> setnx mykey "redis"# 如果不存在就设置，成功返回1 
(integer) 1 
127.0.0.1:6379> setnx mykey "mongodb" # 如果存在就设置，失败返回0 
(integer) 0
## mset Mset 命令用于同时设置一个或多个 key-value 对。 
## mget Mget 命令返回所有(一个或多个)给定 key 的值。 
## 如果给定的 key 里面，有某个 key 不存在，那么这个 key 返回特殊值 nil 。 
## msetnx 当所有 key 都成功设置，返回 1 。 
## 如果所有给定 key 都设置失败(至少有一个 key 已经存在)，那么返回 0 。属于原子操作
```

```java
## incr、decr 一定要是数字才能进行加减，+1 和 -1。 
## incrby、decrby 命令将 key 中储存的数字加上指定的增量值。
127.0.0.1:6379> incr views # 浏览 + 1 
(integer) 1
127.0.0.1:6379> incrby views 10 # +10 
(integer) 11
## getrange 获取指定区间范围内的值，类似between...and的关系，从零到负一表示全部
## setrange 设置指定区间范围内的值，格式是setrange key值 具体值
```

## 10. 其他更多类型详细命令可看

[地址]: https://www.w3cschool.cn/redis/redis-hashes.html
