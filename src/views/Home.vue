<template lang="pug">
  div
    Form-change-bD(:path='addEmployeePath' :inTemplate='addEmployee' header='Добавить Работника' v-show='visibleAddEmployee' v-on:close='CloseAdd' v-on:send='SendAdd')
    Form-change-bD(:path='editEmployeePath' :inTemplate='editEmployee' header='Редактировать Работника' v-show='visibleEditEmployee' v-on:close='CloseEdit' v-on:send='SendEdit')
    div(v-show='visibleTable')
      button(v-on:click='DeleteEmployee')='Удалить'
      button(v-on:click='EditEmployee')='Редактировать'
      button(v-on:click='AddEmployee')='Добавить'
    Table(ref='table' :header="headerHTML" :countColumn="count" :contentLineArr="inDataArr")
</template>

<style src='./Home.scss' lang='scss'></style>

<script src='./Home.ts' lang='ts'></script>
