document.write(
"	<div class='footer'>" +
"		<div class='container'>" +
"		<div class='row-fluid'>" +
"		<div class='span4'>" +
"           <div class='headline'><h3>Contact Us</h3></div>" +
"		<form action='http://kravmagact.herokuapp.com/getFormData' method='post'>" +
"           <label>Name</label>" +
"                <input type='text' class='span7 border-radius-none' />" +
"                <label>Email<span class='color-red'>*</span></label>" +
"                <input type='text' class='span border-radius-none' />" +
"                <label>Phone Number</label>" +
"                <input type='text' class='span border-radius-none' />" +
"				<input type='checkbox' />" +
"				I am interested in a free trial." +
"                <label>Message</label>" +
"                <textarea rows='4' class='span12'></textarea>" +
"                <p><button type='submit' class='btn-u'>Send Message</button></p>" +
"            </form>" +
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
"       		 	<!-- Contacts -->" +
"			           <div class='headline'><h3>Contacts</h3></div>" +
"			           <ul class='unstyled who margin-bottom-20'>" +
"                		<li><a href='#'><i class='icon-home'></i>3 Simm Lane Newtown CT</a></li>" +
"                		<li><a href='#'><i class='icon-envelope-alt'></i>cannonridgetc@gmail.com</a></li>" +
"                		<li><a href='#'><i class='icon-phone-sign'></i>203.307.5728</a></li>" +
"						<li><a href='#'><i class='icon-facebook'></i>  fb.com/chris</a></li>" +
"          		  </ul>" +
" 					<img src='assets/img/sandyhook.png' alt='' /></a>" +
"                </div>" +
"			</div><!--/span4-->" +
"	        <!-- Blog Latest Tweets -->" +
"            <div class='blog-twitter span4'>" +
"               <a class='twitter-timeline'  href='https://twitter.com/CannonRidgeTC'  data-widget-id='375080039445823488'>Tweets by @CannonRidgeTC</a>" +
"		</div>" +
"		</div><!--/row-fluid-->	" +
"	</div><!--/container-->	" +
"</div><!--/footer-->"
);
<!--=== End Footer ===-->