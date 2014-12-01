---
title: Github Pages Custom DNS Gotcha
author: briantakita
date: 9/4/13 11:53 PM
template: article.jade
---

I set up [briantakita.com](http://briantakita.com) using [Github Pages](http://pages.github.com/) & [wintersmith](http://wintersmith.io/). Overall, it took some effort to setup & learn, but it turned out to be fairly painless. In this aritcle, I talk about setting up the DNS to point [briantakita.com](http://briantakita.com) to btakita.github.io.

<span class="more"></span>

To set up the DNS, I followed the [official instructions](https://help.github.com/articles/setting-up-a-custom-domain-with-pages) and [github pages with namecheap](http://davidensinger.com/2013/03/setting-the-dns-for-github-pages-on-namecheap/).

I created the CNAME file with:

```
briantakita.com
```

and set up the DNS on Namecheap.

However, I got the 404 page on github.

So I ran

```
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
```

What's this github.map.fastly.net? It looks like it related to github pages routing.

Anyways, it remained for a few minutes and then went away.

Some likely culprits are browser cache, some sort of propagation time in the Github platform, or something else entirely.

I don't think it was a browser cache because this was the first time I visited briantakita.com being routed to github pages. That leaves it being a propagation time issue or something else. While I believe it was propagation time, I'm not sure.

I also am just going to move on and leave it at that. Please comment if you run into the same issue or if you can confirm the issue.
