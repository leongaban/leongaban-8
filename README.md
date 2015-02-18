leongaban.com version 8
================
<strong>Leon Gaban's portfolio</strong>

<a href="https://twitter.com/leongaban">@leongaban</a>

[![Build Status](https://travis-ci.org/linnovate/mean.svg?branch=master)](https://travis-ci.org/linnovate/mean)
[![Dependencies Status](https://david-dm.org/linnovate/mean.svg)](https://david-dm.org/linnovate/mean)
[![Built with Gulp](https://raw.githubusercontent.com/gulpjs/gulp/e2dd2b6c66409f59082c24585c6989244793d132/built-with-gulp.png)](http://gulpjs.com/)
[![Gitter](https://badges.gitter.im/JoinChat.svg)](https://gitter.im/linnovate/mean?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

# [![MEAN Logo](http://mean.io/system/assets/img/logos/meanlogo.png)](http://mean.io/) M.E.A.N Stack

MEAN is a framework for an easy starting point with [MongoDB](http://www.mongodb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), and [AngularJS](http://angularjs.org/) based applications. It is designed to give you a quick and organized way to start developing MEAN based web apps with useful modules like Mongoose and Passport pre-bundled and configured. We mainly try to take care of the connection points between existing popular frameworks and solve common integration problems.
## Prerequisites
* *MongoDB* - <a href="http://www.mongodb.org/downloads">Download</a> and Install mongodb - <a href="http://docs.mongodb.org/manual">Checkout their manual</a> if you're just starting.
* *Node.js* - <a href="http://nodejs.org/download/">Download</a> and Install Node.js, nodeschool has free <a href=" http://nodeschool.io/#workshoppers">node tutorials</a> to get you started.


## Technologies

### The MEAN stack

MEAN is an acronym for *M*ongo, *E*xpress.js , *A*ngular.js and *N*ode.js

<dl class="dl-horizontal">
<dt>MongoDB</dt>
<dd>Go through MongoDB Official Website and proceed to its Great Manual, which should help you understand NoSQL and MongoDB better.</dd>
<dt>Express</dt>
<dd>The best way to understand express is through its Official Website, particularly The Express Guide; you can also go through this StackOverflow thread for more resources.</dd>
<dt>AngularJS</dt>
<dd>Angular's Official Website is a great starting point. CodeSchool and google created a <a href="https://www.codeschool.com/courses/shaping-up-with-angular-js">great tutorial</a> for beginners, and the angular videos by <a href="https://egghead.io/">Egghead</a>.</dd>
<dt>Node.js</dt>
<dd>Start by going through Node.js Official Website and this StackOverflow thread, which should get you going with the Node.js platform in no time.</dd>
</dl>

### Additional Tools
* <a href="http://mongoosejs.com/">Mongoose</a> - The mongodb node.js driver in charge of providing elegant mongodb object modeling for node.js
* <a href="http://passportjs.org/">Passport</a> - An authentication middleware for Node.js which supports authentication using a username and password, Facebook, Twitter, and more.


## CLI
### Overview

The MEAN CLI is a simple Command Line Interface for installing and managing MEAN applications. As a core module of the Mean.io project, it provides a number of useful tools to make interaction with your MEAN application easier, with features such as: scaffolding, module creation and admin, status checks, and user management.
```bash
$ mean
$ mean --help
$ mean help
```
  <code>mean help</code> can also be used in conjunction with any command to get more information about that particular functionality. For example, try <code>mean help init</code> to see the options for init
```bash
$ mean help [command]
```

### Packages
#### Management
 <p class="alert alert-warning">All of the remaining of the commands must be run from the root folder of your MEAN application.</p>
  <p>Contributed MEAN packages can be installed or uninstalled via the CLI. Also, currently installed modules can be viewed with the <code>list</code> command.</p>

```bash
$ mean list
$ mean install <module>
$ mean uninstall <module>
```

<p class="alert alert-info">Mean packages installed via the installer are found in <i>/node_modules</i></p>
#### Search
To find new packages run the *mean search* command
```bash
$ mean search [packagename]
```
`mean search` will return all of the available packages, `mean search [packagename]` will filter the search results.

#### Scaffolding
To create a new MEAN app, run <code>mean init</code>. Name for the application is optional. If no name is provided, "mean" is used. The MEAN project will be cloned from GitHub into a directory of the application name.
```bash
$ mean init [name]
$ cd [name] && npm install
```
<p class="alert alert-info">Note: <a href="http://git-scm.com/downloads">git</a> must be installed for this command to work properly.</p>

### Misc
<h4>Status</h4>
<p>Check the database connection for a particular environment (e.g. development (default), test, production) and make sure that the meanio command line version is up to date.</p>
```bash
$ mean status
```
<h4>Docs</h4>
<p>A simple shortcut to open the mean documentation in your default browser.</p>
```bash
$ mean docs
```

**Server**

Packages are registered in the **app.js** 
Defines package name, version and `mean=true` in the **package.json**   

All of the Server side code resides in the `/server` directory.

    Server
    --- config        # Configuration files
    --- controllers   # Server side logic goes here
    --- models        # Database Schema Models
    --- routes        # Rest api endpoints for routing
    --- views         # Swig based html rendering

**Client**

All of the Client side code resides in the `/public` directory.

    public            
    --- assets        # Javascript/Css/Images (not aggregated)
    --- controllers   # Angular Controllers
    --- config        # Contains routing files
    --- services      # Angular Services (also directive and filter folders)
    --- views         # Angular views

### Heroku
Before you start make sure you have the [Heroku toolbelt](https://toolbelt.heroku.com/)
installed and an accessible MongoDB instance - you can try [MongoHQ](http://www.mongohq.com/)
which has an easy setup).

Add the db string to the production env in *server/config/env/production.js*.

```bash
$ git init
$ git add .
$ git commit -m "initial version"
$ heroku apps:create
$ heroku config:add NODE_ENV=production
$ heroku config:add BUILDPACK_URL=https://github.com/mbuchetics/heroku-buildpack-nodejs-grunt.git
$ git push heroku master
$ heroku config:set NODE_ENV=production
```

