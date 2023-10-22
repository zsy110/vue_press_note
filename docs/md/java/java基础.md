# 1. 运算符

## 1.1. 三元运算符

1. 表达式1 和表达式2的类型要求是一致的。
2. 三元运算符可以嵌套使用

## 1.2. 位运算符

1. 5<<1,左移放大一倍
2. 无符号右移位运算>>>结果都为正数，java无左移

# 2. 流程控制

## 2.1. 顺序

自上而下，没有跳转和循环

## 2.2. 分支

if -else、switch-case-default
（1） break,可以使用在switch-case结构中，表示一旦执行到此关键字，就跳出switch-case结构；
（2）switch结构中的表达式，只能是如下的6种数据类型之一：
byte 、short、char、int、枚举类型(JDK5.0新增)、String类型(JDK7.0新增)
（3） case 之后只能声明常量。不能声明范围；
（4） break关键字是可选的；
（5） default:相当于if-else结构中的else，default结构是可选的，而且位置是灵活的；

## 2.3. 循环

（1）for循环
（2）while
（3）do-while

# 3. 数组

## 3.1. 数组元素默认值

数组元素是整型：0
数组元素是浮点型：0.0
数组元素是char型：0或'\u0000'，而非'0'
数组元素是boolean型：false
数组元素是引用数据类型：null

## 3.2. 常用排序算法

选择排序：直接选择排序、堆排序
交换排序：冒泡排序、快速排序
插入排序：直接插入排序、折半插入排序、希尔排序
归并排序
桶排序
基数排序
理解： 1）衡量排序算法的优劣：
 时间复杂度、空间复杂度、稳定性
2）排序的分类：内部排序 与 外部排序（需要借助磁盘）
3）不同排序算法的时间复杂度

## 3.3. 复杂度说明

