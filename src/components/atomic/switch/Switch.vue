<template>
  <div class="switch" @click="toggleSelected()" :class="{'switch-active': this.selected}">
    <div class="switch-dot" :class="{'switch-dot-active': this.selected}"></div>
  </div>
</template>

<script>
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
  }
}

</script>

<style scoped>
@import './switch.scss'
</style>
