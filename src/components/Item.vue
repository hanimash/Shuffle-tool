<template>
  <div :class="{ Item: true, show, 'flip-card': true }" @click="show = !show">
    <div class="flip-card-inner">
      <div class="flip-card-front" :style="{ backgroundColor: color }">
        {{ index }}
      </div>
      <div class="flip-card-back" :style="{ backgroundColor: color }">
        {{ name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    name: String,
    color: String,
    index: Number,
    reset: Boolean,
  },
  data() {
    return {
      show: false,
    };
  },
  watch: {
    reset(newValue, oldValue) {
      if (newValue != oldValue) this.show = false;
    },
  },
};
</script>

<style scoped>
.Item {
  width: 180px;
  height: 100px;
  text-align: center;
  margin: 10px;
  cursor: pointer;
}
.flip-card {
  background-color: transparent;
  width: 150px;
  height: 150px;
  perspective: 1000px;
  background-color: transparent;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card.show .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  border-radius: 10px;
}

.flip-card-front {
  color: rgba(255, 255, 255, 0.2);
  font-weight: 900;
  font-size: 3em;
}

.flip-card-back {
  background-color: #2980b9;
  color: #000;
  transform: rotateY(180deg);
}
/* .Item h1 {
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}
.Item.show h1 {
  opacity: 1;
} */
</style>
