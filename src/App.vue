<template>
  <div id="app">
    <b-navbar type="dark" variant="dark" class="py-0 px-2">
      <b-navbar-nav>
        <b-nav-item
          @click="() => (this.ActiveTap = 'ShowList')"
          :active="this.ActiveTap == 'ShowList'"
        >
          <b-icon icon="shop"></b-icon>
        </b-nav-item>
        <b-nav-item
          @click="() => (this.ActiveTap = 'ShowSetting')"
          :active="this.ActiveTap == 'ShowSetting'"
          ><b-icon icon="gear"></b-icon
        ></b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <List v-if="ActiveTap == 'ShowList'" />
    <Setting v-if="ActiveTap == 'ShowSetting'" />
    <p id="r_text">Hani AlMashkawi | hani.mashkawi@gmail.com | +491627344810</p>
  </div>
</template>

<script>
import List from "./components/List.vue";
import Setting from "./components/Setting.vue";

export default {
  name: "App",
  components: {
    List,
    Setting,
  },
  data() {
    return {
      ActiveTap: "ShowList",
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic&display=swap");
#app {
  font-family: "Noto Kufi Arabic", sans-serif;
  direction: rtl;
}
* {
  margin: 0;
  padding: 0;
}
#r_text {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: left;
  color: #ccc;
  background: #000;
  margin: 0;
  padding: 0;
  font-size: 10px;
}
</style>
