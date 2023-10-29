## 1. 查看表结构

```mysql
describe 表名;  查看表结构
show create table 表名; 查看创建表语句
```

## 2. 批量修改mysql一个字段数据

```mysql
（1）update 表名 set 字段名=replace(字段名，原值，新值);

（2）update 表名 set 字段名=新值 where 条件（字段名=原值);

（3）update 表名 set 字段名=新值 where 条件（字段名 is not null);
```

## 3. 增加、修改、删除表字段

### 3.1. alter add 命令用来增加表的字段

```mysql
alter table car_evidence add `unit_name` varchar(64) comment '单位'
```

### 3.2. alter drop 命令删除表的字段

```mysql
alter table car_evidence drop column `unit_name`; 
```

### 3.3. alter modify 命令修改表的字段

```mysql
alter table t_plan MODIFY box_size VARCHAR(32) comment '盒内的数量';
```

## 4. 删除数据表的三种方式详解

1、当你不再需要该表时， 用 drop;

2、当你仍要保留该表，但要删除所有记录时， 用 truncate;

3、当你要删除部分记录或者有可能会后悔的话， 用 delete。

```mysql
drop table tb;
truncate （table） tb;（不可回滚）
delete from tb (where); （可加where,回滚）
truncate删除后将重建索引（新插入数据后id从0开始记起），而 delete不会删除索引 
```
