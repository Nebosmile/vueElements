<template>
  <button 
    class="sb-button"
    :class="{'sb-button-primary': !plain, 'sb-button-primary': plain}"
    @click="check">

     <slot />

  </button>
</template>

<script>
export default {
  name: 'sb-button',

  props:{
    plain: Boolean,
  },
  methods:{
    check(){
      if(this.plain){
        this.$emit('click')
      }
      return
    }
  }
}
</script>
<style lang='scss'>
  @import "@/assets/style/_vars.scss";
  @import "./_sb-button.scss";
</style>

