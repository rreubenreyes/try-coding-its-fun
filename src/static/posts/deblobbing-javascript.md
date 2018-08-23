---
title: "De-blobbing JavaScript"
date: '2018-08-22'
author: 'Reuben Reyes'
thumbnail: '../thumbnails/deblobbing-javascript.png'
---

It's 2018, and the word "JavaScript" has become a blanket term. If I walked up to you tomorrow with a hat full of function names, would you be able to pull one out and tell me if it's standard JS? Hopefully, after reading this article, your answer is yes. <!-- end -->

![A blob!](http://res.cloudinary.com/try-coding-its-fun/image/upload/c_fit,f_auto,h_960,q_auto/v1534997952/blob-161097_1280.png)

## Premise

It's very easy to come into JavaScript with your only preconception of it being that it's all one "unit". I would argue that because it is the primary tool that developers use to communicate with the browser, much of the information that devs take in is lumped together under the label of "JavaScript". In thinking like this, **it can often be difficult to think about good ways to structure our code**!

Also, because there is client-side JS and server-side JS, there's a tendency to, when we switch between environments, have a blurred perception of what our capabilities in the language now are.

In this article we'll be breaking JavaScript down into parts, so that you're a bit less likely to recoil in shock when you read a 1000-line source file. We won't be exploring anything groundbreaking here; rather, I'll be shining a light on some of the many different aspects of web programming one by one, so to reinforce ability to pick out the patterns in your code!

---

## A Primer: Everything Is an API

![Sorry StackOverflow users](http://res.cloudinary.com/try-coding-its-fun/image/upload/f_auto,q_auto/v1535002588/Image_2525202018-08-22_252520at_25252010.36.01_252520PM.png)

### On the frontend: Web APIs

When writing JavaScript for the frontend, we very often find ourselves using words like:

* `window`
* `document`
* `event`
* etc.

If you're a beginning-intermediate developer, these are all terms that are ingrained in you. But what if I told you that **none of these are part of the standard library for JavaScript**?

Let's take a closer look. [Browse the docs](http://devdocs.io/), and see if what I'm asserting below matches up with your findings:

* `window` refers to the global object to which your current (literal) window is scoped.
* `document` is an object which refers to the current HTML being served on the page, and is scoped to the `window`.
* `event` is an object which is constructed whenever a new event is triggered, and is scoped to the object that invoked it.

If you explore the docs enough, you'll find that _none_ of these things are standard JavaScript. Instead, they are specified within the [DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).

As a matter of fact, the DOM doesn't even need to be accessed with JavaScript... it isn't even exclusive to the web! Several other languages, like [Java](https://docs.oracle.com/javase/tutorial/jaxp/dom/when.html), implement the DOM standard to structure and interact with markup. (Java often uses it to handle XML.)

The functionality that the browser provides you doesn't end with the DOM. On the frontend, there are several more APIs which you are likely to interact with, all of which fall under the umbrella of "[Web APIs](http://devdocs.io/dom/)":

* [**Fetch API**](http://devdocs.io/dom/fetch_api), for grabbing data from other websites.
* [**Web Animations API**](http://devdocs.io/dom/web_animations_api), for programmatically animating DOM elements.
* [**Payment Request API**](http://devdocs.io/dom/payment_request_api), for handling online transactions.

I hope I've made my message clear at this point: When you write code for the frontend, what you're essentially doing is manipulating these APIs which are exposed to you. **So what happens when you take the browser away?**

### On the Backend: Server APIs

```javascript
> node
> document.getElementById('target')

ReferenceError: document is not defined
```

**_What?_**

If you're not familiar with backend programming, JavaScript outside of the browser may look a little cryptic to you. In server-land, your concerns are with [networking](https://nodejs.org/dist/latest-v8.x/docs/api/https.html), [managing](https://nodejs.org/dist/latest-v8.x/docs/api/process.html) [processes](https://nodejs.org/dist/latest-v8.x/docs/api/cluster.html), and [security](https://nodejs.org/dist/latest-v8.x/docs/api/crypto.html); the DOM isn't even part of the equation. **No browser, no DOM!**

[Node](https://github.com/nodejs/node), the server environment that 99.99% of server-side JavaScript runs in, exposes its own APIs to deal with exactly those things. And much like frontend frameworks leverage web APIs, backend frameworks are specifically built to utilize Node's server-side APIs. Where we have libraries like [React](https://github.com/facebook/react), [Angular](https://github.com/angular/angular), and [Vue](https://github.com/vuejs/vue) for the frontend, we have [Express](https://github.com/expressjs/express), [Meteor](https://github.com/meteor/meteor), and [Sails](https://github.com/balderdashy/sails) for the backend.

Once you accept this separation between language (JavaScript) and environment (client/browser or server/Node), you are able to pick out the constants in your code much more easily.

---

## Implementation Level: De-blobbing Your Code

![The greyest and the blobbiest.](http://res.cloudinary.com/try-coding-its-fun/image/upload/f_auto,q_auto/v1535001565/blobbiest.jpg)

> GreyBlob.js

When you take away both the browser and the server, what you're left with is... standard JavaScript! And by itself, JavaScript, the language, is just like any other language: A tool that we use to talk to the computer. But because we write code for the web, as it turns out, **there is a pretty specific pattern that we implement when we write web programs of any kind**.

Our implementation of JS is mostly due to the nature of the kinds of problems we're solving as web developers. Familiarizing yourself with this pattern will help you approach problems with a far more specific mindset than otherwise, and will greatly aid in understanding the specifics of what you're working with

### The dynamic trio of a web program

#### Elements

**Elements** are the "things" that live in your environment; in particular, they are the "things" that, we've decided beforehand, are going to be the primary targets for our code.

On the frontend, they're often DOM `Element`s, like a `div` or a `button`. On the backend, "they" is often singular, in the form of the one server that the browser is interacting with at the time. In both cases, we generally choose these as our elements because they are prone to some kind of interaction with the user.

Sometimes elements contain inherent data, like HTML attributes or other properties. Whatever they are, they're kind of just hanging out until something happens to them.

#### Listeners

**Listeners**, you might infer, _listen_ for **events**. When a user clicks a button, that's an event that is called on the button, and the button's listener "hears" that.

That button might then send some data back to the server, where that data is received as part of a request. The server then presumably does something with that data.Both the button and the server likely had listeners attached to them which allowed that data to move from client to server, and from the server to wherever its final destination is.

Clearly the only way for a listener to be valuable is attach it to an element, and that syntax is almost always something like `object.addEventListener(...)` or `object.on('eventType', ...)`.

However, it's not the listeners which actually move that data. That responsibility is given to the final piece of this puzzle...

#### Behavior

When we tell the browser to send data to a server when we click a button, we are defining that button's **behavior**.

Behavior is defined by **handlers**, or handler functions. _This_ is the meat of your program, as you're defining what happens when an event is triggered on an element. To continue with this example: You might assign the behavior of "send some data to the server" to a button. You might also assign the behavior of "when I receive this data, send back an HTML file" to the server which receives the data.

Obviously, there is no one definition of what "a behavior" is. That part is up to you, and lucky for you, defining the behavior of your script is the fun part!

For those a bit newer to web development, I want to stress: When you go out and explore the many great JS frameworks out there, please take this information with you! **As opinionated as frameworks can be... at the end of the day, they are implementing JavaScript, and they are implementing this pattern.**

---

## A Blob No More

JavaScript is a beautiful tool, and as beautiful as the web also is, it would be a shame to overlap the functionality of the language with that of the platform it runs on. Separating your concerns when writing code for the web, I believe, is a key step in truly understanding the intricacies of _both_ the language _and_ the platform!

I hope you enjoyed this short breakdown!
