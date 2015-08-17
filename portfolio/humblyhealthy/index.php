<!DOCTYPE html>
<html>
<head>
    <title>The humblyHealthy Showcase</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Case Study for humblyHealthy on LeonGaban.com">
    <meta name="keywords" content="humbly healthy, healthy blog, web design, web development, web designer, web developer, portfolio">
    <meta name="author" content="Leon Gaban">

	<meta property="og:image" content="../../images/leon_gaban.png"/>
	<meta property="og:title" content="humblyHealthy Showcase on LeonGaban.com"/>
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

    <div class="outer" id="showcase-humblyhealthy">
        <div class="inner">

            <header id="case-header">
                <?php include '../../includes/showcase-nav.php'; ?>

                <div id="case-h1h2">
                    <h1>The humbly Healthy showcase</h1>
                    <h2>Work performed: Concept | Design</h2>
                </div>

                <div id="view-more-button">
                    <input onclick="window.open('http://www.behance.net/gallery/Humbly-Healthy/3864245')" class="view-more-button" type="submit" value="View Mockups">
                </div>
            </header>

            <div class="pattern">

                <div class="showcase-nav">
                    <div class="previous-showcase">
                        <a href="../athenasweb"><div class="showcase-btn" id="btn-prev">&larr; Previous</div></a>
                        <div class="showcase-btn-shadow"></div>
                    </div>
                    <div class="next-showcase">
                        <a href="../howdini"><div class="showcase-btn" id="btn-next">Next &rarr;</div></a>
                        <div class="showcase-btn-shadow"></div>
                    </div>
                </div>
                
                <div class="showcase-thumbs">
                    <div class="first"><img src="../../images/humbly1.jpg"/></div>
                    <div class="third"><img src="../../images/humbly2.jpg"/></div>
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
                    <h1>The humbly Healthy showcase</h1>
                    <h2>Work performed: Concept | Design</h2>
                </div>

                <div id="view-more-button">
                    <input onclick="window.open('http://www.behance.net/gallery/Humbly-Healthy/3864245')" class="view-more-button" type="submit" value="View Mockups">
                </div>
            </header>

            <div class="pattern">
                <div class="mobile-shadow"></div><!-- For 640 -->

                <div class="showcase-nav">
                    <div class="previous-showcase">
                        <a href="../athenasweb"><div class="showcase-btn" id="btn-prev">&larr; Previous</div></a>
                        <div class="showcase-btn-shadow"></div>
                    </div>
                    <div class="next-showcase">
                        <a href="../howdini"><div class="showcase-btn" id="btn-next">Next &rarr;</div></a>
                        <div class="showcase-btn-shadow"></div>
                    </div>
                </div>

                <div class="showcase-thumbs">
                    <div class="first"><img src="../../images/humbly1.jpg"/></div>
                    <div class="third"><img src="../../images/humbly2.jpg"/></div>
                </div>
            </div>
        </div>

        <!-- Case Study Description -->
        <section id="case-study">

            <div id="case-container">

                <h1>Design Concept for Health Blog</h1>

                <div id="case-study-description">
                    <p>
                        <a href="http://www.behance.net/gallery/Humbly-Healthy/3864245" title="humbly Healthy" target="_blank">humblyHealthy</a> was a concept for a health &amp; fitness blog. I’ve since rebranded my blog <a href="http://lifeleveler.net" title="Life Leveler" target="_blank">LifeLeveler.</a> This page is to showcase my thinking behind the look and feel for the site.
                    </p>
                    <p>
                        <ul>
                            <li class="planning">Planning</li>
                            <li>jQuery slider in header to showcase featured posts</li>
                            <li>Earthy tones and textures to be used throughout</li>
                            <li>Fitocracy API used to pull in workout feeds</li>
                            <li>Monetization methods: Banners ads, Affiliate sales</li>
                        </ul>
                    </p>
                </div><!-- #case-study-description -->

                <div id="case-study-extra">
                    <a href="http://www.flickr.com/photos/humblyhealthy/" title="humbly Healthy on Flickr" target="_blank"><img src="../../images/extra_humbly.jpg"/></a>
                </div>

            </div><!-- case-container -->
            <div class="cleared"></div>

        </section>

        <!-- Technology Used -->
        <section id="technology">

            <h1>Technology used for humblyHealthy</h1>

            <div id="case-container">

                <div id="skills">
                    <ul>
                        <li class="title">Software</li>
                        <li>Photoshop</li>
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