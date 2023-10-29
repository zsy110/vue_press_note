## 1. 查看git的用户名和密码

### 1.1. 查看 

查看用户名 ：git config user.name 

查看密码： git config user.password 

查看邮箱：git config user.email 

查看配置信息： $ git config --list

### 1.2. 修改 

修改用户名 git config --global user.name “xxxx(新的用户名)”

修改密码 git config --global user.password “xxxx(新的密码)”

修改邮箱 git config --global user.email “xxxx@xxx.com(新的邮箱)”

### 1.3. 修改出现的报错

![img](https://img-blog.csdnimg.cn/20210513171224261.png) 

原因：用户名过多


&nbsp;![img](https://img-blog.csdnimg.cn/20210513171232866.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyMDEyOTA4,size_16,color_FFFFFF,t_70)

&nbsp;

 解决办法：$ git config --global --replace-all user.name “你的 git 的名称”

$ git config --global --replace-all uesr.email “你的 git 的邮箱”

![img](https://img-blog.csdnimg.cn/20210513171245760.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyMDEyOTA4,size_16,color_FFFFFF,t_70)

## 2. SSH免密登录配置

>SSH key 的作用:实现本地仓库和 Github 之间免登录的加密数据传输。 SSH key 的好处: 免登录身份认证、数据加密传输。
>
> SSH key 由两部分组成，分别是:
>
>1. id rsa(私钥文件，存放于客户端的电脑中即可)
>2. id rsa.pub (公钥文件，需要配置到 Gitee 中)

### 2.1. 生成SSH


进入直接项目的根目录，在空白的地方右键，打开Git Bash ![img](https://img-blog.csdnimg.cn/6991c105c16348eeae9c72153c2088b6.png) 

>粘贴如下的命令，并将 XXX 替换为注册 Gitee 账号时填写的邮箱:

```java
ssh-keygen -t rsa -b 4096 -C "XXX"
```

连续敲击 3 次回车，即可在 C:Users\用户名文件夹.ssh 目录中生成 id rsa 和 id rsa.pub 两个文件


![img](https://img-blog.csdnimg.cn/8b6bedbdb59247cca819b418fa0af1b7.png)

### 3.配置 SSH key

>使用记事本打开 id rsa.pub 文件，复制里面的文本内容

提示：这里会有一个小坑，在Ctrl+A时可能会复制一个空格出来需要注意一下

>在浏览器中登录 Gitee，点击头像 -&gt; 设置 -&gt; SSH公钥 -&gt; 填写信息


![img](https://img-blog.csdnimg.cn/e4217e8a32b444658f9d1d5e14bbca22.png)

### 4.验证SSH key是否配置成功

```java
ssh -T git@gitee.com
```

输入yes 当显示出这个就代表配置成功了！ ![img](https://img-blog.csdnimg.cn/bba38285fd5b4923a5ee24945d754405.png)

## 3. TortoiseGit实现SSH免密码操作：

 使用TortoiseGit做为github本地管理工具，它使用的密钥与git并不一样，它使用的是putty，即TortoiseGit使用扩展名为ppk的秘钥，而不是 ssh-keygen生成的rsa密钥。也就是说在前面git bash中使用ssh-keygen命令产生的密钥TortoiseGit中不能用,如果要使用刚才生成的密钥，需要进行转换。

### 3.1. 生成公钥与私钥：


![img](https://img-blog.csdn.net/20180727175645502?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2E3NDUyMzM3MDA=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)



打开“PuTTYgen.exe”，点击"Load"，选择上次的私钥文件id_rsa，然后”save private key“保存成ppk文件，如下图。


![img](https://img-blog.csdn.net/2018072717591425?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2E3NDUyMzM3MDA=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

&nbsp;

### 3.2. 指定使用的私钥：

打开Pageant，点击Add key，选择刚才保存生成的.ppk文件。


![img](https://img-blog.csdn.net/20180727180434326?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2E3NDUyMzM3MDA=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

## 4. 用git命令去查看、切换分支

清屏

```
clear
```

2、查看远程分支

```
可以看到远程分支有很多
git branch -a
```

![img](https://img2022.cnblogs.com/blog/1267435/202203/1267435-20220329154434900-1285416122.png)

 

 3、查看本地分支

```
可以看到当前分支是develop-portal
git branch
```

![img](https://img2022.cnblogs.com/blog/1267435/202203/1267435-20220329154546276-922148588.png)

 

 4、切换分支

```
git checkout -b feature-1.0.12-fix origin/feature-1.0.12-fix
```

如果出现类似`fatal: A branch named 'feature-1.0.12-fix' already exists.` 这样的提示就说明你本地已经有这个分支。执行下面命令就行。

```
git checkout feature-1.0.12-fix
```

![img](https://img2022.cnblogs.com/blog/1267435/202203/1267435-20220329154632133-1916582064.png)

## 5. git使用之分支代码同步

我们需要在合并前，将dev_6.0的代码同步到feature_6.0，保持两个分支都是最新的，然后将feature_6.0 merge 到dev_6.0，这样就不会有冲突了。

```cpp
//dev_6.0的代码同步到feature_6.0
git checkout dev_6.0
git pull --rebase origin dev_6.0 //拉取dev_6.0最新的代码
git checkout feature_6.0 //切换到feature_6.0
git rebase dev_6.0  //同步dev_6.0的代码到feature_6.0
//然后将开发的代码merge到dev_6.0上
git checkout dev_6.0 //切换分支到dev_6.0
git merge feature_6.0 //合并feature_6.0到dev_6.0
```

## 6. git push提示当前分支最新提交落后于对应的远程分支

```java
先备份一个分支 git checkout -b master_bak
删除git branch -D master
重新拉取git fetch origin master:master
git checkout master
git merge master_bak
git push origin master
```

## 7. 拉取远程代码

### 7.1. git fetch

在拉取代码过程中，`git fetch`会首先检查本地仓库和远程仓库的差异，检查哪些不存在于本地仓库，然后将这些变动的提交拉取到本地。

请注意，它是把远程提交拉取到本地仓库，而不是本地工作目录，它不会自行将这些新数据合并到当前工作目录中，我们需要继续执行`git merge`才会把这些变动合并到当前工作目录。

### 7.2. git pull

`git pull`和`git fetch`刚好相反，它直接获取远程的最新提交，直接拉取并合并到本地工作目录，而且在合并过程中不会经过我们的审查，如果不仔细检查，这样很容易遇到冲突。

`git pull`相当于运行`git fetch`，然后立即将你的改动合并到本地仓库。
