---
title: Nginx常用命令
date: 2020-07-19 16:15:00
tags:
- nginx
keywords:
- nginx
description: Nginx常用命令
---

#### CMD窗口

+ 启动：`start nginx(.exe)`  

+ 停止：`nginx(.exe) -s stop`  

+ 重启：`nginx(.exe) -s reload`

+ 退出：`nginx(.exe) -s quit`

#### PowerShell窗口

+ 启动：`start .\nginx(.exe)`
  
+ 停止：`.\nginx(.exe) -s stop`  

+ 重启：`.\nginx(.exe) -s reload`  

+ 退出：`.\nginx(.exe) -s quit`  

> 说明：

1. “(.exe)”表示“.exe”可加可不加

2. PowerShell窗口要加 `.\`，否则会报错

#### stop 与 quit 的区别

+ stop: 强制停止nginx服务器，如果有未处理的数据，丢弃

+ quit：优雅的停止nginx服务器，如果有未处理的数据，等待处理完成之后停止

<br><br>

<strong style="color: red;">下图为在PowerShell窗口不在nginx之前加“.\”报错提示：</strong>

![](https://img2020.cnblogs.com/blog/1126007/202007/1126007-20200711205457730-1096614627.png)