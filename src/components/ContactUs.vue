<template>
  <div class="contactus" id="contact">
    <div class="container">
        <header>
            <h1>Contact Us</h1>
            <p>Let's Tlk about your website or project. Send us a meesage and we will be in touch within one business day.</p>
        </header>
        <div class="content">
            <div class="content-form">
                <section>
                    <i class="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                    <h2>address</h2>
                    <p>
                        Kabul<br>
                        Afghanistan<br>
                    </p>
                </section>

                <section>
                    <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
                    <h2>Phone</h2>
                    <p>+93(0)787629719</p>
                </section>

                <section>
                    <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                    <h2>E-mail</h2>
                    <p>zuhrahashimi2001@gmail.com</p>
                </section>
            </div>
        </div>

      <form>
        <div class="form">
            <div class="right">
              <div class="contact-form">
                  <input type="text" required>
                  <span>Full Name</span>
              </div>
  
              <div class="contact-form">
                  <input type="E-mail" required>
                  <span>E-mail Id</span>
              </div>
              <div class="contact-form">
                  <textarea name="text">
                    
                  </textarea>
                  <span> Type your Message....</span>
              </div>
  
              <div class="contact-form">
                  <input type="submit" name="submit">
              </div>
              </div>
            </div>
    </form>
        <div class="media">
        
          <a href="#"> <li><i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></li></a>
           <a href="#"><li><i class="fa-brands fa-github fa-2x" aria-hidden="true"></i></li></a>
           <a href="#"><li><i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i></li></a>
            <a href="#"><li><i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i></li></a>
        </div>
        <div class="empty"></div>
        </div>
  </div>

    
</template>

<script>
export default {
 
}
</script>

<style>

.contactus {
    background-color: #003366;
    width: 100%;
    height: 100vh;
    background-size: 100% 110vh;
    position: relative;
}

header{
    position: absolute;
    text-align: center;
    width: 75%;
    left: 12%;
    top: 2rem;
}
header h1{
  padding: 20px 18px; 
    margin-bottom: 0;
    text-align:center;
    font-family: 'Roboto', sans-serif, Myrid, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700;
    line-height: 1.5;
    color: white;
}
header p{
  vertical-align: middle;
  padding: 8px 18px; 
  color: white;
  text-align:center;
  margin-bottom: 40px;
  font-weight: 400;
  line-height: 1.4;
  font-family: 'Roboto', sans-serif, Myrid, "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.empty{
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    top: 0px;
    left: 0;
    z-index: -1;
}

.content{
    display: flex;
    min-height: 110vh;
}
.content section{
    margin-top: 10vh;
    margin-left: 20vh;
}
.content-form{
    margin-top: 7rem;
}

.content-form h2 {
  color: white;
  font-family: 'Roboto', sans-serif, Myrid, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
}
.content-form p {
  color: white;
  font-family: 'Roboto', sans-serif, Myrid, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 15px;
}

.form{
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 50%;
    justify-content: center;
    align-items: center;
    min-height: 110vh;
}

.form .contact-form input{
    width: 30rem;
    background-color: transparent;
    border: 0px;
    border: transparent;
    margin: 20px;
    padding: 10px;
    font-size: 18px;
    border-bottom: 2px solid #fff;
}
.form .contact-form input ~ span{
    position: absolute;
    left: 20px;
    transition: 0.10s ease-in-out;
    margin-top: 10px;
    color: white;
}
.form .contact-form input:focus ~span{
    transform: translateY(-20px);
    pointer-events: none;
}
.form .contact-form textarea{
    width: 30rem;
    border: 0px;
    background-color: transparent;
    margin: 20px;
    font-size: 17px;
    border-bottom: 2px solid white;
   
}
.form .contact-form textarea ~ span
{
    position: absolute;
    left: 20px;
    margin-top: 10px;
    transition: 0.10s ease-in-out;
    color: white;
}
.form .contact-form textarea:focus ~span{
    transform: translateY(-20px);
    pointer-events: none;
}
.form .contact-form input[type=submit]{
    background-color: white;
    color: #003366;
    position:flex;
    font-size: 18px;
    padding: 10px;
    text-align: center;
    border: none; 
    font-family: 'Roboto', sans-serif, Myrid, "Helvetica Neue", Helvetica, Arial, sans-serif;
    width: 50%;
    height: 40px;
    margin-top: -5px; 
}
.form .contact-form input[type=submit]:hover{
    background-color: #003366;
    color: white;
    position:flex;
    font-size: 18px;
    padding: 10px;
    text-align: center;
    border: none; 
    font-family: 'Roboto', sans-serif, Myrid, "Helvetica Neue", Helvetica, Arial, sans-serif;
    width: 50%;
    height: 40px;
    margin-top: -5px;
    box-shadow: 0 0 10px whitesmoke;
}
.media{
    position: absolute;
    top: 85vh;
    right: 50vh;
    display: flex;
    list-style: none;
}
.media li{
    margin: 20px 30px;
}
</style>

