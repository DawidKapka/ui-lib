<template>
  <div class="switch" @click="toggleSelected()" :class="{
    'switch-active': this.selected && this.theme === 'default',
     'switch-active-pn': this.selected && this.theme === 'positive-negative',
      'switch-pn': this.theme === 'positive-negative'}">
    <div class="switch-dot" :class="{
      'switch-dot-active': this.selected && this.theme === 'default',
       'switch-dot-active-pn': this.selected && this.theme === 'positive-negative',
        'switch-dot-pn': this.theme === 'positive-negative'}"></div>
  </div>
</template>

<script>
import { SwitchTheme } from './switch.types.ts'

export default {
  name: 'Switch',
  data() {
    return {
      selected: false
    }
  },
  methods: {
    toggleSelected() {
      this.selected = !this.selected;
      this.$emit('toggle', this.selected);
    }
  },
  props: {
    theme: SwitchTheme
  },
  mounted() {
    console.log(this.theme);
  }
}

</script>

<style scoped>
@import 'switch.scss'
</style>
