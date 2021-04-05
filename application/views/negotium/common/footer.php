<!-- Footer Start -->
<section class="footer homeFooter boxs">
        <div class="footerCurve">
            <span></span>
        </div>
        <div class="footerBg">
            <img src="<?php echo base_url('public/front/img/footerBg.png');?>" alt="footer-background" class="img-fluid" />
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-8">
                    <div class="footerall boxs">
                        <div class="footmiddle boxs">
                            <div class="footmidArea">
                                <h4 class="contentHeading">Point of Sale</h4>
                                <ul>
                                    <li><a href="#">Card Machines</a></li>
                                    <li><a href="#">Virtual Payments</a></li>
                                    <li><a href="#">Online</a></li>
                                    <li><a href="#">EPOS Systems</a></li>
                                </ul>
                            </div>
                            <div class="footmidArea">
                                <h4 class="contentHeading">Finance</h4>
                                <ul>
                                    <li><a href="#">Cash Advance</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="footmiddle boxs">
                            <div class="footmidArea">
                                <h4 class="contentHeading">Utilities</h4>
                                <ul>
                                    <li><a href="#">Gas</a></li>
                                    <li><a href="#">Electricity</a></li>
                                    <li><a href="#">Water</a></li>
                                </ul>
                            </div>
                            <div class="footmidArea">
                                <h4 class="contentHeading">Voice & Data</h4>
                                <ul>
                                    <li><a href="#">Phone Systems</a></li>
                                    <li><a href="#">Mobile Phones</a></li>
                                    <li><a href="#">Connectivity</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="footmiddle boxs">
                            <div class="footmidArea">
                                <h4 class="contentHeading">Company</h4>
                                <ul>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="javascript:void(0)" data-target="#feedbackModal" data-toggle="modal">Feedback</a></li>
                                    <li><a href="become-partner.html">Become a Partner</a></li>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="joinMailSec boxs">
                        <h3>Join our mail list </h3>
                        <form class="joinmailform boxs">
                            <div class="form-group joingroup footerForm">
                                <input type="text" placeholder="Enter email" />
                                <button type="submit" class="btnStyle btnStyleRed2">Sign up</button>
                            </div>
                        </form>
                        <p class="fontSize12 footerContent">We respect your privacy and will not rent or sell your details to any outside company. If you
                            would like to know how Negotium manages the information you give us please see our 
                            <a class="privacyLink" href="privacy.html">privacy policy</a>.</p>
                        <ul class="footerSocial boxs">
                            <li>
                                <a href="javascript:void(0)">
                                    <span><i class="fab fa-facebook-f"></i></span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <span><i class="fab fa-linkedin-in"></i></span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <span><i class="fab fa-instagram"></i></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        <div class="footerBottomMain boxs">
            <div class="container">
                <div class="footerBtm boxs">
                    <div class="footleft ">
                        <div class="footerLogo boxs">
                            <a class="footLogo" href="index.html"><img src="<?php echo base_url('public/front/img/footerLogo.png');?>" class="img-fluid"
                                    alt="logo"></a>
                        </div>
                    </div>
                    <div class="copyRight">
                        <p>© Copyright: <?php echo date('Y');?> Negotium /All Rights Reserved</p>
                    </div>
                    <div class="footmidArea footBtmmenu">
                        <ul>
                            <li><a href="terms.html">Terms of Use </a></li>
                            <li><a href="privacy.html">Privacy Policy</a></li>
                            <li><a href="cookie-policy.html">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <!-- Footer End -->

    <!-- Feedback Modal Start -->
    <div id="feedbackModal" class="modal fade feedbackModal" role="dialog">
        <span class="closeBtn"><button type="button" class="close"
            data-dismiss="modal"><img src="<?php echo base_url('public/front/img/close.svg');?>" alt="close icon" class="img-fluid"></button></span>
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body boxs">
                    
                    <div class="feedbackForm solFormBox boxs">
                        <h2 class="fontSize54 modalHeading boxs">We’re listening. <br>We care what you think. </h2>
                        <span class="fontSize27 modalContent boxs">Drop us a line with any feedback, <br>it’s how we improve.</span>
                        <form class="formStyle" action="<?php echo base_url('addFeedback');?>" id="common-form" method="post">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="formRight boxs">
                                        <div class="form-group messageBox boxs">
                                            <textarea id="message" rows="4" name="feedback" id="feedback" class="form-control" placeholder="What can we improve?"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="formLeft boxs">
                                        <div class="form-group boxs">
                                            <input type="text" id="name" name="name" class="form-control" placeholder="Your Name">
                                        </div>
                                        <div class="form-group boxs">
                                            <input type="email" id="emailAddr" name="emailAddr" class="form-control" placeholder="Enter Email Address">
                                        </div>
                                        <div class="form-group boxs">
                                            <input type="text" id="company" id="company" name="company" class="form-control" placeholder="Company">
                                        </div>
                                        <div class="form-group customCheck boxs">
                                            <input type="checkbox" id="storePermission" name="storePermission">
                                            <label for="storePermission">Yes, I give permission to store and process my data</label>
                                        </div>
                                        <div class="boxs form-group g-recaptcha" data-sitekey="6LcGr5QaAAAAAIjsRq0XWD0fH7gZEJpc8c4Wa-v3"></div>
                                        <div class="formBtn boxs">
                                            <button type="submit" class="btnStyle" type="button">Send Feedback</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="formNote formNote2 boxs">
                                <h4 class="fontSize15 boxs regularFont">We respect your privacy and will not rent or sell your details to
                                    any outside company. If you would like to know how Negotium manages the information you give us please
                                    see our privacy policy.</h4>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Feedback Modal End -->

    <!-- Cookies Start  -->
    <div class="cookiesSec container">
        <div class="cookiesSecInner boxs">
            <div class="cookieLeft boxs">
                <p><b>We use cookies</b> We may place these for analysis of our visitor data, to improve our website,
                    and to give you a great website experience. For more information about the cookies we use open the
                    settings.</p>
            </div>
            <div class="cookieRight">
                <ul>
                    <li><a href="cookie-policy.html" class="btnStyle btnStyWhiteBG">More information</a></li>
                    <li><a href="javascript:void(0)" class="btnStyle btnStyPinkBg" onclick="addCookie()">Agree</a></li>
                </ul>
            </div>
        </div>
    </div>
    <!-- Cookies ENd  -->
    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="<?php echo base_url('public/front/js/event.js');?>"></script>

    <script src="<?php echo base_url('public/front/js/jquery.js');?>"></script>
    <script src="<?php echo base_url('public/front/js/bootstrap.min.js');?>"></script>
    <script src="<?php echo base_url('public/front/js/slick.js');?>"></script>
    <script src="https://www.google.com/recaptcha/api.js"></script>
    <script src="<?php echo base_url('public/front/js/custom.js');?>"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>
    <script>
        let addCookie = () => {
            $.cookie("negotium website cookie stored",
                "It is the data of the cookie");
            $(".cookiesSec").addClass("cookieActive");
        }
    </script>
</body>