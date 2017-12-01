---
layout: page
title: About
description: My about
keywords: Hien Nguyen, hiennguyen92, hiennv
comments: true
menu: 关于
permalink: /about/
---

I’m a Software Developer with a strong background developing mobile.

Interested in a challenging technical track career in an application development environment. 

I firmly believe that practice can make a difference, and strive to change life.

## Contact

{% for website in site.data.social %}
* {{ website.sitename }}：[@{{ website.name }}]({{ website.url }})
{% endfor %}

## Skill Keywords

{% for category in site.data.skills %}
### {{ category.name }}
<div class="btn-inline">
{% for keyword in category.keywords %}
<button class="btn btn-outline" type="button">{{ keyword }}</button>
{% endfor %}
</div>
{% endfor %}
