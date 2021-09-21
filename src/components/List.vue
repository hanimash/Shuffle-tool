<template>
  <div class="List">
    <p v-if="!List || List.length <= 0">
      لا توجد اي بيانات محفوظة. انتقل إلى الاعدادات وأضف بطاقات
    </p>
    <div v-if="List && List.length > 0">
      <b-button size="sm" @click="shuffle" class="m-2" variant="success"
        >خلط البطاقات</b-button
      >
      <b-button size="sm" @click="shuffle_color" class="m-2" variant="success"
        >تغيير الألوان</b-button
      >
      <b-button size="sm" @click="reset_cards" class="m-2" variant="danger">
        إخفاء الكل
      </b-button>
    </div>
    <h2>{{ activeClass }}</h2>

    <transition-group
      name="flip-list"
      tag="div"
      class="Items"
      v-if="List && List.length > 0 && show"
    >
      <Item
        v-for="(n, i) in List"
        :name="n"
        :color="colorArray[i]"
        :index="i + 1"
        :key="'Item_' + n"
        :reset="reset"
      />
    </transition-group>
  </div>
</template>

<script>
import _ from "lodash";
import Item from "./Item";
export default {
  name: "List",
  components: {
    Item,
  },
  data() {
    return {
      activeClass: "",
      show: true,
      List: [],
      reset: false,
      colorArray: [
        "#00B3E6",
        "#E6331A",
        "#B366CC",
        "#E666B3",
        "#CC9999",
        "#B3B31A",
        "#00E680",
        "#809980",
        "#996633",
        "#FF3380",
        "#E64D66",
        "#336633",
        "#993300",
        "#b51010",
        "#f56505",
        "#e6cd2c",
        "#65db2a",
        "#2ac6db",
        "#164ec7",
        "#7d16c7",
        "#27a2ba",
        "#780000",
      ],
    };
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {
      let ClassesList, activeClass;
      if (
        localStorage.getItem("ClassesList") &&
        localStorage.getItem("activeClass")
      ) {
        ClassesList = JSON.parse(localStorage.getItem("ClassesList"));
        activeClass = JSON.parse(localStorage.getItem("activeClass"));
        this.List = ClassesList.filter(
          (c) => c.className == activeClass
        )[0].list.split("\n");
        this.activeClass = activeClass;
      }
    },
    shuffle_color() {
      this.colorArray = _.shuffle(this.colorArray);
    },
    shuffle: function () {
      this.List = _.shuffle(this.List);
    },
    reset_cards() {
      this.reset = !this.reset;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.List {
  padding-top: 0px;
  text-align: right;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
}
.List h2 {
  text-align: center;
}
.List .Items {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 0;
}
.flip-list-move {
  transition: transform 0.5s;
}
</style>
