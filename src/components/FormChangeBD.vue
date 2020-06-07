<template lang='pug'>
  form.form-redact(v-on:submit.prevent='SubmitForm')
    .form-redact__column
      input.form-redact__preview(type='file' name='preview' id='preview' accept='image/jpeg' v-on:change='PreviewImage' required)
      label(for='preview' class='form-redact__label-preview')
    .form-redact__column
      input.form-redact__field(type='text' name='name' placeholder='Имя' required)
      input.form-redact__field(type='text' name='surname' placeholder='Фамилия' required)
      input.form-redact__field(type='date' name='birthDate' placeholder='ММ/ДД/ГГГГ' required)
      input.form-redact__field(type='text' name='position' placeholder='Должность' required)
      input.form-redact__field(type='checkbox' name='remoteWork' value='true')
    .form-redact__column
      input.form-redact__field(type='text' name='street' placeholder='Улица' required)
      input.form-redact__field(type='text' name='home' placeholder='Дом' required)
      input.form-redact__field(type='number' name='flat' placeholder='Квартира' required)
      input.form-redact__field(type='text' name='city' placeholder='Город' required)
      input.form-redact__field(type='submit')
    
</template>

<style lang='scss' scoped>
.form-redact {
  min-width: 300px;
  border: 1px solid black;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;

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
