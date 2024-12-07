<template>
  <div>
    <CardRowComponent />
  </div>
</template>
<script>
import CardRowComponent from '@/components/CardRowComponent.vue'
import productsData from '@/assets/Data/CardData.json'

export default {
  components: {
    CardRowComponent
  },
  data() {
    return {
      products: productsData
    }
  }
}
</script>
<style lang=""></style>
