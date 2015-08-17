<!DOCTYPE html>
<html>
<head>
    <title>The Sony Showcase</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Showcase for Sony Curtain on LeonGaban.com">
    <meta name="keywords" content="sony, video player, flash, web design, web development, web designer, web developer, portfolio">
    <meta name="author" content="Leon Gaban">

	<meta property="og:image" content="../../../images/leon_gaban.png"/>
	<meta property="og:title" content="Sony Showcase on LeonGaban.com"/>
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

    <!-- swfobject -->
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js"></script>
    <script type="text/javascript">swfobject.registerObject("SonyCurtain", "9.0.115", "expressInstall.swf");</script>
</head>

<body>

    <audio id="mySoundClip">
        <source src="../../audio/bloop.mp3"></source>
        <source src="../../audio/bloop.ogg"></source>
    </audio>

    <div class="sony-container">

        <!-- Sony Curtain -->
        <div class="sony-curtain-box">
            <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="800" height="600">
                <param name="movie" value="SonyCurtain.swf" />
                <!--[if !IE]>-->
                <object type="application/x-shockwave-flash" data="SonyCurtain.swf" width="800" height="600">
                    <!--<![endif]-->
                    <p>You don't have Flash installed, <a href="http://www.adobe.com/go/getflashplayer">please download it here</a></p>
                    <!--[if !IE]>-->
                </object>
                <!--<![endif]-->
            </object>
        </div><!-- sony-curtain-box -->

    </div><!-- sony-container -->

    <div class="outer" id="showcase-sony">
        <div class="inner">

            <header id="case-header">
                <?php include '../../includes/showcase-nav.php'; ?>

                <div id="case-h1h2">
                    <h1>Sony video player { Concept | Design | Flash Development }</h1>
                </div>

                <div id="view-more-button-sony">
                    <input onclick="window.open('http://leongaban.com/portfolio/sony/sonycurtain.html')" class="view-more-button-sony" type="submit" value="View Player">
                </div>
            </header>

            <div class="pattern">

                <div class="showcase-nav">
                    <div class="previous-showcase">
                        <a href="../howdini"><div class="showcase-btn" id="btn-prev">&larr; Previous</div></a>
                        <div class="showcase-btn-shadow"></div>
                    </div>
                    <div class="next-showcase">
                        <a href="../nationwide"><div class="showcase-btn" id="btn-next">Next &rarr;</div></a>
                        <div class="showcase-btn-shadow"></div>
                    </div>
                </div>

            </div>

            <div class="video-div">

                <video width="100%" height="100%" autoplay="autoplay" loop="loop" preload>
                    <source src="../../videos/showcase_clouds.mp4" type="video/mp4" >
                    <source src="../../videos/showcase_clouds.ogg" type="video/ogg" >
                    <source src="../../videos/showcase_clouds.webm" type="video/webm" >
                    <object data="../../videos/showcase_clouds.mp4" width="100%" height="100%">
                        <param name="wmode" value="transparent">
                        <param name="autoplay" value="true">
                        <param name="loop" value="true">
                        <embed src="../../videos/showcase_clouds.swf" width="100%" height="100%" wmode="transparent" >
                    </object>
                </video>

            </div> 

        </div>

        <div class="inner-mobile">

            <header id="case-header">
                <?php include '../../includes/showcase-nav.php'; ?>

                <div id="case-h1h2">
                    <h1>Sony video player </h1>
                    <h2>Work performed: Concept | Design | Flash Development</h2>
                </div>

                <div id="view-more-button">
                    <input onclick="window.open('http://leongaban.com/portfolio/sony/sonycurtain.html')" class="view-more-button" type="submit" value="View Player">
                </div>
            </header>

            <div class="pattern">

                <div class="mobile-shadow"></div><!-- For 640 -->

                <div class="showcase-nav">
                    <div class="previous-showcase">
                        <a href="../howdini"><div class="showcase-btn" id="btn-prev">&larr; Previous</div></a>
                        <div class="showcase-btn-shadow"></div>
                    </div>
                    <div class="next-showcase">
                        <a href="../nationwide"><div class="showcase-btn" id="btn-next">Next &rarr;</div></a>
                        <div class="showcase-btn-shadow"></div>
                    </div>
                </div>

                <div class="showcase-thumbs">
                    <div class="first"><img src="../../images/sonycurtain1.jpg"/></div>
                </div>
            </div>
        </div>

        <!-- Case Study Description -->
        <section id="case-study">

            <div id="case-container">

                <h1>Working on Sony Projects</h1>

                <div id="case-study-sony">
                    <p>
                        During my time at <a href="http://touchstorm.com" title="Touchstorm">Touchstorm</a> I was involved in many Sony projects, our biggest client. One such project was a special video player to showcase a new series of videos produced with Nigel Barker to help promote and sell Sony digital cameras.
                    </p>
                    <p>
                        The codename of the player was Sony Curtain named for it’s functionality involved in displaying Sony’s playlist of videos. I came up with the design for the Flash player and developed it in Actionscript 3. This player and the interactive projects for <a href="http://leongaban.com/portfolio/komen/" title="I am the cure">iamthecure.org</a> were amoung my most favoriate works during my time as a Flash developer.
                    </p>
                </div><!-- #case-study-description -->

            </div><!-- case-container -->
            <div class="cleared"></div>

        </section>

        <!-- Technology Used -->
        <section id="technology">

            <h1>Technology and Services Provided for Client Sony</h1>

            <div id="case-container">

                <div id="skills">
                    <ul>
                        <li class="title">Code | Services</li>
                        <li>UI Design</li>
                        <li>HTML / CSS</li>
                        <li>Flash Actionscript 3</li>
                        <li>Ad Network / Brightcove integration</li>
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


<!-- jQuery -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

<!-- rollOver sounds -->
<script src="../../../js/audio.js"></script>

<!-- Google Analytics -->
<script src="../../../js/googleanalytics.js"></script>


</body>
</html>