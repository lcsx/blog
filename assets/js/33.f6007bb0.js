(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{322:function(a,t,e){a.exports=e.p+"assets/img/sjlx.35d4aeeb.png"},388:function(a,t,e){"use strict";e.r(t);var s=e(28),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"本次课程可以学到"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本次课程可以学到"}},[a._v("#")]),a._v(" 本次课程可以学到")]),a._v(" "),s("ol",[s("li",[a._v("搭建Java开发环境")]),a._v(" "),s("li",[a._v("JFormDesigner绘制Swing界面的技巧")]),a._v(" "),s("li",[a._v("讯飞语音SDK的使用")]),a._v(" "),s("li",[a._v("JAVA面向对象编程的基础知识")]),a._v(" "),s("li",[a._v("讯飞语音SDK结合Swing界面实现文本朗读功能")]),a._v(" "),s("li",[a._v("实现男女声、方言、语音语调的切换")]),a._v(" "),s("li",[a._v("java文件的读写操作")]),a._v(" "),s("li",[a._v("实现导入文件功能，支持长文本朗读")])]),a._v(" "),s("h2",{attrs:{id:"java基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java基础"}},[a._v("#")]),a._v(" Java基础")]),a._v(" "),s("h3",{attrs:{id:"jvm、jre、jdk的区别与联系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jvm、jre、jdk的区别与联系"}},[a._v("#")]),a._v(" JVM、JRE、JDK的区别与联系")]),a._v(" "),s("p",[a._v("Java程序是在JVM上运行，因此在开发程序前需要配置Java环境，首先要做的就是JDK的安装和配置，那么JVM，JRE，JDK有什么区别和联系呢？下边将带你了解他们之间的关系。")]),a._v(" "),s("ol",[s("li",[a._v("JVM是Java虚拟机（Java Virtual Machine）的缩写，是整个Java实现跨平台的最核心的部分。JVM负责解释执行字节码文件，是运行Java字节码文件的虚拟计算机。")]),a._v(" "),s("li",[a._v("JRE是Java运行环境（Java Runtime Environment）的缩写，包括JVM以及Java核心类库和支持文件（核心类库是Java提供的可以直接使用的类，后面课程中会介绍）。如果只需要运行Java程序，下载并安装JRE即可。")]),a._v(" "),s("li",[a._v("JDK是Java的开发工具包（Java  Development  Kit）的缩写，提供了编译，运行Java程序所需的各种工具和资源。如果要开发Java程序，需要安装JDK。")])]),a._v(" "),s("h4",{attrs:{id:"jdk、jre、jvm三者关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdk、jre、jvm三者关系"}},[a._v("#")]),a._v(" JDK、JRE、JVM三者关系")]),a._v(" "),s("p",[a._v("JRE = JVM +JavaSE标准类库\nJDK = JRE + 开发工具集（如Javac编译工具等）")]),a._v(" "),s("p",[a._v("关于什么是字节码文件，来看一下下面的图：Java程序的执行过程包括编译和执行两个步骤，Java程序的源文件是一个以.java命名的文件，代码就写在这个.java文件中。\n.java文件经过编译器的编译生成字节码文件，也就是下图中的.class为后缀名的文件。执行程序的时候，就是用解释器执行字节码文件。")]),a._v(" "),s("h3",{attrs:{id:"jdk安装【windows】"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdk安装【windows】"}},[a._v("#")]),a._v(" JDK安装【windows】")]),a._v(" "),s("p",[a._v("第一步，访问Oracle提供的JDK下载页面。\n"),s("a",{attrs:{href:"https://www.oracle.com/java/technologies/downloads/#java8",target:"_blank",rel:"noopener noreferrer"}},[a._v("JDK 8 版本"),s("OutboundLink")],1),a._v("\n在页面中下位置，找到Windows X64项，点击超链接jdk-8u271-windows-x64.exe。【如果是第一次访问Oracle网站，需要注册/登录账户才能下载】")]),a._v(" "),s("p",[a._v("JDK安装目录 可以指向到D盘\n目标文件夹 JRE 安装到 JDK安装目录下的‘jre’")]),a._v(" "),s("h4",{attrs:{id:"验证-jdk-是否安装成功"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证-jdk-是否安装成功"}},[a._v("#")]),a._v(" 验证 JDK 是否安装成功")]),a._v(" "),s("p",[a._v("通过命令行")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("java --version\n")])])]),s("h3",{attrs:{id:"intelij-ide的安装与初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intelij-ide的安装与初始化"}},[a._v("#")]),a._v(" InteliJ IDE的安装与初始化")]),a._v(" "),s("p",[a._v("【Installation Options】")]),a._v(" "),s("p",[a._v("Create Desktop Shortcut 选本机的64位启动器（64-bit lancher）\n其他不变 install")]),a._v(" "),s("p",[a._v("运行ide，在界面 configure → structure for New Projects(为所有的新工程设置默认选项)  【有时候没有‘configure’选项出现，control+alt+shift+s 快捷键弹出】")]),a._v(" "),s("p",[a._v("Project Settiongs → Project  → 'No SDK' 选择jdk")]),a._v(" "),s("h3",{attrs:{id:"java数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java数据类型"}},[a._v("#")]),a._v(" java数据类型")]),a._v(" "),s("p",[s("img",{attrs:{src:e(322),alt:"An image"}})]),a._v(" "),s("h3",{attrs:{id:"注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[a._v("#")]),a._v(" 注释")]),a._v(" "),s("p",[a._v("1.单行注释用于注释一行文本，它以双斜线开始，后面跟上要注释的内容，其写法为：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// asd\n")])])]),s("p",[a._v("2.多行注释用于注释多行文本，它以 /* 开头，以 */ 结尾，其写法为：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/*\n被注释的第一行内容\n被注释的第二行内容\n被注释的第三行内容\n*/\n")])])]),s("p",[a._v("3.的多行注释 —— 文档注释，它以 /** 开头，以 */ 结尾，如果有多行，则每行都以 * 开头，其在代码中的写法为：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('/**\n * HelloWorld 类\n * 它是我的第一个 Java 程序\n * @Author: Colorful\n * @Date: 2020/02/02\n */\n public class HelloWorld {\n    /**\n     * 主方法，向屏幕打印 Hello World!\n     * @param args 主方法的固定参数\n     */\n  \tpublic static void main(String[] args) {\n      \tSystem.out.println("Hello World!");\n    }\n  }\n')])])]),s("h3",{attrs:{id:"java方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java方法"}},[a._v("#")]),a._v(" java方法")]),a._v(" "),s("h4",{attrs:{id:"java方法的语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java方法的语法"}},[a._v("#")]),a._v(" java方法的语法")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("访问修饰符 返回类型 方法名(参数列表) {\n    若干语句;\n\treturn 方法返回值;\n}\n")])])]),s("p",[s("span",{staticStyle:{color:"red"}},[a._v("访问修饰符")]),a._v("有 4 种情况："),s("span",{staticStyle:{color:"red"}},[a._v("public、private、protected，也可以省略（default)")]),a._v("。")]),a._v(" "),s("p",[s("span",{staticStyle:{color:"red"}},[a._v("返回类型")]),a._v("：可以是任何的数据类型或 void，如果方法没有返回值，返回类型设置为 void；")]),a._v(" "),s("p",[a._v("方法名：方法名的命名规范和变量相同；")]),a._v(" "),s("p",[a._v("参数列表：参数是变量的一种类型，参数变量的作用域在方法内部，即参数只能在方法内部使用；")]),a._v(" "),s("p",[a._v("方法体：方法内部的一些语句。当方法返回值为 void 时，可以省略 return 语句。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('// lcs.java文件\npackage com.lcs;\npublic class lcs{\n    // 具有形参并返回数据\n    public int addnum(int num){\n        return num+1;\n    }\n\n    //无返回值\n    public void eat(){\n        System.out.println("lcs66");\n    }\n\n    //要调用t1、eat，需要先实例化类lcs\n    public static void main(String[] args) {\n        lcs xx1 = new lcs();\n        int str1 = xx1.addnum(7);\n        System.out.println(str1);\n    }\n}\n\n\n\n')])])]),s("h3",{attrs:{id:"数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[a._v("#")]),a._v(" 数组")]),a._v(" "),s("p",[a._v("创建长度为5的int类型数组")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("int [] arr;\narr = new int[5];\n")])])]),s("p",[s("span",{staticStyle:{color:"red"}},[a._v("整型数组的元素都为0，布尔类型的都为false")])]),a._v(" "),s("h3",{attrs:{id:"异常处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异常处理"}},[a._v("#")]),a._v(" 异常处理")]),a._v(" "),s("p",[a._v("异常处理可以分为两种：一种是使用throws关键字抛给上层调用者，另一种是捕获异常，并进行处理，我们本次来着重讲解一下捕获并处理异常。")]),a._v(" "),s("p",[a._v("使用 try 和 catch 关键字可以捕获异常，finally关键字可以执行必须执行的代码【如果没有必须执行，finally可以不写】")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('public class ArrayOutOfIndex {\n    public static void main(String[] args) {\n        try{\n            int[] arr = {1, 2, 3};\n\t   // 由于3超过最大的数组下标2，所以会抛出异常\n            System.out.println(arr[3]);\n        }catch (ArrayIndexOutOfBoundsException e){\n\t   // 如果异常符合catch括号中的异常，则进入catch块儿中\n            System.out.println("超出数组长度了");\n        }finally{\n            System.out.println("无论是否发生异常，都会执行这个代码块中的代码");\n        }\n  }\n}\n')])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("上面例子，catch (ArrayIndexOutOfBoundsException e)，指定捕获数组长度长处范围的错误，但很多时候不确定会报上面错。\n运行时异常继承自Exception，如果不确定运行时会抛出哪种异常， catch中可以用Exception代替具体的异常。")])]),a._v(" "),s("p",[a._v("以上例子可以 catch (Exception e)")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('public class ArrayOutOfIndex1 {\n    public static void main(String[] args) {\n        try{\n            int[] arr = {1, 2, 3};\n\t   // 由于3超过最大的数组下标2，所以会抛出异常\n            System.out.println(arr[3]);\n        }catch (Exception e){\n\t   // 如果异常符合catch括号中的异常，则进入catch块儿中\n            System.out.println("超出数组长度了");\n        }finally{\n           System.out.println("无论是否发生异常，都会执行这个代码块儿中的代码");\n       }\n  }\n}\n')])])]),s("h3",{attrs:{id:"file类的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#file类的使用"}},[a._v("#")]),a._v(" File类的使用")]),a._v(" "),s("p",[a._v("Java文件类File以抽象的方式代表文件和目录。该类主要用于文件和目录的创建、文件的查找和文件的删除等。\nFile对象代表磁盘中实际具体的文件和目录，通过给定路径字符串来创建一个新的File对象。\n下面代码创建了一个file对象，指代d:/temp/test.txt。这个文件可能存在也可能不存在，我们可以通过File对象的方法进行处理，如下所示：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('File file = new File("d:/temp/test.txt");\n')])])]),s("h4",{attrs:{id:"创建文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建文件"}},[a._v("#")]),a._v(" 创建文件")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('File file = new File("d:/temp/test.txt");\ntry {\n    file.createNewFile(); //当文件不存在时，创建test.txt空文件\n} catch (IOException e) { //在文件无法创建时，对IOException异常捕获处理\n    e.printStackTrace();\n}\n')])])]),s("h4",{attrs:{id:"判断文件-目录是否存在，目录不存在则创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#判断文件-目录是否存在，目录不存在则创建"}},[a._v("#")]),a._v(" 判断文件/目录是否存在，目录不存在则创建")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('File dir = new File("d:/temp/voice");\nif(!dir.exists()){//exists())判断文件目录是否存在，存在返回true，不存在返回false\n    dir.mkdirs();//当目录不存在时，调用mkdirs()创建不存在的多级目录\n}\n')])])]),s("h4",{attrs:{id:"移动文件并重命名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移动文件并重命名"}},[a._v("#")]),a._v(" 移动文件并重命名")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('File source = new File("d:/temp/voice/test.txt");\nFile target = new File("d:/temp/text/rename.txt");\nsource.renameTo(target);\n')])])]),s("h4",{attrs:{id:"删除文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除文件"}},[a._v("#")]),a._v(" 删除文件")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('File file = new File("d:/temp/voice/test.txt");\nfile.delete();\n')])])]),s("h3",{attrs:{id:"相对路径与绝对路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相对路径与绝对路径"}},[a._v("#")]),a._v(" 相对路径与绝对路径")]),a._v(" "),s("p",[a._v("相对路径书写格式为文件或目录开头，不能以“/”（Linux根目录的意思）或“盘符”（windows）开头\n相对目录的“当前目录”分不同场景")]),a._v(" "),s("ol",[s("li",[a._v("idea开发环境下，“当前目录”是工程文件夹")]),a._v(" "),s("li",[a._v("如果将java应用打包为Jar文件，则是Jar文件所在目录")])]),a._v(" "),s("p",[a._v("实际工作中，使用相对路径较多")]),a._v(" "),s("h3",{attrs:{id:"apache-commons-io与文件读写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apache-commons-io与文件读写"}},[a._v("#")]),a._v(" Apache Commons IO与文件读写")]),a._v(" "),s("p",[a._v("Apache Commons是 java方法库\nApache Commons提供大量方法简化日常工作\nCommons IO 作为子项目，通过FileUtils类快速实现文件读写操作")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://commons.apache.org/proper/commons-io/download_io.cgi",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载Apache Commons IO"),s("OutboundLink")],1),a._v("\n将.jar 与对应是source.jar复制到工程lib文件中，并引入工程，此时是没有注释的，需要choose source")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('public class FileIo {\n    public static void main(String[] args) {\n        File lcs1 = new File("src/wenben.txt");\n        try {\n            String content = FileUtils.readFileToString(lcs1,"UTF-8");\n            System.out.println(content);\n\n            FileUtils.writeStringToFile(lcs1,"\\n===========","UTF-8",true);   //false为替换\n\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}\n')])])]),s("h5",{attrs:{id:"swing中的文件选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swing中的文件选择"}},[a._v("#")]),a._v(" swing中的文件选择")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('   private void button2MouseClicked(MouseEvent e) {\n        // TODO add your code here\n        JFileChooser chooser = new JFileChooser();\n        chooser.showOpenDialog(chooser);\n        File file = chooser.getSelectedFile();\n        if(file==null) return;\n        if(file.exists()==false){\n            JOptionPane.showMessageDialog(null,"文件不存在","警告",JOptionPane.WARNING_MESSAGE);\n            return;\n        }\n        this.textField1.setText(file.getPath());\n        try {\n            String content = FileUtils.readFileToString(file,"UTF-8");\n            this.textArea1.setText(content);\n        } catch (IOException ioException) {\n            ioException.printStackTrace();\n        }\n    }\n')])])]),s("h2",{attrs:{id:"打包与运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包与运行"}},[a._v("#")]),a._v(" 打包与运行")]),a._v(" "),s("p",[a._v("Jar文件就是 Java Archive File，顾名思意，它的应用是与 Java 息息相关的，是 Java 的一种文档格式。对于我们项目来说，Jar的用途主要有以下两个：")]),a._v(" "),s("ol",[s("li",[a._v("将自己开发的类库打包供他人调用")]),a._v(" "),s("li",[a._v("生成一个可独立运行的“可执行文件”，与windows的exe文件类似（Tips：需要有Java环境才能运行呦）")])]),a._v(" "),s("h3",{attrs:{id:"打包方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包方式"}},[a._v("#")]),a._v(" 打包方式")]),a._v(" "),s("p",[a._v("一、命令行打包，需要先配置环境变量，将jdk的bin目录，放到环境变量path中.\n例如下面可将classes目录下的class字节码打包为target.jar：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("java jar cvf target.jar -C classes\n")])])]),s("p",[a._v("二、idea打包")]),a._v(" "),s("p",[a._v("分三步\n①打包功能配置\n点击IDEA File菜单-> Project Structure…")]),a._v(" "),s("p",[a._v("在Project Structure面板中，左侧选择Artifacts ，中间点击“+” ，选择JAR->From modules with dependencies…，其含义为将当前ireader工程所依赖的所有类库与字节码都打包成一个独立的可运行Jar。")]),a._v(" "),s("p",[a._v("在弹出的 CREATE JAR from Modules面板中，设置两项：\nMain Class 指定应用入口\nextract to the target jar 生成独立的JAR\n设置好name，其他不用改")]),a._v(" "),s("p",[a._v("②应用打包")]),a._v(" "),s("p",[a._v("在Build菜单选择Build Artifacts。")]),a._v(" "),s("p",[a._v("在弹出的面板中找到xxxx:jar ，点击右侧Build进行打包.")]),a._v(" "),s("p",[a._v("在工程out/artifacts/ireader_jar/reader_jar目录下生成ireader.jar，这就是ireader应用的最终产出物。")]),a._v(" "),s("p",[a._v("③第三步，利用java -jar 命令执行Jar。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cd d:java_codeireaderoutartifactsireader_jar\njava -jar ireader.jar\n")])])]),s("h3",{attrs:{id:"运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[a._v("#")]),a._v(" 运行")]),a._v(" "),s("ol",[s("li",[a._v("双击.jar包；")]),a._v(" "),s("li",[a._v("cd到jar包位置，运行 > 将java -jar xxx.jar。为方便别人使用，可以通过新建个批处理文件运行。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);