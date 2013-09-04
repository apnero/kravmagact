document.write(
"	<div class='footer'>" +
"		<div class='container'>" +
"		<div class='row-fluid'>" +
"		<div class='span4'>" +
"           <div class='headline'><h3>Contact Us</h3></div>" +
"		<form id='myForm' action='/echo/html/' method='post'>" +
"	<fieldset>" +
"		<ul>" +
"			<li><input type='text' name='name' class='required' title='Name' /></li>" +
"			<li><input type='text' name='phone' title='Phone' /></li>" +
"			<li><textarea id='myMessage' name='message' class='required' title='Message' rows='5' cols='30'></textarea></li>" +
"		<li>" +
"				<label>Would you like to &lt;something&gt;?</label>" +
"				<input type='radio' id='news_y' name='newsletter' />" +
"				<label for='news_y'>Yes</label>" +
"				<input type='radio' id='news_n' name='newsletter' class='validate-one-required' />" +
"				<label for='news_n'>No</label>" +
"			</li>" +
"		</ul>" +
"		<div><input type='submit' value='Send' /></div>" +
"	</fieldset>" +
"	<div id='myResult'></div>" +
"</form>" +
"        </div><!--/span4-->" +			
"			<div class='span4'>" +
"                <div class='posts'>" +
"                    <div class='headline'><h3>Latest News</h3></div>" +
"                    <dl class='dl-horizontal'>" +
"                        <dt><a href='#'><img src='assets/img/sliders/elastislide/6.jpg' alt='' /></a></dt>" +
"                        <dd>" +
"                            <p><a href='#'>Ladies Night in September.  Bring a friend.</a></p>" +
"                        </dd>" +
"                    </dl>" +
"                    <dl class='dl-horizontal'>" +
"                    <dt><a href='#'><img src='assets/img/sliders/elastislide/10.jpg' alt='' /></a></dt>" +
"                        <dd>" +
"                            <p><a href='#'>We are painting the studio in September.</a></p>" +
"                        </dd>" +
"                    </dl>" +
"                    <dl class='dl-horizontal'>" +
"                    <dt><a href='#'><img src='assets/img/sliders/elastislide/11.jpg' alt='' /></a></dt>" +
"                        <dd>" +
"                            <p><a href='#'>Anim moon officiamplate</a></p>" + 
"                        </dd>" +
"                    </dl>" +
"                </div>" +
"			</div><!--/span4-->" +
"	        <!-- Blog Latest Tweets -->" +
"            <div class='blog-twitter span4'>" +
"            	<a class='twitter-timeline'  href='https://twitter.com/CannonRidgeTC'  data-widget-id='375080039445823488'>Tweets by @CannonRidgeTC</a>" +
"		</div>" +
"		</div><!--/row-fluid-->	" +
"	</div><!--/container-->	" +
"</div><!--/footer-->"
);
<!--=== End Footer ===-->