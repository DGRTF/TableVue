<template lang="pug">
  div
    Table(ref='table' :countColumn="count" v-bind:contentLineArr="inDataArr")
</template>

<script src='./Home.ts' lang='ts'></script>