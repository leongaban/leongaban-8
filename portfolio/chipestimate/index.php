<!DOCTYPE html>
<html>
<head>
    <title>The Chipestimate Showcase</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Showcase for Chipestimate.com on LeonGaban.com">
    <meta name="keywords" content="chipestimate, web development, web developer, portfolio">
    <meta name="author" content="Leon Gaban">

	<meta property="og:image" content="../../images/chipestimate1.jpg"/>
	<meta property="og:title" content="Chipestimate Showcase on LeonGaban.com"/>
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

    <div class="outer" id="showcase-chipestimate">
        <div class="inner">

            <header id="case-header">
                <?php include '../../includes/showcase-nav.php'; ?>

                <div id="case-h1h2">
                    <h1>The Chipestimate Showcase</h1>
                    <h2>Front-end development: HTML, CSS, jQuery, Responsive web design</h2>
                </div>

                <div id="view-more-button">
                    <input onclick="window.open('http://leongaban.com/portfolio/chipestimate/chipestimate.html')" class="view-more-button" type="submit" value="View Homepage">
                </div>
            </header>

            <div class="pattern">

                <div class="showcase-nav">
                    <div class="previous-showcase">
                        <a href="../whoat"><div class="showcase-btn" id="btn-prev">&larr; Previous</div></a>
                        <div class="showcase-btn-shadow"></div>
                    </div>
                    <div class="next-showcase">
                        <a href="../shabang"><div class="showcase-btn" id="btn-next">Next &rarr;</div></a>
                        <div class="showcase-btn-shadow"></div>
                    </div>
                </div>

                <div class="showcase-thumbs">
                    <div class="first"><img src="../../images/chipestimate1.jpg"/></div>
                    <div class="second"><img src="../../images/chipestimate2.jpg"/></div>
                    <div class="third"><img src="../../images/chipestimate3.jpg"/></div>
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
                    <h1>The Chipestimate Showcase</h1>
                    <h2>Front-end development: HTML, CSS, jQuery, Responsive web design</h2>
                </div>

                <div id="view-more-button">
                    <input onclick="window.open('http://leongaban.com/portfolio/chipestimate/chipestimate.html')" class="view-more-button" type="submit" value="View Homepage">
                </div>
            </header>

            <div class="pattern">
                <div class="mobile-shadow"></div><!-- For 640 -->
                
                <div class="showcase-nav">
                    <div class="previous-showcase">
                        <a href="../whoat"><div class="showcase-btn" id="btn-prev">&larr; Previous</div></a>
                        <div class="showcase-btn-shadow"></div>
                    </div>
                    <div class="next-showcase">
                        <a href="../shabang"><div class="showcase-btn" id="btn-next">Next &rarr;</div></a>
                        <div class="showcase-btn-shadow"></div>
                    </div>
                </div>

                <div class="showcase-thumbs">
                    <div class="first"><img src="../../images/chipestimate1.jpg"/></div>
                    <div class="second"><img src="../../images/chipestimate2.jpg"/></div>
                    <div class="third"><img src="../../images/chipestimate3.jpg"/></div>
                </div>
            </div>
        </div>

        

        <!-- Case Study Description -->
        <section id="case-study">

            <div id="case-container">

            <h1>Showcase, Responsive Design &amp; jQuery</h1>

            <div id="case-study-description">
                <p>
                    Chipestimate.com is a news site for the chip technology sector. Their requirements included revamping the design into a more modern layout and to be responsive while working on the majority of browsers. This project is still on going, I coded and developed the homepage. We used <a href="http://twitter.github.io/bootstrap/" title="Twitter bootstrap">Twitter bootstrap</a> at first, however I ended up coding all the media queries for the reponsive design by hand since the layout and requirements were a bit more complex then bootstrap could accomplish alone.
                </p>
                <p>
                    The site had to function on IE9, 8 and 7 so I coded seperate stylesheets for each browser. I also used jQuery to help move elements around for different layouts in 768, 640, 480 and 320 widths. Different columns had to be reponsitioned at certain sizes, and also the footer carousel has to accomodate for over 100 partner logos, so I used <a href="http://caroufredsel.dev7studios.com/" title="caroufredsel"/>caroufredsel</a> for the footer instead of the default Twitter bootstrap carousel (which was used for the header rotator).
                </p>
                <p>
                    This project is still in developement, but you can see a version of the homepage I coded <a href="http://leongaban.com/portfolio/chipestimate/chipestimate.html">here.</a>
                </p>
            </div><!-- #case-study-description -->

            <div id="case-study-extra">
                <a href="http://leongaban.com/portfolio/chipestimate/chipestimate.html" title="Chipestimate homepage" target="_blank"><img src="../../images/extra_chipestimate.jpg"/></a>
                <!-- <span>Chipestimate</span> -->
            </div>

            </div>
            <div class="cleared"></div>

        </section>

        <!-- Technology Used -->
        <section id="technology">

            <h1>Technology used on Chipestimate</h1>

            <div id="case-container">

                <div id="skills">
                    <ul>
                        <li class="title">Code</li>
                        <li>HTML 5</li>
                        <li>CSS 3</li>
                        <li>jQuery 1.9.1</li>
                    </ul>
                    <ul>
                        <li class="title">Software &amp; Frameworks</li>
                        <li>Photoshop</li>
                        <li>SublimeText 2</li>
                        <li>Twitter Bootstrap 2.3.1</li>
                        <li>CarouFredSel 6.2.1</li>
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