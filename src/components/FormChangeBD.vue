<template lang='pug'>
  .form-redact
    .form-redack__header='{{header}}'
      button.form-redack__close(v-on:click='Close')='Закрыть'
    form.form-redact__form(v-on:submit.prevent='SubmitForm' ref='fo')
      .form-redact__column
        input.form-redact__preview(type='file' name='preview' id='preview' accept='image/jpeg' v-on:change='PreviewImage')
        label(ref='labelImage' for='preview' class='form-redact__label-preview')
      .form-redact__column
        input.form-redact__field(type='text' name='name' placeholder='Имя' required :value='inTemplate.name')
        input.form-redact__field(type='text' name='surname' placeholder='Фамилия' required :value='inTemplate.surname')
        input.form-redact__field(type='date' name='birthDate' placeholder='ММ/ДД/ГГГГ' required :value='inTemplate.birthDate')
        input.form-redact__field(type='text' name='position' placeholder='Должность' required :value='inTemplate.position')
        input.form-redact__field(type='checkbox' name='remoteWork' value='true')
      .form-redact__column
        input.form-redact__field(type='text' name='street' placeholder='Улица' required :value='inTemplate.name')
        input.form-redact__field(type='text' name='home' placeholder='Дом' required :value='inTemplate.name')
        input.form-redact__field(type='number' name='flat' placeholder='Квартира' required )
        input.form-redact__field(type='text' name='city' placeholder='Город' required :value='inTemplate.name')
        input.form-redact__field(type='submit')
    
</template>

<style lang='scss' scoped>
.form-redact {
  display: inline-flex;
  flex-direction: column;
  border: 1px solid black;
  box-sizing: border-box;

  &__header {
    height: 20px;
  }

  &__form {
    min-width: 300px;
    border-top: 1px solid black;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__column {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }

  &__field {
    margin-bottom: 25px;
  }

  &__preview {
    display: none;
  }

  &__label-preview {
    border: 1px solid black;
    min-height: 200px;
    min-width: 200px;
    background-color: red;
    display: flex;
    background-size: auto 200px;
    // margin: 20px;
  }
}
</style>

<script src='./FormChangeBD.ts' lang='ts'></script>
