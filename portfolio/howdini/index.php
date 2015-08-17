<!DOCTYPE html>
<html>
<head>
    <title>The Howdini Showcase</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Case Study for Howdini on LeonGaban.com">
    <meta name="keywords" content="howdini, video blog, web design, web development, web designer, web developer, portfolio">
    <meta name="author" content="Leon Gaban">

	<meta property="og:image" content="../../images/leon_gaban.png"/>
	<meta property="og:title" content="Howdini Showcase on LeonGaban.com"/>
	<meta property="og:site_name" content="Leon Gaban's Portfolio"/>
	<meta property="og:type" content="portfolio"/>

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
    <link href="../../css/style.css" type="text/css" rel="stylesheet" >

    <script type='text/javascript' src="../../js/jquery-2.0.0.min.js"></script>
    <script type='text/javascript' src='../../js/leongaban.js'></script>
    <script src="../../mint/?js" type="text/javascript"></script>
</head>

<body>

    <audio id="mySoundClip">
        <source src="../../audio/bloop.mp3"></source>
        <source src="../../audio/bloop.ogg"></source>
    </audio>

    <div class="outer" id="showcase-howdini">
        <div class="inner">

            <header id="case-header">
                <?php include '../../includes/showcase-nav.php'; ?>

                <div id="case-h1h2">
                    <h1>You are viewing the Howdini showcase</h1>
                    <h2>Work performed: Concept | Design | Flash Development</h2>
                </div>

                <div id="view-more-button">
                    <input onclick="window.open('http://www.behance.net/gallery/Howdini-Likes/7530611')" class="view-more-button" type="submit" value="View Design">
                </div>
            </header>

            <div class="pattern">

                <div class="showcase-nav">
                    <div class="previous-showcase">
                        <a href="../humblyhealthy"><div class="showcase-btn" id="btn-prev">&larr; Previous</div></a>
                        <div class="showcase-btn-shadow"></div>
                    </div>
                    <div class="next-showcase">
                        <a href="../komen"><div class="showcase-btn" id="btn-next">Next &rarr;</div></a>
                        <div class="showcase-btn-shadow"></div>
                    </div>
                </div>

                <div class="showcase-thumbs">
                    <div class="first"><img src="../../images/howdini1.png"/></div>
                    <div class="third"><img src="../../images/howdini3.jpg"/></div>
                </div>

            </div>

            <div class="video-div">

                <video width="100%" height="100%" autoplay="autoplay" loop="loop" preload>
                    <source src="../../videos/showcase_clouds.mp4" type="video/mp4" >
                    <source src="../../videos/showcase_clouds.ogg" type="video/ogg" >
                    <source src="../../videos/showcase_clouds.webm" type="video/webm" >
                    <object data="../../videos/showcase_clouds.mp4" width="100%" height="100%">
                        <param name="wmode" value="transparent">
                        <param name="autoplay" value="true" >
                        <param name="loop" value="true" >
                        <embed src="../../videos/showcase_clouds.swf" width="100%" height="100%" wmode="transparent" >
                    </object>
                </video>

            </div> 

        </div>

        <div class="inner-mobile">

            <header id="case-header">
                <?php include '../../includes/showcase-nav.php'; ?>

                <div id="case-h1h2">
                    <h1>You are viewing the Howdini showcase</h1>
                    <h2>Work performed: Concept | Design | Flash Development</h2>
                </div>

                <div id="view-more-button">
                    <input onclick="window.open('http://www.behance.net/gallery/Howdini-Likes/7530611')" class="view-more-button" type="submit" value="View Design">
                </div>
            </header>

            <div class="pattern">
                <div class="mobile-shadow"></div><!-- For 640 -->

                <div class="showcase-nav">
                    <div class="previous-showcase">
                        <a href="../humblyhealthy"><div class="showcase-btn" id="btn-prev">&larr; Previous</div></a>
                        <div class="showcase-btn-shadow"></div>
                    </div>
                    <div class="next-showcase">
                        <a href="../komen"><div class="showcase-btn" id="btn-next">Next &rarr;</div></a>
                        <div class="showcase-btn-shadow"></div>
                    </div>
                </div>

                <div class="showcase-thumbs">
                    <div class="first"><img src="../../images/howdini1.png"/></div>
                    <div class="third"><img src="../../images/howdini3.jpg"/></div>
                </div>
            </div>
        </div>

        <!-- Case Study Description -->
        <section id="case-study">

            <div id="case-container">

                <h1>Design Concept for Health Blog</h1>

                <div id="case-study-description">
                    <p>
                        <a href="http://howdini.com" title="Editorial Videos">Howdini.com</a> is a branded editorial  video website owned by Touchstorm. While I worked for <a href="http://touchstorm.com" title="Touchstorm">Touchstorm</a>, I had a chance to work on a redesign for the  Howdini website, new Howdini Likes blog and other digital materials like newsletter / print templates and video players.
                    </p>
                    <p>
                        The video players on Howdini were Flash players which I recoded in Actionscript 3 and then later helped the company transition to using custom designed Brightcove players.
                    </p>
                </div><!-- #case-study-description -->

                <div id="case-study-extra">
                    <a href="http://howdini.com" title="Howdini" target="_blank"><img src="../../images/extra_howdini.jpg"/></a>
                    <span>Custom Brightcove Player</span>
                </div>

            </div><!-- case-container -->
            <div class="cleared"></div>

        </section>

        <!-- Technology Used -->
        <section id="technology">

            <h1>Technology and Services Provided for Howdini</h1>

            <div id="case-container">

                <div id="skills">
                    <ul>
                        <li class="title">Code | Services</li>
                        <li>Web / UI Design</li>
                        <li>HTML / CSS</li>
                        <li>Actionscript 3</li>
                        <li>Ad Network / Brightcove integration</li>
                        <li>Wildfire Facebook integration</li>
                        <li>Video Analytics</li>
                    </ul>
                    <ul>
                        <li class="title">Software</li>
                        <li>Photoshop</li>
                        <li>Flash</li>
                        <li>Illustrator</li>
                        <li>Fireworks</li>
                    </ul>
        	    </div>

                <div id="call-to-action">

                    <ul>
                        <li>
                            <input onclick="window.open('http://leongaban.com/#portfolio')" class="cta-button" type="submit" value="View more case studies">
                        </li>
                        <li>
                            <input onclick="window.open('http://leongaban.com/#contact')" class="cta-button" type="submit" value="Contact me for work">
                        </li>
                    </ul>
                    
                </div>

            </div><!-- case-container -->

        </section>

        <?php include '../../includes/showcase-footer.php'; ?>

    </div><!-- outer -->


<!-- Google Analytics -->
<script src="../../js/googleanalytics.js"></script>

</body>
</html>