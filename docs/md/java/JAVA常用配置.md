# 1.  tomcat日志中文乱码设置

![在这里插入图片描述](https://img-blog.csdnimg.cn/d594de2ae18c4cc3b2d2a45d15163fc3.png)

# 2. IDEA使用

## 2.1.  环境变量配置

图片: ![jdk的bin所在目录](https://img-blog.csdnimg.cn/42e6fe73351147ee8839c64831964e2b.png)![在这里插入图片描述](https://img-blog.csdnimg.cn/ed5f006a0e9548688718f5d409e82a24.png)

## 2.2. 常用插件

![image-20230101160012247](https://img-blog.csdnimg.cn/f121e4dcaadd44b5829387e88931ea8b.png)

![image-20230101160050449](https://img-blog.csdnimg.cn/100a7eac025644d6b97d643a3ca11f9f.png)

![image-20230101160106312](https://img-blog.csdnimg.cn/f6bf421113fc4f239d4fd01c55174c20.png)



## 2.3.  JUnit Generator设置

![在这里插入图片描述](https://img-blog.csdnimg.cn/f30effbe57704005824e5bf2850fa6fc.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/dc947fc503b8476b9566862833ff7e7d.png)
Junit4内文件

```java
#macro (cap $strIn)$strIn.valueOf($strIn.charAt(0)).toUpperCase()$strIn.substring(1)#end 
#foreach ($entry in $entryList) 
#set( $testClass="${entry.className}Test") 
package $entry.packageName; 

import org.junit.Test; 
import org.junit.Before; 
import org.junit.After; 
import org.junit.BeforeClass; 
import org.junit.AfterClass; 

//@SpringBootTest
//@RunWith(SpringJUnit4ClassRunner.class)
//@ContextConfiguration(locations = { "classpath*:/application-context-test.xml"})
//@ContextConfiguration(classes = {SpringCofiguration.class})
public class $testClass { 

    @Before
    public void before() { 
    } 
    
    @After
    public void after() { 
    } 
    
    @BeforeClass
    public static void beforeClass() { 
    } 
    
    @AfterClass
    public static void afterClass() { 
    } 
    
    #foreach($method in $entry.methodList) 
    /** 
    * 
    * Method: $method.signature 
    * 
    */ 
    @Test
    public void test#cap(${method.name})() { 
    //TODO: Test goes here... 
    } 
    
    #end 
    
    #foreach($method in $entry.privateMethodList) 
    /** 
    * 
    * Method: $method.signature 
    * 
    */ 
    @Test
    public void test#cap(${method.name})() { 
    //TODO: Test goes here... 
    #foreach($string in $method.reflectionCode) 
    $string 
    #end 
    } 

#end 
} 
#end

```

## 2.4. Jrebel设置

首先下载激活vpn，在阿里云盘。
激活窗口中，需要填入license的地址和邮箱，后面的邮箱可以随便写一个，license地址则需要使用我们刚才开启的工具上显示的地址：http://127.0.0.1:8888，而且地址必须跟一个参数（参数生成地址：https://www.guidgen.com/），如下图所示：
![在这里插入图片描述](https://img-blog.csdnimg.cn/b4c2b149ad7e42bd800ee335e9f7b2c9.webp)
激活后设置为离线模式
![在这里插入图片描述](https://img-blog.csdnimg.cn/030171c186cf4df382979628aa4a50d4.png)

## 2.5. 类模板设置

![在这里插入图片描述](https://img-blog.csdnimg.cn/57cb2aa6204b49bdad2371615a0067c2.png)

## 2.6. 方法模板设置

首先新建模板组
![在这里插入图片描述](https://img-blog.csdnimg.cn/a924a6f7e2c34c64b90131d9e22cf21f.png)
然后新建实时模板
![2](https://img-blog.csdnimg.cn/ee3021c9d05141acaf0c4ee9adfa9218.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/1943ebd4af51410ebc523b4bd915799d.png)
模板文本内容：

```java
**
* @Description  
$param$
* @return $returns$
* @Author 周生运
* @Date $date$ $time$
*/
```

编辑变量及展开方式设置为Enter
![在这里插入图片描述](https://img-blog.csdnimg.cn/9d178807a4f34553938655e42f90fb74.png)
param变量默认值设置为多行展示

```java
groovyScript( "def result='';  def params=\"${_1}\".replaceAll('[\\\\[|\\\\]|\\\\s]', '').split(',').toList();  for(i = 0; i < params.size(); i++) {     result+='* @'+'param ' + params[i] + ((i < params.size() - 1) ? '\\n': '') };  return result", methodParameters() ) 

```

# 3. GIT汉化教程

下载阿里云盘内git
bash汉化：
![在这里插入图片描述](https://img-blog.csdnimg.cn/65c19dca5d87496ea01067312968def5.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/fc00f892e8ac4f7b81982ca5a16a9d01.png)
GUI汉化：
把msg文件复制到以下文件夹
![在这里插入图片描述](https://img-blog.csdnimg.cn/ffa38adec42945ef8b7b46568f962e2a.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/c601616f151b483595ac9a5a95d9adbd.png)

# 4.  JDK配置中文注释

首先，下载   JAVA_API_1.8_CHS.CHM   这个文件（阿里云存在），放在一个目录下，目录下cmd输入：hh -decompile html18 jdk api 1.8_google.CHM,就会在当前目录下生成一个html18的文件夹(文件夹名称随意)，然后进入idea的project structure,如下设置
![在这里插入图片描述](https://img-blog.csdnimg.cn/f407015dee714c778974c830a11d7578.png)



![image-20230108133606251](https://img-blog.csdnimg.cn/0da76bd55a70417b965659e57c740f39.png)
