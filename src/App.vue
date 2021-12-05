<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body,
html {
  margin: 0;
  line-height: 1.3;
}
p {
  margin: 0;
}
a {
  color: $medium-grey;
}
button {
  cursor: pointer;
  border: none;
  margin: 0;
  padding: 0;
  transition: all 0.3s;

  &:hover {
    transition: all 0.3s;
  }

  &.btn-primary {
    color: white;
    background-color: $primary;
    border: 1px solid transparent;
    border-radius: 3px;

    &:hover {
      color: $primary;
      background-color: white;
      border: 1px solid $primary;
    }
  }
}
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $medium-grey;
}
.container {
  padding: 0 30px;
  max-width: 1160px;
  margin: auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
