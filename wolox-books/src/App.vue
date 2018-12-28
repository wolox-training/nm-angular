<template lang="pug">
  #app
    router-view
</template>

<style lang="scss">
@import 'scss/aplication.scss';

.container {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.form-container {
  background-color: $light-gray;
  border-top: 5px solid $blue-wolox;
  display: flex;
  flex-direction: column;
  margin: 50px 0;
  max-width: 400px;
  width: 100%;
}

.wolox-image {
  align-items: center;
  display: flex;
  margin: auto;
}

.input-container {
  padding: 20px;
}

.input-label {
  padding-left: 10px;
}

.input-field {
  border: 0;
  border-radius: 8px;
  height: 30px;
  margin-top: 10px;
  max-width: 350px;
  padding: 0 10px;
  width: 100%;
}

.grey-button {
  background-color: $light-gray;
  border: 2px solid $green-wolox;
  border-radius: 8px;
  color: $green-wolox;
  font-size: 18px;
  height: 60px;
  margin: 20px;
  max-width: 350px;
  width: 100%;
}

.green-button {
  background-color: $green-wolox;
  border: 2px solid $green-wolox;
  border-radius: 8px;
  color: $white;
  font-size: 18px;
  height: 60px;
  margin: 20px;
  max-width: 350px;
  width: 100%;
}

.errorMessage {
  padding: 5px 10px 0;
}
</style>
