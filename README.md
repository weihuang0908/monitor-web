# park-prog

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Install in windows

使用带有管理员权限的命令行
安装过程比较漫长，耐心等待

 1/ 下载安装node
 2/ node install -g bower
 3/ node install -g grunt-cli
 4/ 进入程序目录,如
    cd park-prog/
 5/ node install grunt
 6/ node install
 7/ bower install
 
 安装结束之后
   grunt serve
 理论上会自动打开浏览器0.0.0.0:9000,如果挂掉了就在浏览器地址栏输入localhost:9000
 附1：切换磁盘,如从c:/切换到e:/,只需输入e:
 附2：安装git（类似于svn）
    1/下载git windows 版,打开git bash
    2/ ls -al ~/.ssh
        看看是不是有ssh文件,如果有id_rsa,id_rsa.pub两个文件则跳过
        否则运行（替换成你的邮箱）
        ssh-keygen -t rsa -C "your-email@xx.com"
    3/ cd your-workspace
        如果你只是看看代码
        git clone git@gitcafe.com:weihuang/park-prog.git
        如果你想加入
        请先fork到你自己的远端仓库去，再从你的仓库clone到本地
        漫长的等待之后
        就可以愉快地写代码了
    4/ git pull origin master
        从服务器端下载代码
    5/ git push origin master
        向服务器上传代码(传到你自己的仓库)
        
        