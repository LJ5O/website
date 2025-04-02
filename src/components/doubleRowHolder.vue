<template>
  <div class="doubleRowHolder">
    <slot></slot>
  </div>
</template>

<script setup>

</script>

<style scoped>
    .doubleRowHolder{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }
    .doubleRowHolder > *{
        min-width: 150px;
        flex-basis: 45%;
        flex: 1;
        max-width: 49%;
    }
</style>