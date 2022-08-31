<template>
    <button class="button">{{this.label}}</button>
</template>

<script>
import {ButtonSize} from './button-args.type.ts'

export default {
  data() {
    return {
    }
  },
  props: {
    label: ButtonSize
  },
  computed: {
    cssVars() {
      return {
        '--size': mapToSize(this.size)
      }
    }
  }
}
</script>
<style>
@import 'button.scss';
</style>
