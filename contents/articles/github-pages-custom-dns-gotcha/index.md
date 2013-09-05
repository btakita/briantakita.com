---
title: Github Pages Custom DNS Gotcha
author: briantakita
date: 9/4/13 11:53 PM
template: article.jade
---

I was setting up [briantakita.com](http://briantakita.com) to point to github pages following the [official instructions](https://help.github.com/articles/setting-up-a-custom-domain-with-pages) and [github pages with namecheap](http://davidensinger.com/2013/03/setting-the-dns-for-github-pages-on-namecheap/).

I created the CNAME file with:

    briantakita.com

and set up the DNS on Namecheap.

However, I got the 404 page on github.

So I ran

    $ dig briantakita.com +nostats +nocomments +nocmd

    ; <<>> DiG 9.8.4-rpz2+rl005.12-P1 <<>> briantakita.com +nostats +nocomments +nocmd
    ;; global options: +cmd
    ;briantakita.com.       IN  A
    briantakita.com.  1627  IN  A 204.232.175.78

    $ dig www.briantakita.com +nostats +nocomments +nocmd

    ; <<>> DiG 9.8.4-rpz2+rl005.12-P1 <<>> www.briantakita.com +nostats +nocomments +nocmd
    ;; global options: +cmd
    ;www.briantakita.com.       IN  A
    www.briantakita.com.  1800  IN  CNAME	btakita.github.io.
    btakita.github.io.    2163  IN  CNAME	github.map.fastly.net.
    github.map.fastly.net.  29  IN  A	199.27.77.133

What's this github.map.fastly.net? It seemed like my CNAME didn't work.

Well, I remembered that sometimes config files need to have a space at the end. So I added a space at the end of CNAME, pushed the changes, and viola, it worked!
