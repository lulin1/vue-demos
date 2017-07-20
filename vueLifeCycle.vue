<template>
  <div id="app">
    {{a}}
  </div>
</template>

<script>
var myVue = new Vue({          
  el: "#app",          
  data: {
    a: "Vue.js"        
  },         
  beforeCreate: function() {        
    console.log("创建前")            
    console.log(this.a)            
    console.log(this.$el)          
  },         
  created: function() {
    console.log("创建之后");            
    console.log(this.a)            
    console.log(this.$el)          
  },         
  beforeMount: function() {            
    console.log("mount之前")            
    console.log(this.a)            
    console.log(this.$el)          
  },          
  mounted: function() {            
    console.log("mount之后")            
    console.log(this.a)            
    console.log(this.$el)          
  },          
  beforeUpdate: function() {            
    console.log("更新前");            
    console.log(this.a)            
    console.log(this.$el)          
  },          
  updated: function() {            
    console.log("更新完成");            
    console.log(this.a);            
    console.log(this.$el)          
  },          
  beforeDestroy: function() {            
    console.log("销毁前");            
    console.log(this.a)            
    console.log(this.$el)      
  },          
  destroyed: function() {           
    console.log("已销毁");          
    console.log(this.a)          
    console.log(this.$el)          
  }   
});  
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>