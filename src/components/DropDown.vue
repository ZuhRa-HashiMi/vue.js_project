<template>
    <div class="menu-item" @click="isOpen = !isOpen">
      <a href="#">
        {{ title }}
      </a>
      <svg viewBox="0 0 1030 638" width="10">
        <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" ></path>
      </svg>
      <transition name="fade" appear>
        <div class="sub-menu" v-if="isOpen">
          <div v-for="(item, i) in items" :key="i" class="menu-item">
            <a :href="item.link">{{ item.title }}</a>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DropDown',
    props: ['title', 'items'],
    data () {
      return {
        isOpen: false
      }
    }
  }
  </script>
  
  <style>
.menu-item svg {
  width: 10px;
  margin-left: 10px;
}
.menu-item .sub-menu {
    position: absolute;
    top: 100%;
    box-shadow: 0 2px 29px rgb(0 0 0 / 5%);
    border-bottom: 3px solid #086ad8;
    background-color: #fff;
    width: max-content; 
    padding: 10px 10px;  
    transition: all .2s cubic-bezier(.645,.045,.355,1);
    transition-delay: .1s;
    transition-duration: .1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
  </style>