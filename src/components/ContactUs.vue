<template>

  <main id="main">
    <!-- ======= Contact Us Section ======= -->
    <section id="contact" class="contact contactUs">
      <div class="container">
        <div class="section-title">
            <h2>Contact Us</h2>
        </div>
        <div class="row justify-content-center">

          <div class="col-lg-10">

            <div class="info-wrap">
              <div class="row">
                <div class="col-lg-4 info">
                    <i class="fa fa-map-marker"></i>
                  <h4>Location:</h4>
                  <p>Kabul, Afghanistan</p>
                </div>

                <div class="col-lg-4 info mt-4 mt-lg-0">
                    <i class="fa-regular fa-envelope"></i>
                  <h4>Email:</h4>
                  <p><a href="mailto:info@shiftbyte.tech">info@shiftbyte.tech</a></p>
                </div>

                <div class="col-lg-4 info mt-4 mt-lg-0">
                    <i class="fa-solid fa-headset"></i>
                  <h4>Call:</h4>
                  <p><a href="tel:+93 74 753 3455">+93 74 753 3455</a></p>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div class="row justify-content-center">
          <div class="col-lg-10">
            <form class="email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section><!-- End Contact Us Section -->
     <!--map------------------->
	
	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1701.5252574812218!2d74.31603229143637!3d31.46779655679461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391906abd2d8f2db%3A0x2d4bd93a1eb25b41!2sArfa%20Technologies!5e0!3m2!1sen!2s!4v1596774150754!5m2!1sen!2s" width="1000" height="600" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>	

  </main><!-- End #main -->
</template>

<script>
export default {
 
}
</script>

<style>
.contactUs {
  background: url("https://wallpaperaccess.com/full/1428482.jpg") top center no-repeat;
  color: #fff;
  padding: 10% 10%; 
  transition: opacity 0.2s ease;
  width: 100%;
  content: ' ';
  z-index: 2;
  backface-visibility: hidden;
  background-position: 50% 0;
  background-size: cover; 
  background-attachment: fixed;  
  height: auto;
  overflow-x: hidden;
  overflow-y: hidden; 
  vertical-align: middle; 
  display: block;
  position: relative; 
  opacity: 0.9;
} 

@media (min-width: 1024px) {
.contactUs{
    background-attachment: fixed;
  }
}

#main {
  position: relative;
}

.section-title {
  text-align: center;
  padding-bottom: 15px;
}

.section-title h2 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  position: relative;
}

.section-title p {
  margin-bottom: 0;
}

/*--------------------------------------------------------------
# Contact Us
--------------------------------------------------------------*/

.contact .info-wrap {
  background: rgba(255, 255, 255, 0.06);
  padding: 30px;
}
.contact .info-wrap a {
  color: #fff;
}

.contact .info i {
  font-size: 20px;
  color: #fff;
  float: left;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
}

.contact .info h4 {
  padding: 0 0 0 60px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
}

.contact .info p {
  padding: 0 0 10px 60px;
  margin-bottom: 20px;
  font-size: 14px;
}

.contact .info .email p {
  padding-top: 5px;
}

.contact .info .social-links {
  padding-left: 60px;
}

.contact .info .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #333;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
  margin-right: 10px;
}

.contact .email-form {
  width: 100%;
  padding: 30px;
  padding-top: 0;
  background: rgba(255, 255, 255, 0.06);
}

.contact .email-form .form-group {
  padding-bottom: 8px;
}

.contact .email-form input,
.contact .email-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
}

.contact .email-form input::-moz-placeholder,
.contact .email-form textarea::-moz-placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.contact .email-form input::placeholder,
.contact .email-form textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.contact .email-form input {
  height: 44px;
}

.contact .email-form textarea {
  padding: 10px 12px;
}

.contact .email-form button[type=submit] {
  background: #9e42a7;
  border: 0;
  padding: 10px 24px;
  color: #fff;
  transition: 0.4s;
}

.contact .email-form button[type=submit]:hover {
  background: #a86565;
}


iframe {
    width: 100%;
    height: 500px;
    box-shadow: 2px 2px 30px rgba(0,0,0,0.2);
	border: 2px solid #FFFFFF;
    /* filter: invert(100%); */

}


</style>

