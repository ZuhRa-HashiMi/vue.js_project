<template>
   
            
            <!-- team details area start -->
            <section class="team__details pt-120 pb-90" >
                <div class="container">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4">
                            <div class="team__sidebar">
                                <div class="team__item mb-30">
                                    <div class="team__thumb w-img fix p-relative">
                                        <img class="transition-3" src="../assets/team-1.jpg" alt="team-1">
                                    </div>
                                    <div class="team__content text-center white-bg transition-3">
                                        <div class="team__name">
                                            <h3><a href="team-details.html">Zuhra Hashimi</a></h3>
                                            <span>Froontend Developer</span>
                                        </div>
                                        <div class="team__info">
                                            <p><a href="mailto:zuhrahashimi2001@gmail.com">zuhrahashimi2001@gmail.com</a></p>
                                      <p><a href="tel:+93(0)787629719">+93(0)787629719</a></p>
                                            <div class="team__social_team-2 social_team transition-3 mt-20">
                                                <ul>
                                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="team__member-list grey-bg-3">
                                   
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-8 col-lg-8">
                            <div class="team__details-wrapper">
                                <div class="team__details-item mb-30">
                                    <div class="team__details-title">
                                        <h2>Personal Biography</h2>
                                    </div>
                                    <div class="team__details-content">
                                        <div class="team__biography">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel dolorem, enim incidunt reprehenderit omnis consequatur provident atque consequuntur quos quod aspernatur, necessitatibus quis. Natus adipisci fuga cum rerum dolores.</p>
                                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel dolorem, enim incidunt reprehenderit omnis consequatur provident atque consequuntur quos quod aspernatur, necessitatibus quis. Natus adipisci fuga cum rerum dolores.
                                       </div>
                                    </div>
                                </div>
                                <div class="team__details-item mb-30">
                                    <div class="team__details-title mb-25">
                                        <h2>My Experience</h2>
                                    </div>
                                    <div class="team__details-content">
                                        <div class="team__experience">
                                            <div class="team__experience-item mb-20">
                                                <h2>ACCA Institute</h2>
                                                <div class="team__experience-meta">
                                                    <span>2008</span>
                                                    <span>2012</span>
                                                </div>
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe maxime illum animi facere, aliquam labore nihil corporis explicabo ex corrupti temporibus nobis rerum quam placeat doloribus blanditiis excepturi fugiat reiciendis?</p>
                                            </div>
                                            <div class="team__experience-item mb-20">
                                                <h2>Qamer Company</h2>
                                                <div class="team__experience-meta">
                                                    <span>2012</span>
                                                    <span>2017</span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quidem facilis veritatis iure temporibus at delectus dolore eveniet in laborum omnis nostrum enim voluptatem dolores, illo possimus illum mollitia aspernatur?</p>
                                            </div>
                                            <div class="team__experience-item mb-20">
                                                <h2>Kabul University</h2>
                                                <div class="team__experience-meta">
                                                    <span>2008</span>
                                                    <span>2012</span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt blanditiis eos dolorem et exercitationem consequuntur ipsa hic quisquam inventore illum porro obcaecati corporis maxime eligendi enim, perspiciatis delectus quibusdam incidunt?</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                            </section>
            <!-- team details area end -->


</template>

<script>
export default {
  name: "jumBotron",
  data() {
    return {
        layout: 'contactus'
    }
  }
}

</script>
<style>

.team__social_team-2 ul li a {
  background: #ffffff;
  border: 1px solid #dfe3e2;
} 
.team__social_team-2 ul li a:hover {
  background-color: #003366 ;
  color: white;
  border-color: white;
}

.team__details-title {
    padding-top: 10%;
}
.team__details-title h2 {
  padding-bottom: 32px;
  border-bottom: 1px solid #e0e4e4;
  margin-bottom: 0;
  position: relative;
  font-size: 30px;
}
.team__details-title h2::before {
  position: absolute;
  content: "";
  left: 0;
  bottom: -2px;
  width: 80px;
  height: 3px;
  background-color:  #003366 ;;
} 
.team__experience-item h2 {
  font-size: 24px;
  margin-bottom: 15px;
}
.team__experience-item .team__experience-meta span {
  position: relative;
  display: inline-block;
  padding-right: 12px;
  margin-right: 1px;
}

.team__contact p {
  margin-bottom: 24px;

}

.team__biography {
    padding-top: 5%;
}

/* .team__experience-item .team__experience-meta span::before {
    position: absolute;
    content: "";
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 1px;
    background: #848b8a;
} */

/*----------------------------------------*/
/*  RESPONSIVE CSS START 
/*----------------------------------------*/


/* Medium devices 768 - 991 */
@media only screen and (min-width: 768px) and (max-width: 991px) {

  /* team area start */
  .team__details-wrapper {
    margin-top: 60px;
  }

  .team__content.team__content-details {
    padding: 25px 15px;
  }

  .team__social_team-2.team__details-social_team_team ul li {
    margin-bottom: 10px;
  }

}
/* Small devices 576 - 767 */
@media only screen and (min-width: 576px) and (max-width: 767px) {

  /* team area start */
  .team__details-wrapper {
    margin-top: 60px;
  }
}

</style>