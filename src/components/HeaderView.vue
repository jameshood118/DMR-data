<template>
<h2>{{ message }}</h2>
</template>


<script>
export default {
  name: 'HeaderView',
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
