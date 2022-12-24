<template>
   <header>
    <!-- Navbar section -->
    <div id="navbar" class="navbar">

    <div id="navbar" class="navbar" >
        <div class="logo">
            <a href="index.html"><img src="../assets/shift.png" alt="page logo" /></a>
        </div>
        <ul>
            <li class="links home-page"><router-link to="/">Home</router-link></li> 
            <li class="links"><router-link to="/services">Services</router-link></li> 
            <li class="links"><router-link to="/partner">Partners</router-link></li>
            <li class="links"><router-link to="/inSight">Insight</router-link></li>
            <li class="links last-link"><router-link to="/career">Careers</router-link></li>
             <li class="links last-link"><router-link to="/company">About Us</router-link></li>
        </ul>
    </div>
    </div>
</header> 
</template>

<script>
// import DropDown from './components/DropDown.vue';
export default {
  name: 'NaviGation',
  // components: {
  //   DropDown
  // },
  // data () {
  //   return {
  //     about: [
  //       {
  //         title: 'Company',
  //         link: '#company'
  //       },
         
  //       {
  //         title: 'Career',
  //         link: '#career'
  //       },
  //       {
  //         title: 'History',
  //         link: '#history'
  //       }
  //     ]
  //   }
  // }
};
</script>

<style lang="scss" scoped>
#navigation {
  display: flex;
  width: 100%;
  height: auto;

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0 0 0 0;

    li {
      font-size: 2rem;
      padding: 2px 40px;
      cursor: pointer;

      &:hover {
        color: #7ca971;
      }
    }
  }

  .search {
    position: relative;
    width: 100%;
    max-width: 400px;

    input {
      border: none;
      outline: none;
      width: calc(100% - 80px);
      padding: 15px 60px 15px 20px;
      margin: 0;
      border-radius: 20px;
      background-color: #efefef;
      font-family: "Segoe UI", Tahoma;
      font-size: 1rem;
    }

    i {
      position: absolute;
      right: 20px;
      top: 15px;
      font-size: 1.6rem;
      color: #aaa;
      cursor: pointer;
    }
  }
}
</style>
