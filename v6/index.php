<!DOCTYPE html>
<html>
<head>
    <title>Leon Gaban | Front-End Developer for TickerTags</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Leon Gaban, front-end developer for TickerTags">
    <meta name="keywords" content="ui design, web development, web designer, web developer, frontend developer, tickertags">
    <meta name="author" content="Leon Gaban">

    <!-- Search engines -->
    <meta name="author" content="Leon Gaban">
    <meta name="description" content="Leon Gaban version 6">
    <meta name="revisit-after" content="365 days">
    <link href="http://leongaban.com" rel="canonical" />

	<!-- Twitter -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@leongaban">
    <meta name="twitter:creator" content="@leongaban">
    <meta name="twitter:title" content="Leon Gaban">
    <meta name="twitter:description" content="Leon Gaban version 6.">
    <meta name="twitter:image:src" content="assets/imgs/tickertags-twitter.png">

    <!-- Facebook -->
    <meta property="og:locale" content="en_US">
    <meta property="og:type" content="personal">
    <meta property="og:site_name" content="Leon Gaban">
    <meta property="og:title" content="Leon Gaban version 6">
    <meta property="og:image" content="assets/imgs/logo@2x.png">
    <meta property="og:url" content="https://leongaban.com">
    <meta property="og:description" content="Leon Gaban version 6.">

    <link rel="shortcut icon" href="http://leongaban.com/favicon.ico">
    <link rel="apple-touch-icon" href="http://leongaban.com/apple-touch-icon.png">

	<!-- html5.js for IE less than 9 -->
	<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

	<!-- css3-mediaqueries.js for IE less than 9 -->
	<!--[if lt IE 9]>
		<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
	<![endif]-->

    <link href="http://fonts.googleapis.com/css?family=Bitter:400,700,400italic" rel="stylesheet" type="text/css" >
    <link href="css/style.css" type="text/css" rel="stylesheet" >

    <script type='text/javascript' src="js/jquery-2.0.0.min.js"></script>
    <script type='text/javascript' src='js/leongaban.js'></script>
    <script src="/mint/?js" type="text/javascript"></script>
</head>

