<template>
  <div id="app">
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <sportmenu></sportmenu> -->
      <div>
        <!-- 5{{$router}} -->
        <div v-if='$route.path=="/"'>
          <img alt="Vue logo" src="./assets/logo.png">
          <router-link  to='/cupon'>Cupon</router-link>
        </div>
        
        <router-view ></router-view>
      </div>
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Sportmenu from './components/Sportmenu.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    // Sportmenu
  },

}
</script>

<style lang='scss'>
 @import "@/assets/style/_vars.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
       .menulist{
        max-width: 285px;
        text-align: left;

    }   
        .sports{
            border: solid 1px #000;
        }
        .show_hide{
            position: relative;
            
        
            &:before {
                cursor: pointer;
                content: "";
                width: 0;
                height: 0;
                position: absolute;
                top: 16px;
                right: 10px;
                border-top: 6px dashed;
                border-right: 5px solid transparent;
                border-left: 5px solid transparent;
            }

        &.showtree{
           

            &:before {
                border-top: 0;
                border-bottom: 6px dashed;
                border-right: 5px solid transparent;
                border-left: 5px solid transparent;
            }
        }
    }


        .show_hide{
            height: 40px;
            padding-left:10px;
            font-size: 12px;
            
        }
        .league_wrap{
            .show_hide{
                padding-left:20px;
                background-color: #98d2a2;
                
            }
        }
        .game_wrap{
            padding-left:30px;
        }

</style>
