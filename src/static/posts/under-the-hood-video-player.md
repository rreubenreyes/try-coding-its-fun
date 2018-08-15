---
title: "Under the Hood: The HTML5 Video Player"
date: '2018-08-13'
author: 'Reuben Reyes'
---

In this series, we'll be inspecting some web apps and components that you probably see everywhere, but maybe never really looked into. This time we'll be finding out how HTML5 video players work with an interactive example!<!-- end -->

![Under the Hood app on CodePen!](https://cl.ly/0u1D2b201133/Image%2525202018-08-13%252520at%2525208.24.09%252520PM.png)

---

## Welcome to a new series!

Quick, name five methods on the HTML5 `video` tag! ...

...because if you just did so without a hitch, you're in a better spot than I was a week ago.

Welcome to a new series! In _Under the Hood_, we're going to be taking a look at the code behind the components, features, and applications that you probably see everywhere on the internet, yet you've never stopped and wondered how they work.

The goal is to make it more inviting to dive into these kinds of web components yourself! After all, I've found that **I'm much more eager to work with parts of an API once they've been demystified** and I have a grasp of what's going on behind the scenes. This week we're starting off easy and diving into the HTML5 video player!

### Navigating an API documentation labyrinth sucks

_(Disclaimer: I am not telling you to not read the docs. You should still be reading the docs.)_

What do you _mean_ `video.mute()` isn't a valid function? How else am I supposed to mute this video?

If you're like me, your first impulse when you run into a situation like that is to do this:

![Don't ever try to get information on an element using __proto__.](https://cl.ly/0V381A0u0W3D/Image%202018-08-14%20at%208.42.00%20PM.png)

> This gives you every property and method that's being passed down through the video tag's _entire_ prototype chain.

Which promptly leads you to look at the [docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement), which points you up to the `video` tag's [direct prototype](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement), which tells you that there is no method named `mute()`, but there _is_ a property called `muted`... what if I type in `video.muted = true`? Oh, that worked!

You typed that code in yourself, saw the result, and learned something new! Unfortunately, navigating the docs isn't always so straightforward. This is why I think that learning things by interacting with a real app that uses those things is a great way to go!

With that aside, I encourage you to check out the first [Under the Hood app on CodePen](https://codepen.io/radotreyes/full/EpJKgK/)! This app exposes the code being executed when you interact with an HTML5 video player, so you can skip all the wading through the docs and see the API for yourself!

![Under the Hood GIF](https://cl.ly/0z0l3X3K3e3I/Screen%20Recording%202018-08-14%20at%2009.32%20PM.gif)

> Check out the first [Under the Hood app on CodePen!](https://codepen.io/radotreyes/full/EpJKgK/)

### Editor's notes

Big shoutout to [Wes Bos](https://twitter.com/wesbos?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor) and his [JavaScript 30](https://javascript30.com/) course for both planting the idea for this series into my head, and for providing the foundation of the CodePen app I'm presenting here! I highly recommend this course for any beginner-intermediate developers looking to sharpen their skills with just plain old vanilla JavaScript.

Next time I'll be tackling something a little more complex... **have you ever wondered how fancy CSS page transitions and animations work?**
