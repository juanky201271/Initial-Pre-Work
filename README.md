# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

In the development of the web you are using (Webpack + React + Babel) and Gatsby to build a static type web. So, the architecture you're using is not monolithic, but modular (webpack forces you to create different modules). If I'm right, webpack has packaged all the content, so that when you start loading the web, there is content (index-HTML) that preloads a series of JS files, which would be commons, app, path, pages (component) and layouts (component).
In addition, images, fonts and bootstrap css are loaded. Finally I have to mention that they are also loading gradually external scrits to the web, for example: googletagmanager, googleanalitycs, Linkedin and facebook, which in turn, create 3 cookies that are stored in the browser (fbp - Facebook, ga and gid - Google).

## From start to finish, how does data reach you to be rendered in the browser?

The responsible for how the information arrives to the browser, I think, which is webpack. What I think it does is package all the assets, using only one pipeline where all the content from the web site arrives to the browser. On the other hand, by using as CDN CloudFront (AmazonS3), I imagine that when you start the session on the web, the content reaches the browser from the nearest CloudFront node physically, improving the UX.

## What code is rendered in the browser?

The code that the browser has to render would be HTML CSS JS previously packaged by webpack.

## What is the server-side code’s main function?

In React applications, the main component for SSR is: src/server.js along with src/template.js.

## What is the client-side code’s main function?

In React applications, the main component for CSR is: src/bundle.js along with src/client.js.

## What is runtime?

The run-time software on this website is babel-loader for webpack, which serves to make the modern JS code (ES6) and React JSX code compatible with ALL browsers, current and old. (transpiling)

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

I don't know if I understand the question well, I think there will be as many instances created as sessions opened by web-connected users.

## How many instances of the server-side code are available at any given time?

I do not know if I understand the question well, I think there will be only 1 instance serving all connections/sessions opened by web users.

## How many instances of the databases connected to the server application are created?

I think it's a statistic website, and I think the data is stored in the CDN and distributed by its nodes, this data is a set of JSON files. For this reason it gives me the impression that there is no database connected to the application server for this website.

NOTE: For any questions I have consulted: https://www.freecodecamp.org/news/server-side-rendering-your-react-app-in-three-simple-steps-7a82b95db82e/
