---
layout: page
title: Links
description: 没有链接的博客是孤独的
keywords: Hien Nguyen, hiennguyen92, hiennv
comments: true
menu: 链接
permalink: /links/
---

> Friend list

{% for link in site.data.links %}
* [{{ link.name }}]({{ link.url }})
{% endfor %}