<body>

    <audio id="mySoundClip">
        <source src="audio/bloop.mp3"></source>
        <source src="audio/bloop.ogg"></source>
    </audio>

    <div class="outer" id="leon-home">

        <div class="inner">

            <header id="main-header">
                <!-- Main Nav -->
                <?php include 'includes/nav.php'; ?>

                <div id="logo-title">
                    <img src="images/leon_gaban.png" width="256" height="256" class="avatar" />

                    <h1>Hi, I'm Leon Gaban</h1>
                    <h2>Front-End Developer</h2>
                    <h3>for <a href="http://tickertags.com" title="TickerTags">TickerTags</a></h3>
                </div>
            </header>

            <div class="video-div">
                <video width="100%" height="100%" autoplay="autoplay" loop="loop" preload>
                    <source src="videos/clouds.mp4" type="video/mp4" >
                    <source src="videos/clouds.ogg" type="video/ogg" >
                    <source src="videos/clouds.webm" type="video/webm" >
                    <object data="videos/clouds.mp4" width="100%" height="100%">
                        <param name="wmode" value="transparent">
                        <param name="autoplay" value="true" >
                        <param name="loop" value="true" >
                        <embed src="videos/clouds.swf" width="100%" height="100%" wmode="transparent" >
                    </object>
                </video>
            </div>

        </div><!-- inner -->

        <div class="inner-mobile">

            <header id="main-header">
                <!-- Main Nav -->
                <?php include 'includes/nav.php'; ?>

                <div id="logo-title">
                    <img src="images/leon_gaban.png" width="256" height="256" class="avatar" />

                    <h1>Hello, I'm Leon Gaban</h1>
                    <h2>Designer &amp; Front-End Developer</h2>
                    <h3>UI design | HTML 5 | CSS 3 + SASS | jQuery</h3>
                </div>
            </header>

            <div class="pattern-home"></div>
        </div>

        <div id="portfolio">

        	<div class="portfolio-nav">
                <h1>Leon's Portfolio</h1>
        	</div>

            <div id="showcase-holder">

                <ul id="portfolio-thumbs">

                    <li>
                        <a href="/portfolio/whoat">
                            <img class="role-thumb" src="images/thumb_whoat.jpg" alt="WhoAt">
                            <p>Who@</p>
                        </a>
                    </li>

                    <li>
                        <a href="/portfolio/chipestimate">
                            <img class="role-thumb" src="images/thumb_chipestimate.png" alt="ChipEstimate">
                            <p>ChipEstimate</p>
                        </a>
                    </li>

                    <li>
                        <a href="/portfolio/shabang" title="Shabang">
                            <img class="role-thumb" src="images/thumb_shabang.png" alt="Shabang">
                            <p>Shabang</p>
                        </a>
                    </li>

                    <li>
                        <a href="/portfolio/athenasweb" title="Athena's Web">
                            <img class="role-thumb" src="images/thumb_athena.png" alt="Athena's Web">
                            <p>Athena's Web</p>
                        </a>
                    </li>

                    <li>
                        <a href="/portfolio/humblyhealthy" title="Humbly Healthy">
                            <img class="role-thumb" src="images/thumb_humbly.png" alt="Humbly Healthy">
                            <p>Humbly Healthy</p>
                        </a>
                    </li>

                    <li>
                        <a href="/portfolio/howdini" title="Howdini">
                            <img class="role-thumb" src="images/thumb_howdinilikes.png" alt="Howdini">
                            <p>Howdini</p>
                        </a>
                    </li>

                    <li>
                        <a href="/portfolio/komen" title="I am the Cure">
                            <img class="role-thumb" src="images/thumb_komen.png" alt="Komen's I am the cure">
                            <p>I Am the Cure</p>
                        </a>
                    </li>

                    <li>
                        <a href="/portfolio/sony" title="Sony Curtain">
                            <img class="role-thumb" src="images/thumb_nigel.png" alt="Sony">
                            <p>Sony video player</p>
                        </a>
                    </li>

                    <li>
                        <a href="/portfolio/nationwide">
                            <img class="role-thumb" alt="Submit" src="images/thumb_nationwide.png" alt="Nationwide">
                            <p>Nationwide</p>
                        </a>
                    </li>

                    <li>
                        <a href="/portfolio/langopoly" title="Langopoly">
                            <img class="role-thumb" alt="Submit" src="images/thumb_langopoly.png" alt="Langopoly">
                            <p>Langopoly</p>
                        </a>
                    </li>

                    <li>
                        <a href="/portfolio/tsw" title="The Secret to Writing">
                            <img class="role-thumb" alt="Submit" src="images/thumb_tstw.png" alt="The Secret to Writing">
                            <p>The Secret to Writing</p>
                        </a>
                    </li>

                    <li>
                        <a href="/portfolio/sblemons">
                            <img class="role-thumb" alt="Submit" src="images/thumb_sblemons.png" alt="SBLemons">
                            <p>SBLemons</p>
                        </a>
                    </li>

                    <li>
                        <a href="/portfolio/tvp" title="Turquoise Video Production">
                            <img class="role-thumb" alt="Submit" src="images/thumb_tvp.png" alt="Turquoise Video Production">
                            <p>Turquoise Video</p>
                        </a>
                    </li>
                </ul>

            </div><!-- showcase-holder -->

        </div><!-- #portfolio -->

        <footer id="footer">

            <h1>Find Me on the Web</h1>
            <p>You can contact or follow me via any of these services:</p>

            <div class="the-form">

                <!-- Social Icons -->
                <div class="social-links">
                    <ul>
                        <li class="ico_twitter">
                            <a href="http://twitter.com/leongaban">
                            <img src="images/twitter.png" alt="Twitter Icon"/></a>
                        </li>
                        <li class="ico_google">
                            <a href="https://plus.google.com/u/0/113236527296472616630/">
                            <img src="images/google-plus.png" alt="LinkedIn Icon"/></a>
                        </li>
                        <li class="ico_linkedin">
                            <a href="http://www.linkedin.com/in/leongaban" title="Add me on LinkedIn">
                            <img src="images/linkedin.png" alt="LinkedIn Icon"/></a>
                        </li>
                        <li class="ico_stackoverflow">
                            <a href="http://stackoverflow.com/users/168738/leon" title="My Stack Overflow profile">
                            <img src="images/stackoverflow.png" alt="Stackoverflow Icon"></a>
                        </li>
                        <li class="ico_codepen">
                            <a href="http://codepen.io/leongaban" title="My Codepen Experiments">
                            <img src="images/codepen.png" alt="Codepen"></a>
                        </li>
                        <li class="ico_github">
                            <a href="https://github.com/leongaban" title="My code on Github">
                            <img src="images/github.png" id="github-img" alt="Github Icon"/></a>
                        </li>
                    </ul>
                </div>

                <!-- <h1>Contact Me</h1>

                <div id="status"></div>

    	        <form id="myForm" action="mailer.php" method="post">

        	        <div>
        	            <label for="name">Your Name</label>
        	            <input type="text" name="name" id="name" value="" tabindex="1">
        	        </div>

        	        <div>
        	            <label for="email">Your Email</label>
        	            <input type="text" name="email" id="email" value="" tabindex="2">
        	        </div>

        	        <div>
        	            <label for="textarea">Your Message</label>
        	        </div>

        	        <div>
        	            <textarea cols="40" rows="8" name="message" id="message" tabindex="3"></textarea>
        	        </div>

        	        <div>
        	            <input class="submit-button" type="submit" value="Submit" tabindex="4">
        	        </div>

	           </form> -->

                <div id="copyright">&copy;<script>document.write(new Date().getFullYear())</script> Leon Gaban | Web Designer | Developer <br/> <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/3.0/deed.en_US" target="_blank">Creative Commons</a>.</div>
    	    </div>

        </footer>

    </div><!-- outer -->

<!-- Google Analytics -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-27583223-1', 'auto');
  ga('send', 'pageview');
</script>

<!-- Crazy Egg -->

</body>
</html>