![在这里插入图片描述](https://img-blog.csdnimg.cn/2a93e887210f4af2a7f763a14d767563.png)

## 3.4. Arrays常用api方法

```java
// 1.Arrays.equals(arr1, arr2):判断数组是否相等
System.out.println(Arrays.equals(arr1, arr2));
// 2.Arrays.toString(arr1):输出数组信息
System.out.println(Arrays.toString(arr1));
// 3.Arrays.fill(arr1, 2):将指定值填充到数组中
Arrays.fill(arr1, 2);
System.out.println(Arrays.toString(arr1));
// 4.Arrays.sort(arr2):对数组进行排序
Arrays.sort(arr2);
System.out.println(Arrays.toString(arr2));
// 5.Arrays.binarySearch(arr2, 1):堆排序好的数组用二分法检索指定值
int index = Arrays.binarySearch(arr2, 1);
System.out.println(index);
```

# 4. 面向对象三大特性

## 4.1. 封装性（追求高内聚低耦合）

### 4.1.1. 权限修饰符

![在这里插入图片描述](https://img-blog.csdnimg.cn/6307b45fc5cc48adbc87132a562c73c0.png)

## 4.2. 继承性

### 4.2.1.  引入继承性的好处

减少了代码的冗余，提高了代码的复用性
便于功能的扩展
为之后多态性的使用，提供了前提

### 4.2.2.  继承性说明

子类A继承父类B以后，子类A中就获取了父类B中声明的所有的属性和方法。
子类继承父类以后，还可以声明自己特有的属性或方法：实现功能的拓展。
一个类可以被多个子类继承。
Java中类的单继承性：一个类只能有一个父类
java.lang.Object是Java中所有类的父类
![在这里插入图片描述](https://img-blog.csdnimg.cn/e2dcdd7a36304b598dfb5eeeab946d3b.png)

### 4.2.3. this和super

可以用来调用属性、方法、构造器

    1. this调用当前对象，super调用父类对象。
    2. 在实际使用中，通常省略super。当子父类出现同名属性要显式使用。
    3. 构造器使用this(形参列表)、super(形参列表)。
       ![在这里插入图片描述](https://img-blog.csdnimg.cn/e44bfb700b274b4bafd729f33e105d64.png)

## 4.3. 多态性

    1. 对象的多态性：父类的引用指向子类的对象（或子类的对象赋给父类的引用），只适用于方法，不能用于属性
    2. 最常见的就是service层中的接口及实现类。
    3. 在编译期，只能调用父类中声明的方法，但在运行期，我们实际执行的是子类重写父类的方法。
    4. 编译时和运行时类型不一致，产生了多态，多态是一种运行时行为。

## 4.4. 多态性的使用前提

① 类的继承关系 ② 方法的重写

## 4.5. 多态性的理解

    1. 实现代码的通用性。
    2. Object类中定义的public boolean equals(Object obj){  }  
       JDBC:使用java程序操作(获取数据库连接、CRUD)数据库(MySQL、Oracle、DB2、SQL Server)
    3. 抽象类、接口的使用肯定体现了多态性。（抽象类、接口不能实例化）

## 4.6. Object类方法及包装类

方法：equals() / toString() / getClass() /hashCode() / clone() / finalize()   wait() 、 notify()、notifyAll()

    1. 包装类转换

![在这里插入图片描述](https://img-blog.csdnimg.cn/9b8394de92cd4a8b8fa9f0d0d8cbe085.png)

# 5. 常用关键字static、final、abstract、interface

## 5.1. static及单例模式

    1. 主要修饰属性、方法、代码块、内部类
    2. （1）静态变量和方法随着类的加载而加载。
       （2）静态变量和方法的加载要早于对象的创建。
       （3）由于类只会加载一次，则静态变量在内存中也只会存在一份：存在方法区的静态域中。
       （4）静态方法中，只能调用静态的方法或属性
       （5）在静态的方法内，不能使用this关键字、super关键字
    3. 单例模式

```java
饿汉式
class Bank{
	
	//1.私化类的构造器
	private Bank(){
		
	}
	
	//2.内部创建类的对象
	//4.要求此对象也必须声明为静态的
	private static Bank instance = new Bank();
	
	//3.提供公共的静态的方法，返回类的对象
	public static Bank getInstance(){
		return instance;
	}
}
 *   饿汉式：	
 *   	坏处：对象加载时间过长。
 *   	好处：饿汉式是线程安全的
```

```java
懒汉式：
class Order{
	
	//1.私化类的构造器
	private Order(){
		
	}
	
	//2.声明当前类对象，没初始化
	//4.此对象也必须声明为static的
	private static Order instance = null;
	
	//3.声明public、static的返回当前类对象的方法
	public static Order getInstance(){
		
		if(instance == null){
			
			instance = new Order();
			
		}
		return instance;
	}
	
}
```

## 5.2. final

1.可以用来修饰：类、方法、变量

2.具体的：

2.1 final 用来修饰一个类:此类不能被其他类所继承。

 *          比如：String类、System类、StringBuffer类

2.2 final 用来修饰方法：表明此方法不可以被重写

 * 			比如：Object类中getClass();

2.3 final 用来修饰变量：此时的"变量"就称为是一个常量

## 5.3. abstract

1.可以用来修饰：类、方法
2.具体的：
abstract修饰类：抽象类

 * > 此类不能实例化

 * > 抽象类中一定有构造器，便于子类实例化时调用（涉及：子类对象实例化的全过程）

 * > 开发中，都会提供抽象类的子类，让子类对象实例化，完成相关的操作 --->抽象的使用前提：继承性

abstract修饰方法：抽象方法

 * > 抽象方法只方法的声明，没方法体

 * > 包含抽象方法的类，一定是一个抽象类。反之，抽象类中可以没有抽象方法的。

 * > 若子类重写了父类中的所的抽象方法后，此子类方可实例化

 * 若子类没重写父类中的所的抽象方法，则此子类也是一个抽象类，需要使用abstract修饰
   3.注意点：

 * abstract不能用来修饰：属性、构造器等结构

 * abstract不能用来修饰私方法、静态方法、final的方法、final的类

 ## interface

 使用说明：

1.接口使用interface来定义
2.

 * 2.1 `JDK7`及以前：只能定义全局常量和抽象方法

 * >全局常量：public static final的.但是书写时，可以省略不写

 * >抽象方法：public abstract的	

 * 2.2 `JDK8`：除了定义全局常量和抽象方法之外，还可以定义静态方法、默认方法（略

 * 3. 接口中不能定义构造器的！意味着接口不可以实例化

 * 4. Java开发中，接口通过让类去实现(implements)的方式来使用.
      如果实现类覆盖了接口中的所抽象方法，则此实现类就可以实例化
       如果实现类没覆盖接口中所的抽象方法，则此实现类仍为一个抽象类

 * 5. Java类可以实现多个接口   --->弥补了Java单继承性的局限性

 * 格式：class AA extends BB implements CC,DD,EE

 * 6. 接口与接口之间可以继承，而且可以多继承

# 6. 内部类及异常处理

## 6.1. 内部类

1.定义：Java中允许将一个类A声明在另一个类B中，则类A就是内部类，类B称为外部类.
2.内部类的分类：
成员内部类（静态、非静态 ） vs 局部内部类(方法内、代码块内、构造器内)
3.成员内部类的理解：
一方面，作为外部类的成员：

 * >调用外部类的结构

 * >可以被static修饰

 * >可以被4种不同的权限修饰

 * 另一方面，作为一个类：

 * > 类内可以定义属性、方法、构造器等

 * > 可以被final修饰，表示此类不能被继承。言外之意，不使用final，就可以被继承

 * > 可以被abstract修饰

## 6.2. 异常处理

**异常的体系结构**

 * java.lang.Throwable
 * |-----java.lang.Error:一般不编写针对性的代码进行处理。
 * |-----java.lang.Exception:可以进行异常的处理
 * |------编译时异常(checked)
 * |------运行时异常(unchecked,RuntimeException)

**异常处理方式一**：try-catch-finally

 * catch中的异常类型如果没子父类关系，则谁声明在上，谁声明在下无所谓。
 * catch中的异常类型如果满足子父类关系，则要求子类一定声明在父类的上面。否则，报错
 * 常用的异常对象处理的方式： ① String  getMessage()    ② printStackTrace()
 * 在try结构中声明的变量，再出了try结构以后，就不能再被调用

**异常处理方式二**： 手动的throw一个异常类的对象

```java
class Student{
	private int id;
	public void regist(int id) throws Exception {
		if(id > 0){
			this.id = id;
		}else{
			//手动抛出异常对象
//			throw new RuntimeException("您输入的数据非法！");
//			throw new Exception("您输入的数据非法！");
			throw new MyException("不能输入负数");
		}	
	}
}
```

throw 和  throws区别：
throw 表示抛出一个异常类的对象，生成异常对象的过程。声明在方法体内。
throws 属于异常处理的一种方式，声明在方法的声明处。

## 6.3. 自定义异常类

 * 继承于现的异常结构：RuntimeException 、Exception
 * 提供全局常量：serialVersionUID
 * 提供重载的构造器


```java
public class MyException extends Exception{
	
	static final long serialVersionUID = -7034897193246939L;
	
	public MyException(){
		
	}
	
	public MyException(String msg){
		super(msg);
	}
}

```

# 7. 多线程

## 7.1. 并行与并发的理解及java程序的至少三个线程

1. 并行：多个CPU同时执行多个任务。比如：多个人同时做不同的事。
2. 并发：一个CPU(采用时间片)同时执行多个任务。比如：秒杀、多个人做同一件事

**一个Java应用程序java.exe，其实至少三个线程：main()主线程，gc()垃圾回收线程，异常处理线程。当然如果发生异常，会影响主线程。**

## 7.2. 创建多线程方式

### 7.2.1. 继承Thread类的方式

* 1. 创建一个继承于Thread类的子类
* 2. 重写Thread类的run() --> 将此线程执行的操作声明在run()中
* 3. 创建Thread类的子类的对象
* 4. 通过此对象调用start()：①启动当前线程 ② 调用当前线程的run()

### 7.2.2. 实现Runnable接口的方式

* 1. 创建一个实现了Runnable接口的类
* 2. 实现类去实现Runnable中的抽象方法：run()
* 3. 创建实现类的对象
* 4. 将此对象作为参数传递到Thread类的构造器中，创建Thread类的对象
* 5. 通过Thread类的对象调用start()

**开发中：优先选择：实现Runnable接口的方式**

* 原因：1. 实现的方式没类的单继承性的局限性
* 2. 实现的方式更适合来处理多个线程共享数据的情况。

**Thread类中的常用的方法**:

* 1. start():启动当前线程；调用当前线程的run()
* 2. run(): 通常需要重写Thread类中的此方法，将创建的线程要执行的操作声明在此方法中
* 3. currentThread():静态方法，返回执行当前代码的线程
* 4. getName():获取当前线程的名字
* 5. setName():设置当前线程的名字
* 6. yield():释放当前cpu的执行权
* 7. join():在线程a中调用线程b的join(),此时线程a就进入阻塞状态，直到线程b完全执行完以后，线程a才结束阻塞状态。
* 8. stop():已过时。当执行此方法时，强制结束当前线程。
* 9. sleep(long millitime):让当前线程“睡眠”指定的millitime毫秒。在指定的millitime毫秒时间内，当前线程是阻塞状态。
* 10. isAlive():判断当前线程是否存活

![在这里插入图片描述](https://img-blog.csdnimg.cn/bef83ea866e946fe9e04935c4d2b4e72.png)

### 7.2.3. 实现Callable接口

```java
//1.创建一个实现Callable的实现类
class NumThread implements Callable{
    //2.实现call方法，将此线程需要执行的操作声明在call()中
    @Override
    public Object call() throws Exception {
        int sum = 0;
        for (int i = 1; i <= 100; i++) {
            if(i % 2 == 0){
                System.out.println(i);
                sum += i;
            }
        }
        return sum;
    }
}
public class ThreadNew {
    public static void main(String[] args) {
        //3.创建Callable接口实现类的对象
        NumThread numThread = new NumThread();
        //4.将此Callable接口实现类的对象作为传递到FutureTask构造器中，创建FutureTask的对象
        FutureTask futureTask = new FutureTask(numThread);
        //5.将FutureTask的对象作为参数传递到Thread类的构造器中，创建Thread对象，并调用start()
        new Thread(futureTask).start();

        try {
            //6.获取Callable中call方法的返回值
            //get()返回值即为FutureTask构造器参数Callable实现类重写的call()的返回值。
            Object sum = futureTask.get();
            System.out.println("总和为：" + sum);
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }
    }

}
```

* 1. call()可以返回值的。
* 2. call()可以抛出异常，被外面的操作捕获，获取异常的信息
* 3. Callable是支持泛型的

### 7.2.4. 使用线程池

```java
class NumberThread implements Runnable{

    @Override
    public void run() {
        for(int i = 0;i <= 100;i++){
            if(i % 2 == 0){
                System.out.println(Thread.currentThread().getName() + ": " + i);
            }
        }
    }
}

class NumberThread1 implements Runnable{

    @Override
    public void run() {
        for(int i = 0;i <= 100;i++){
            if(i % 2 != 0){
                System.out.println(Thread.currentThread().getName() + ": " + i);
            }
        }
    }
}

public class ThreadPool {

    public static void main(String[] args) {
        //1. 提供指定线程数量的线程池
        ExecutorService service = Executors.newFixedThreadPool(10);
        ThreadPoolExecutor service1 = (ThreadPoolExecutor) service;
        //设置线程池的属性
//        System.out.println(service.getClass());
//        service1.setCorePoolSize(15);
//        service1.setKeepAliveTime();
        //2.执行指定的线程的操作。需要提供实现Runnable接口或Callable接口实现类的对象
        service.execute(new NumberThread());//适合适用于Runnable
        service.execute(new NumberThread1());//适合适用于Runnable
//        service.submit(Callable callable);//适合使用于Callable
        //3.关闭连接池
        service.shutdown();
    }

}
```

### 7.2.5. 线程通信

1.线程通信涉及到的三个方法：

* wait():一旦执行此方法，当前线程就进入阻塞状态，并释放同步监视器。
* notify():一旦执行此方法，就会唤醒被wait的一个线程。如果有多个线程被wait，就唤醒优先级高的那个。
* notifyAll():一旦执行此方法，就会唤醒所有被wait的线程。

2.说明：

* 1.wait()，notify()，notifyAll()三个方法必须使用在同步代码块或同步方法中。
* 2.wait()，notify()，notifyAll()三个方法的调用者必须是同步代码块或同步方法中的同步监视器。
* 否则，会出现IllegalMonitorStateException异常
* 3.wait()，notify()，notifyAll()三个方法是定义在java.lang.Object类中。

面试题：sleep() 和 wait()的异同？

* 1.相同点：一旦执行方法，都可以使得当前的线程进入阻塞状态。

* 2.不同点：1）两个方法声明的位置不同：Thread类中声明sleep() , Object类中声明wait()

  2）调用的要求不同：sleep()可以在任何需要的场景下调用。 wait()必须使用在同步代码块或同步方法中

  3）关于是否释放同步监视器：如果两个方法都使用在同步代码块或同步方法中，sleep()不会释放锁，wait()会释放锁。

### 7.2.6. **单例模式中的懒汉式改写为线程安全**

```java
class Bank{

    private Bank(){}

    private static Bank instance = null;

    public static Bank getInstance(){
    
        if(instance == null){

            synchronized (Bank.class) {
                if(instance == null){

                    instance = new Bank();
                }

            }
        }
        return instance;
    }

}
```

# 8. String类、排序比较器和System类

## 8.1. String类

### 8.1.1. String概述

1.String声明为final的，不可被继承
2.String实现了Serializable接口：表示字符串是支持序列化的。
        实现了Comparable接口：表示String可以比较大小
3.String内部定义了final char[] value用于存储字符串数据
4.通过字面量的方式（区别于new给一个字符串赋值，此时的字符串值声明在字符串常量池中)。
5.字符串常量池中是不会存储相同内容(使用String类的equals()比较，返回true)的字符串的。

![在这里插入图片描述](https://img-blog.csdnimg.cn/3c06f7bb3c2f44f6989ba8418b9bd2d0.png)

**说明**
1.常量与常量的拼接结果在常量池。且常量池中不会存在相同内容的常量。
2.只要其中一个是变量，结果就在堆中。
3.如果拼接的结果调用intern()方法，返回值就在常量池中

**常用方法**
int length()：返回字符串的长度： return value.length
char charAt(int index)： 返回某索引处的字符return value[index]
boolean isEmpty()：判断是否是空字符串：return value.length == 0
String toLowerCase()：使用默认语言环境，将 String 中的所字符转换为小写
String toUpperCase()：使用默认语言环境，将 String 中的所字符转换为大写
String trim()：返回字符串的副本，忽略前导空白和尾部空白
boolean equals(Object obj)：比较字符串的内容是否相同
boolean equalsIgnoreCase(String anotherString)：与equals方法类似，忽略大小写
String concat(String str)：将指定字符串连接到此字符串的结尾。 等价于用“+”
int compareTo(String anotherString)：比较两个字符串的大小
String substring(int beginIndex)：返回一个新的字符串，它是此字符串的从beginIndex开始截取到最后的一个子字符串。
String substring(int beginIndex, int endIndex) ：返回一个新字符串，它是此字符串从beginIndex开始截取到endIndex(不包含)的一个子字符串。

boolean endsWith(String suffix)：测试此字符串是否以指定的后缀结束
boolean startsWith(String prefix)：测试此字符串是否以指定的前缀开始
boolean startsWith(String prefix, int toffset)：测试此字符串从指定索引开始的子字符串是否以指定前缀开始

boolean contains(CharSequence s)：当且仅当此字符串包含指定的 char 值序列时，返回 true
int indexOf(String str)：返回指定子字符串在此字符串中第一次出现处的索引
int indexOf(String str, int fromIndex)：返回指定子字符串在此字符串中第一次出现处的索引，从指定的索引开始
int lastIndexOf(String str)：返回指定子字符串在此字符串中最右边出现处的索引
int lastIndexOf(String str, int fromIndex)：返回指定子字符串在此字符串中最后一次出现处的索引，从指定的索引开始反向搜索

注：indexOf和lastIndexOf方法如果未找到都是返回-1

替换：
String replace(char oldChar, char newChar)：返回一个新的字符串，它是通过用 newChar 替换此字符串中出现的所 oldChar 得到的。
String replace(CharSequence target, CharSequence replacement)：使用指定的字面值替换序列替换此字符串所匹配字面值目标序列的子字符串。
String replaceAll(String regex, String replacement)：使用给定的 replacement 替换此字符串所匹配给定的正则表达式的子字符串。
String replaceFirst(String regex, String replacement)：使用给定的 replacement 替换此字符串匹配给定的正则表达式的第一个子字符串。
匹配:
boolean matches(String regex)：告知此字符串是否匹配给定的正则表达式。
切片：
String[] split(String regex)：根据给定正则表达式的匹配拆分此字符串。
String[] split(String regex, int limit)：根据匹配给定的正则表达式来拆分此字符串，最多不超过limit个，如果超过了，剩下的全部都放到最后一个元素中。

### 8.1.2. String、StringBuffer、StringBuilder三者的对比

String:不可变的字符序列；底层使用char[]存储
StringBuffer:可变的字符序列；线程安全的，效率低；底层使用char[]存储
StringBuilder:可变的字符序列；jdk5.0新增的，线程不安全的，效率高；底层使用char[]存储

## 8.2. 排序比较器

### 8.2.1. 自然排序：使用Comparable接口

```java
public class Goods implements  Comparable{

    private String name;
    private double price;

    //指明商品比较大小的方式:照价格从低到高排序,再照产品名称从高到低排序
    @Override
    public int compareTo(Object o) {
//        System.out.println("**************");
        if(o instanceof Goods){
            Goods goods = (Goods)o;
            //方式一：
            if(this.price > goods.price){
                return 1;
            }else if(this.price < goods.price){
                return -1;
            }else{
//                return 0;
               return -this.name.compareTo(goods.name);
            }
            //方式二：
//           return Double.compare(this.price,goods.price);
        }
//        return 0;
        throw new RuntimeException("传入的数据类型不一致！");
    }
}
```

### 8.2.2. 定制排序：使用Comparator接口

```java
Comparator com = new Comparator() {
    //指明商品比较大小的方式:照产品名称从低到高排序,再照价格从高到低排序
    @Override
    public int compare(Object o1, Object o2) {
        if(o1 instanceof Goods && o2 instanceof Goods){
            Goods g1 = (Goods)o1;
            Goods g2 = (Goods)o2;
            if(g1.getName().equals(g2.getName())){
                return -Double.compare(g1.getPrice(),g2.getPrice());
            }else{
                return g1.getName().compareTo(g2.getName());
            }
        }
        throw new RuntimeException("输入的数据类型不一致");
    }
}

使用：
Arrays.sort(goods,com);
Collections.sort(coll,com);
new TreeSet(com);
```

两种排序方式对比

*    Comparable接口的方式一旦一定，保证Comparable接口实现类的对象在任何位置都可以比较大小。
*    Comparator接口属于临时性的比较。

## 8.3. System类

System类代表系统，系统级的很多属性和控制方法都放置在该类的内部。该类位于java.lang包。
由于该类的构造器是private的，所以无法创建该类的对象，也就是无法实例化该类。其内部的成员变量和成员方法都是static的，所以也可以很方便的进行调用。
方法：

1. native long currentTimeMillis()
2. void exit(int status)
3. void gc()
4. String getProperty(String key)

# 9. 枚举类和注解

## 9.1. 枚举类

```java
enum Season1 {
    //1.提供当前枚举类的对象，多个对象之间用","隔开，末尾对象";"结束
    SPRING("春天","春暖花开"),
    SUMMER("夏天","夏日炎炎"),
    AUTUMN("秋天","秋高气爽"),
    WINTER("冬天","冰天雪地");

    //2.声明Season对象的属性:private final修饰
    private final String seasonName;
    private final String seasonDesc;

    //2.私化类的构造器,并给对象属性赋值

    private Season1(String seasonName,String seasonDesc){
        this.seasonName = seasonName;
        this.seasonDesc = seasonDesc;
    }

    //4.其他诉求1：获取枚举类对象的属性
    public String getSeasonName() {
        return seasonName;
    }

    public String getSeasonDesc() {
        return seasonDesc;
    }

}
```

**使用enum定义枚举类之后，枚举类常用方法：（继承于java.lang.Enum类）**

```java
    Season1 summer = Season1.SUMMER;
    //toString():返回枚举类对象的名称
    System.out.println(summer.toString());

    //        System.out.println(Season1.class.getSuperclass());
    System.out.println("****************");
    //values():返回所的枚举类对象构成的数组
    Season1[] values = Season1.values();
    for(int i = 0;i < values.length;i++){
    System.out.println(values[i]);
    }
    System.out.println("****************");
    //valueOf(String objName):返回枚举类中对象名是objName的对象。
    Season1 winter = Season1.valueOf("WINTER");
    //如果没objName的枚举类对象，则抛异常：IllegalArgumentException
    //        Season1 winter = Season1.valueOf("WINTER1");
    System.out.println(winter);
```

## 9.2. 注解

### 9.2.1. 内置注解

```java
    @Override: 限定重写父类方法, 该注解只能用于方法
    @Deprecated: 用于表示所修饰的元素(类, 方法等)已过时。通常是因为所修饰的结构危险或存在更好的择
    @SuppressWarnings: 抑制编译器警告
```

如果注解有成员，在使用注解时，需要指明成员的值。
自定义注解必须配上注解的信息处理流程(使用反射)才意义。
自定义注解通常都会指明两个元注解：Retention、Target

### 9.2.2. 元注解

jdk 提供的4种元注解：
Retention：指定所修饰的 Annotation 的生命周期：SOURCE < CLASS < RUNTIME
       只声明为RUNTIME生命周期的注解，才能通过反射获取。
Target:用于指定被修饰的 Annotation 能用于修饰哪些程序元素
**出现的频率较低**：
Documented:表示所修饰的注解在被javadoc解析时，保留下来。
Inherited:被它修饰的 Annotation 将具继承性。

### 9.2.3. JDK8中注解的新特性：可重复注解、类型注解

**可重复注解：**① 在MyAnnotation上声明@Repeatable，成员值为MyAnnotations.class
               ② MyAnnotation的Target和Retention等元注解与MyAnnotations相同。

**类型注解：**
ElementType.TYPE_PARAMETER 表示该注解能写在类型变量的声明语句中（如：泛型声明。
ElementType.TYPE_USE 表示该注解能写在使用类型的任何语句中。

### 9.2.4. 自定义注解

**使用注意**

1. @ interface用来声明一个注解 , 格式 : public @ interface 注解名 { 定义内容 }
2. 其中的每一个方法实际上是声明了一个配置参数.
3. 方法的名称就是参数的名称.
4. 返回值类型就是参数的类型 ( 返回值只能是基本类型,Class , String , enum ).
5. 可以通过default来声明参数的默认值
6. 如果只有一个参数成员 , 一般参数名为value
7. 注解元素必须要有值 , 我们定义注解元素时 , 经常使用空字符串,0作为默认值 .

```java
@Target(value = {ElementType.METHOD}) @Retention(value = RetentionPolicy.RUNTIME) @interface MyAnnotation2{ //参数类型 , 参数名 
    String name() default ""; 
    int age() default 0; 
    int id() default -1; 
    //String indexOf("abc") -1 , 不存在,找不到 
    String[] schools() default {"西部开源","Java"}; 
}
```

# 10. 泛型

## 10.1. 介绍

如果定义了泛型类，实例化没指明类的泛型，则认为此泛型类型为Object类型

静态方法中不能使用类的泛型。

泛型方法：在方法中出现了泛型的结构，泛型参数与类的泛型参数没任何关系，可以声明为静态的。

![](https://img-blog.csdnimg.cn/b9958e33d68e45e3aa4840fab5771721.png)![在这里插入图片描述](https://img-blog.csdnimg.cn/84fd9b9f47cb421294d79df7aba4d27a.png)

## 10.2. **常用的 T，E，K，V，？**

本质上这些个都是通配符，没啥区别，只不过是编码时的一种约定俗成的东西。比如上述代码中的 T ，我们可以换成 A-Z 之间的任何一个 字母都可以，并不会影响程序的正常运行，但是如果换成其他的字母代替 T ，在可读性上可能会弱一些。通常情况下，T，E，K，V，？是这样约定的：

？表示不确定的 java 类型

T (type) 表示具体的一个java类型

K V (key value) 分别代表java键值中的Key Value

E (element) 代表Elemen

## 10.3. 无界限通配符？

**上界通配符 < ? extends E>** 

上界：用 extends 关键字声明，表示参数化的类型可能是所指定的类型，或者是此类型的子类。 

**下界通配符 < ? super E>** 

下界: 用 super 进行声明，表示参数化的类型可能是所指定的类型，或者是此类型的父类型，直至 Object 

**？和 T 都表示不确定的类型，区别在于我们可以对 T 进行操作，但是对 ？不行，比如如下这种 ：** 

```java
// 可以
T t = operate();
 
// 不可以
？car = operate();
```

简单总结下：

T 是一个 确定的 类型，通常用于泛型类和泛型方法的定义，？是一个 不确定 的类型，通常用于泛型方法的调用代码和形参，不能用于定义类和泛型方法。

```java
public class SubOrder extends Order<Integer> {//SubOrder:不是泛型类
    
}
public class SubOrder1<T> extends Order<T> {//SubOrder1<T>:仍然是泛型类

}
```

# 11. 反射

## 11.1. Java反射优点和缺点

优点：可以实现动态创建对象和编译，体现出很大的灵活性 !

缺点：对性能有影响。使用反射基本上是一种解释操作，我们可以告诉JVM，我们希望做什么并且它满

足我们的要求。这类操作总是慢于 直接执行相同的操作。

## 11.2. 反射机制能提供的功能

1. 在运行时判断任意一个对象所属的类
2. 在运行时构造任意一个类的对象
3. 在运行时判断任意一个类所具有的成员变量和方法
4. 在运行时获取泛型信息
5. 在运行时调用任意一个对象的成员变量和方法在运行时处理注解
6. 生成动态代理

## 11.3. 获取Class实例

```java
        Class clazz1 = Person.class;
        System.out.println(clazz1);
        //方式二：通过运行时类的对象,调用getClass()
        Person p1 = new Person();
        Class clazz2 = p1.getClass();
        System.out.println(clazz2);

        //方式三：调用Class的静态方法：forName(String classPath)
        Class clazz3 = Class.forName("com.atguigu.java.Person");
//        clazz3 = Class.forName("java.lang.String");
        System.out.println(clazz3);

        System.out.println(clazz1 == clazz2); true
        System.out.println(clazz1 == clazz3); true

        //方式四：使用类的加载器：ClassLoader  (了解)
        ClassLoader classLoader = ReflectionTest.class.getClassLoader();
        Class clazz4 = classLoader.loadClass("com.atguigu.java.Person");
        System.out.println(clazz4);

        System.out.println(clazz1 == clazz4);
```

**哪些类型可以有Class对象**

class：外部类，成员(成员内部类，静态内部类)，局部内部类，匿名内部类。

interface：接口

[]：数组

enum：枚举

annotation：注解@interface

primitive type：基本数据类型

void

## 11.4. 获取运行时类的完整结构

```java
    @Test
    public void test1(){
        Class clazz = Person.class;
        //获取属性结构
        //getFields():获取当前运行时类及其父类中声明为public访问权限的属性
        Field[] fields = clazz.getFields();
        for(Field f : fields){
            System.out.println(f);
        }
        System.out.println();
        //getDeclaredFields():获取当前运行时类中声明的所属性。（不包含父类中声明的属性
        Field[] declaredFields = clazz.getDeclaredFields();
        for(Field f : declaredFields){
            System.out.println(f);
        }
    }

    @Test
    public void test1(){

        Class clazz = Person.class;

        //getMethods():获取当前运行时类及其所父类中声明为public权限的方法
        Method[] methods = clazz.getMethods();
        for(Method m : methods){
            System.out.println(m);
        }
        System.out.println();
        //getDeclaredMethods():获取当前运行时类中声明的所方法。（不包含父类中声明的方法
        Method[] declaredMethods = clazz.getDeclaredMethods();
        for(Method m : declaredMethods){
            System.out.println(m);
        }
    }

    /*
    获取构造器结构

     */
    @Test
    public void test1(){

        Class clazz = Person.class;
        //getConstructors():获取当前运行时类中声明为public的构造器
        Constructor[] constructors = clazz.getConstructors();
        for(Constructor c : constructors){
            System.out.println(c);
        }

        System.out.println();
        //getDeclaredConstructors():获取当前运行时类中声明的所的构造器
        Constructor[] declaredConstructors = clazz.getDeclaredConstructors();
        for(Constructor c : declaredConstructors){
            System.out.println(c);
        }

    }

    /*
    获取运行时类的父类

     */
    @Test
    public void test2(){
        Class clazz = Person.class;

        Class superclass = clazz.getSuperclass();
        System.out.println(superclass);
    }

    /*
    获取运行时类的带泛型的父类

     */
    @Test
    public void test3(){
        Class clazz = Person.class;

        Type genericSuperclass = clazz.getGenericSuperclass();
        System.out.println(genericSuperclass);
    }

    /*
    获取运行时类的带泛型的父类的泛型

    代码：逻辑性代码  vs 功能性代码
     */
    @Test
    public void test4(){
        Class clazz = Person.class;

        Type genericSuperclass = clazz.getGenericSuperclass();
        ParameterizedType paramType = (ParameterizedType) genericSuperclass;
        //获取泛型类型
        Type[] actualTypeArguments = paramType.getActualTypeArguments();
//        System.out.println(actualTypeArguments[0].getTypeName());
        System.out.println(((Class)actualTypeArguments[0]).getName());
    }

    /*
    获取运行时类实现的接口
     */
    @Test
    public void test5(){
        Class clazz = Person.class;

        Class[] interfaces = clazz.getInterfaces();
        for(Class c : interfaces){
            System.out.println(c);
        }

        System.out.println();
        //获取运行时类的父类实现的接口
        Class[] interfaces1 = clazz.getSuperclass().getInterfaces();
        for(Class c : interfaces1){
            System.out.println(c);
        }

    }
    /*
        获取运行时类所在的包
     */
    @Test
    public void test6(){
        Class clazz = Person.class;

        Package pack = clazz.getPackage();
        System.out.println(pack);
    }
    /*
        获取运行时类声明的注解
     */
    @Test
    public void test7(){
        Class clazz = Person.class;

        Annotation[] annotations = clazz.getAnnotations();
        for(Annotation annos : annotations){
            System.out.println(annos);
        }
    }
```

## 11.5. 调用运行时类的指定结构

```java
    @Test
    public void testField1() throws Exception {
        Class clazz = Person.class;

        //创建运行时类的对象
        Person p = (Person) clazz.newInstance();

        //1. getDeclaredField(String fieldName):获取运行时类中指定变量名的属性
        Field name = clazz.getDeclaredField("name");

        //2.保证当前属性是可访问的
        name.setAccessible(true);
        //3.获取、设置指定对象的此属性值
        name.set(p,"Tom");

        System.out.println(name.get(p));
    }
    调用指定的方法：
    @Test
    public void testMethod() throws Exception {

        Class clazz = Person.class;

        //创建运行时类的对象
        Person p = (Person) clazz.newInstance();

        /*
        1.获取指定的某个方法
        getDeclaredMethod():参数1 ：指明获取的方法的名称  参数2：指明获取的方法的形参列表
         */
        Method show = clazz.getDeclaredMethod("show", String.class);
        //2.保证当前方法是可访问的
        show.setAccessible(true);

        /*
        3. 调用方法的invoke():参数1：方法的调用者  参数2：给方法形参赋值的实参
        invoke()的返回值即为对应类中调用的方法的返回值。
         */
        Object returnValue = show.invoke(p,"CHN"); //String nation = p.show("CHN");
        System.out.println(returnValue);

        System.out.println("*************如何调用静态方法*****************");

        // private static void showDesc()

        Method showDesc = clazz.getDeclaredMethod("showDesc");
        showDesc.setAccessible(true);
        //如果调用的运行时类中的方法没返回值，则此invoke()返回null
//        Object returnVal = showDesc.invoke(null);
        Object returnVal = showDesc.invoke(Person.class);
        System.out.println(returnVal);//null

    }

    调用指定的构造器：
    @Test
    public void testConstructor() throws Exception {
        Class clazz = Person.class;

        //private Person(String name)
        /*
        1.获取指定的构造器
        getDeclaredConstructor():参数：指明构造器的参数列表
         */

        Constructor constructor = clazz.getDeclaredConstructor(String.class);

        //2.保证此构造器是可访问的
        constructor.setAccessible(true);

        //3.调用此构造器创建运行时类的对象
        Person per = (Person) constructor.newInstance("Tom");
        System.out.println(per);

    }
```

## 11.6. **调用指定的方法**

通过Class类的getMethod(String name,Class…parameterTypes)方法取得一个Method对象，并设置此方法操作时所需要的参数类型。

![image-20221114140125576](https://img-blog.csdnimg.cn/cf0717ad305c4d0a8922f2338efe115c.png)

1. 之后使用Object invoke(Object obj, Object[] args)进行调用，并向方法中传递要设置的obj对象的参数信息。
2. Object 对应原方法的返回值，若原方法无返回值，此时返回null
3. 若原方法若为静态方法，此时形参Object obj可为null
4. 若原方法形参列表为空，则Object[] args为null
5. 若原方法声明为private,则需要在调用此invoke()方法前，显式调用方法对象的setAccessible(true)方法，将可访问private的方法。

## 11.7. **setAccessible**

1. Method和Field、Constructor对象都有setAccessible()方法。
2. setAccessible作用是启动和禁用访问安全检查的开关。
3. 参数值为true则指示反射的对象在使用时应该取消Java语言访问检查。
4. 提高反射的效率。如果代码中必须用反射，而该句代码需要频繁的被调用，那么请设置为true。使得原本无法访问的私有成员也可以访问
5. 参数值为false则指示反射的对象应该实施Java语言访问检查
