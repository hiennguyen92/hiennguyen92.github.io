---
title: Build QT Command Line for Window
description: build QT command line for Window
date: '2017-11-23'
draft: false
slug: '/pensieve/build-qt-command-line-for-window'
tags:
  - QT
---

### Step 1: Clean


```shell
"{root-path-qt}\Tools\QtCreator\bin\jom.exe" -f Makefile.Release clean
```

### Step 2: Create Makefile

```shell
"{root-path-qt}\Tools\QtCreator\bin\jom.exe" -f Makefile.Release clean && 
"{root-path-qt}\5.9.3\msvc2015\bin\qmake.exe" {root-path-project}\project_name.pro -spec win32-msvc

"{root-path-qt}\Tools\QtCreator\bin\jom.exe" qmake_all
```

### Step 3: Build *.exe from Makefile

```shell
"{root-path-qt}\Tools\QtCreator\bin\jom.exe" -f Makefile.Release
```

DONE

We can use `nmake` instead `jom`.
