<template>
  <button 
    class="sb-button"
    :class="{'sb-button-primary': !plain, 'sb-button-primary': plain}"
    @click="$emit('click', $event)">

     <slot />

  </button>
</template>

<script>
export default {
  name: 'sb-button',

  props:{
    plain: Boolean,
  }
}
</script>
