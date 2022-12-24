<template>
  <div id="navigation-mobile">
    <ul>
            <li class="links home-page"><a href="index.html">Home</a></li>
            <li class="links"><a href="#services">Services</a></li> 
            <li class="links"><a href="#partner">Partners</a></li>
            <li class="links"><a href="#">Insights</a></li>
            <li class="links last-link"><a href="#career">Career</a></li>
            <li><DropDown title="About Us" :items="about" /></li> 
        </ul>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
#navigation-mobile {
  padding: 20px 0 0 0;

  a {
    text-decoration: none;
    color:  #003366; ;
  }

  ul {
    list-style: none;
    width: 200px;
    padding-left: 20px;

    li {
      font-size: 1.9rem;
      font-weight: bold;
      margin-bottom: 20px;
      cursor: pointer;

      &:hover {
        color: brown; 
        text-decoration: underline;

      }
    }
  }
}
</style>
