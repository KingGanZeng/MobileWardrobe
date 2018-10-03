<template>
  <div class="app full-height">
    <h1 class="title">{{ message }}</h1>
    <router-link class="buttonLink" :to="{ name: 'DressUp' }">我的搭配<div class="skewX"></div></router-link>
    <router-link class="buttonLink" :to="{ name: 'wardrobe' }">我的衣橱<div class="skewX"></div></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'MobileWardrobe'
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.title {
  margin-bottom: 50px;
}

.buttonLink {
  display: inline-block;
  width: 100px;
  height: 50px;
  text-decoration: none;
  margin-left: 15px;
  margin-right: 35px;
  line-height: 50px;
  font-size: 18px;
  color: #ffffff;
}
.skewX {
  position: relative;
  top: -50px;
  left: -12px;
  background-image: linear-gradient(90deg,#FF4B31 4%,#FF7A31 100%);
  box-shadow: 0 2px 5px 0 rgba(237,84,61,.3);
  width: 100px;
  height: 50px;
  -webkit-transform: skewX(-20deg);
  transform: skewX(-20deg);
  z-index: -1;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  opacity: 1;
}
.buttonLink:hover .skewX {
  -webkit-transform: skewX(-20deg) scale(1.5, 2);
  transform: skewX(-20deg) scale(1.5, 2);
}
</style>
