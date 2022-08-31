<template>
    <button class="button" @click="click">{{this.label}}</button>
</template>

<script>
import {ButtonSize} from './button-args.type.ts';

export default {
  data() {
    return {
    }
  },
  props: {
    label: String,
    size: ButtonSize
  },
  computed: {
    cssVars() {
      return {
        '--size': mapToSize(this.size)
      }
    }
  },
  methods: {
    click() {
      console.log(this.size)
    }
  }
}
</script>
<style>
@import 'button.scss';
</style>
