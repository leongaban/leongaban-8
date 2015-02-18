leongaban.com version 8
================
<strong>Leon Gaban's portfolio</strong>

[![Built with Gulp](https://raw.githubusercontent.com/gulpjs/gulp/e2dd2b6c66409f59082c24585c6989244793d132/built-with-gulp.png)](http://gulpjs.com/)

![Leon Gaban](https://raw.github.com/leongaban/leongaban-com/master/leongaban.png)

<strong>Leongaban.com version 8 (under development) version 7 here: http://leongaban.com</strong>

<p>I have a passion for crafting user experiences, if the web was built with LEGO I’d probably be using those some how.While designing or coding I prefer listening to ambient music or a podcast, I follow the people over at scotch.io, css-tricks and read on smashing magazine to stay updated in the industry. Also I'm constantly absorbing content on the newest technologies. Currently on the path of the full <a href="http://mean.io/">MEAN stack</a> ninjaneer.</p>

<p>My favorite code editor is Sublime Text 2. For pleasure I listen to a multitude of podcasts including Radiolabs, Let's talk Bitcoin, Hardcore History and the Joe Rogan podcast, for hobbies I love training in Brazillian jui-jitsu and Bikram yoga. You can follow me on Twitter <a href="https://twitter.com/leongaban">@leongaban</a></p>

## Social Profiles
<a href="http://stackoverflow.com/users/168738/leon-gaban">Stackoverflow profile</a>
<a href="http://codepen.io/leongaban/">Codepen</a>
<a href="https://www.linkedin.com/in/leongaban">LinkedIn</a>


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

