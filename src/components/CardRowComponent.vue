<script>
import CardData from '../assets/Data/CardData.json'

export default {
  data() {
    return {
      products: CardData
    }
  }
}
</script>

<template>
  <div>
    <p v-for="product in products" :key="product.id">{{ product.name }}</p>
  </div>
</template>
