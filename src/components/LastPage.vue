<template>
    <footer class="app-footer">
        <nav class="app-footer__navigation">
            <ul class="app-footer__menu list--unstyled">
                <li class="app-footer__menu-item">
                    <a href="#" class="app-footer__menu-link">Home</a> 
                    <!-- <router-link to="/" class="app-footer__menu-link">Home</router-link> -->
                </li>

                <li class="app-footer__menu-item">
                    <router-link to="/header__hero" class="app-footer__menu-link">Who We Are</router-link>
                </li>

                <li class="app-footer__menu-item">
                    <!-- <a href="#" class="app-footer__menu-link">What We Build</a> -->
                    <router-link to="/WhatBuild" class="app-footer__menu-link">What We Build</router-link>
                </li>

                <li class="app-footer__menu-item">
                    <router-link to="/WeDo" class="app-footer__menu-link">What We Do</router-link>
                </li>

                <li class="app-footer__menu-item">
                    <router-link to="/career" class="app-footer__menu-link">Careers</router-link>
                </li>

            </ul>
        </nav>
        <div class="app-footer__brand"> 
            <a href="index.html"><img src="../assets/shift.png" class=" link link--image app-footer__logo logo navbar" /></a>
            <small class="app-footer__copyright">@2022 ShiftByte</small>
            <div class=" app-footer__media">
        <ul class="list-social-platform list-unstyled">
        <a href="#"> <li class="list-social-platform__link"><i class="fa fa-facebook-square fa-1x" aria-hidden="true"></i></li></a>
         <a href="#"><li class="list-social-platform__link"><i class="fa-brands fa-github fa-1x" aria-hidden="true"></i></li></a>
         <a href="#"><li class="list-social-platform__link"><i class="fa fa-whatsapp fa-1x" aria-hidden="true"></i></li></a>
          <a href="#"><li class="list-social-platform__link"><i class="fa fa-twitter-square fa-1x" aria-hidden="true"></i></li></a></ul>
      </div>
        </div>
       
      
   
    </footer>
   

    </template>
    
    <script>
    
    export default {
        name: "LastPage"
    }
    
    
    </script>
    
    <style>
    .app-footer {
        padding-right: 60px;
        padding-left: 60px;
        display: flex;
        flex-direction: row;
        padding-top: 2.5rem;
        color: white;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        background-color: #0f0033;
    }
    .app-footer__logo{
        margin: 0 100%;
    }

    .app-footer__copyright{
        margin: auto;
    }
    .app-footer__navigation{
        order: 2;
        text-align: left;
    }

    .list--unstyled {
        padding-left: 0;
        list-style: none;
        margin-bottom: 0;
       
    }

    .app-footer__menu-item {
        margin-right: 1.5rem;
        float: left;
        margin-bottom: 30%;

    }

    .app-footer__menu-link {
        display: block;
        color: white;
        font-weight: 700;
        font-size: 20px;
        text-decoration: none;
    }

    .app-footer__brand {
        align-items: flex-start;
        margin-top: 0;
        order: 1;
        display: flex;
        flex-direction: column; 
    }

.app-footer__media{
    align-items: center;
    height: 4rem;
    margin: 40px 0 ;
    order: 3;
    background-color: transparent;
    color: white;
}
.list-social-platform {
    display: flex;
    justify-content: flex-start;
}

.list-unstyled {
    padding-left: 0;
    list-style: none;
}

.list-social-platform__link {
    margin: 20px 10px;
}
    </style>