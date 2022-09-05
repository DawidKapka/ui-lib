<template>
    <button class="button"
            :class="this.styleObj"
            @click="emitClick"
    >{{this.label}}</button>
</template>

<script>
import {ButtonSize, ButtonColor} from './button-args.type.ts';

export default {
  name: 'Button',
  data() {
    return {
      styleObj: {
        'mini': this.size === 'mini',
        'small': this.size === 'small',
        'medium': this.size === 'medium',
        'large': this.size === 'large',
        'primary': this.color === 'primary',
        'secondary': this.color === 'secondary',
        'positive': this.color === 'positive',
        'negative': this.color === 'negative'
      }
    }
  },
  props: {
    label: {type: String},
    size: {type: ButtonSize},
    color: {type: ButtonColor}
  },
  methods: {
    emitClick() {
      this.$emit('click');
    }
  },
}
</script>
<style scoped>
@import 'button.scss';
</style>
