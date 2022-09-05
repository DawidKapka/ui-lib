<template>
 <div class="card-wrapper">
   <div class="cards">
     <div class="text-card">
        <div class="content">
            <p class="title">{{ this.title }}</p>
            <p class="text">{{ this.text }}</p>
        </div>
     </div>
     <div class="image-card" :style="{'background-image': `url(${this.imgUrl})`}"></div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {

    }
  },
  props: {
    title: {type: String},
    text: {type: String},
    imgUrl: {type: String}
  }
}

</script>

<style scoped>
@import 'card.scss'
</style>
