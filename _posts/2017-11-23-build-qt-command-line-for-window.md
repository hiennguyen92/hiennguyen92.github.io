---
layout: post
title: Build QT Command Line for Window
categories: QT
description: Build QT Command Line for Window
keywords: QT, QT Build, QT Build Window
---


## Step 1: Clean
```java
"{Root QT}\Tools\QtCreator\bin\jom.exe" -f Makefile.Release clean
```

## Step 2: Create makefile
```java
"{Root QT}\Tools\QtCreator\bin\jom.exe" -f Makefile.Release clean && "{Root QT}\5.9.3\msvc2015\bin\qmake.exe" "{Root Project}\project_name.pro" -spec win32-msvc
```
```java
"{Root QT}\Tools\QtCreator\bin\jom.exe" qmake_all
```

## Step 3: Build *.exe from makefile
```java
"{Root QT}\Tools\QtCreator\bin\jom.exe" -f Makefile.Release
```
OR
```java
"{Root QT}\Tools\QtCreator\bin\jom.exe" -f Makefile.Debug
```

[Note]: We can use **nmake** instead **jom**.
## Done
---


<div align="center"><img width="192px" height="192px" 
src="/assets/images/qrcode.png"/></div>

[1]: http://doc.qt.io/qtcreator
