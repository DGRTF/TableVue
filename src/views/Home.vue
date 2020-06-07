<template lang="pug">
  div
    Form-change-bD(v-bind:path='addEmployeePath')
    div
      button(v-on:click='DeleteEmployee')='Удалить'
    Table(ref='table' :header="headerHTML" :countColumn="count" v-bind:contentLineArr="inDataArr")
</template>

<style src='./Home.scss' lang='scss'></style>

<script src='./Home.ts' lang='ts'></script>
