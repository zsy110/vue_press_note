## 1.创建表空间

```mysql
CREATE tablespace huaxi_test
datafile 'F:\APP\ADMINISTERED\ORADATA\HUAXI\huaxi.DBF'
SIZE 100m
autoextend ON 
NEXT 10m
```

```mysql
--设置自增序列，名称为"seq_userinfo"
create sequence myseq
 increment by 1		
 start with 1		
 nomaxvalue		
 nominvalue			
 cache 10;	

drop sequence myseq
 
CREATE TABLE fund_manager_info (
id number(11)  PRIMARY KEY,
fund_manager_id VARCHAR2(20) NOT NULL,
working_years NUMBER(12,10),
annual_return NUMBER(12,10),
create_time TIMESTAMP DEFAULT SYSTIMESTAMP NOT NULL,
update_time TIMESTAMP DEFAULT SYSTIMESTAMP NOT NULL,
del_flag NUMBER(1) DEFAULT 1
);

CREATE TABLE fund_manager_code (
id number(11)  PRIMARY KEY,
fund_manager_id VARCHAR2(20) NOT NULL,
fund_code VARCHAR2(20) NOT NULL,
create_time TIMESTAMP DEFAULT SYSTIMESTAMP NOT NULL,
update_time TIMESTAMP DEFAULT SYSTIMESTAMP NOT NULL,
del_flag NUMBER(1) DEFAULT 1
);
DROP TABLE FUND_MANAGER_INFO;
```

## 2.添加表注释

语法：COMMENT ON TABLE 表名 IS '表注释';

```sql
--添加表注释
COMMENT ON TABLE STUDENT_INFO IS '学生信息表';
```

## 3.添加字段注释

语法：COMMENT ON COLUMN 表名.字段名 IS '字段注释';

```sql
--添加字段注释：
COMMENT ON COLUMN STUDENT_INFO.STU_ID IS '学号';
COMMENT ON COLUMN STUDENT_INFO.STU_NAME IS '姓名';
COMMENT ON COLUMN STUDENT_INFO.EMAIL IS '邮箱';
COMMENT ON COLUMN STUDENT_INFO.SEX IS '性别';
COMMENT ON COLUMN STUDENT_INFO.AGE IS '年龄';
COMMENT ON COLUMN STUDENT_INFO.CLASS_ID IS '班级编号';
COMMENT ON COLUMN STUDENT_INFO.REGDATE IS '创建期间';
```

mybatis映射中可以通过&lt;foreach&gt;&lt;/foreach&gt;标签来实现Oracle的批量插入、更新和删除
&nbsp;&nbsp; &nbsp;&lt;foreach&gt;标签中主要有以下属性：
&nbsp;&nbsp; &nbsp;collection、item、index、open、separate、close
&nbsp;&nbsp; &nbsp;collection：该属性必须指定，指代Dao层接口传递的数据类型，主要有三种：
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;①：list集合类型；collection=”list“
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;②：array数组类型；collection=”array“
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;③：map映射类型；collection=”map“
&nbsp;&nbsp; &nbsp;item：别名，表示集合中每一个元素迭代时的别名，获取数据时必须指定用别名来指定，不然会报错。
&nbsp;&nbsp; &nbsp;index：迭代下标，即迭代过程中的位置。
&nbsp;&nbsp; &nbsp;open:表示语句以什么开始。
&nbsp;&nbsp; &nbsp;separate：表示每次迭代之间以什么符号作为分割。
&nbsp;&nbsp; &nbsp;close：表示语句以什么结束。

## 4.批量插入

&nbsp;&nbsp; &nbsp;Oracle中可以使用java中的for循环逐条插入数据库，但是这种效率比较低，不适合一次性插入大量的数据，所以可以利用Oracle中的“dual”表
&nbsp;&nbsp; &nbsp;实现批量处理，并且效率高
&nbsp;&nbsp; &nbsp;比如有这样一张表
![image](https://img-blog.csdn.net/20180125103253465?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvbHdwY3p5MQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)


1、collection为list类型
![image](https://img-blog.csdn.net/20180125104152483?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvbHdwY3p5MQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

其他类型的自己尝试。。。。。

## 5.批量更新

&nbsp;&nbsp; &nbsp;1、collection为list类型

```mysql
<update id="updateAttractionsBatch" parameterType="java.util.List">
    begin  
        <foreach collection="list" item="item" index="index" separator=";" > 
            update ATTRACTIONS 
            <set>
            <if test="item.id!=null and item.id!=''">
                id = #{item.id},
            </if>

            <if test="item.head!=null and item.head!=''">
                HEAD = #{item.head},
            </if>

            </set>
            where id = #{item.id}
            </foreach>
        ;end;
</update>
```

其他类型的自己尝试。。。。。

## 6.批量删除

&nbsp;&nbsp; &nbsp;1、collection为array类型
注意画圈的部分。![image](https://img-blog.csdn.net/20180125103837417?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvbHdwY3p5MQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

