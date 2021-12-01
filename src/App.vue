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
</style>
