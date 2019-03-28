<template>
  <div class="footer-menu">
    <button class="item" @click="teste()">
      <i class="material-icons">map</i>
    </button>
    <div class="separator"></div>
    <button class="item" @click="teste()">
      <i class="material-icons">format_list_bulleted</i>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    teste() {
      alert("Aeee!");
    }
  }
};
</script>

<style>
.footer-menu {
  background-color: #333;
  width: 100%;
  height: 10vh;
  color: white;
  display: flex;
  align-items: center;
  bottom: 0px;
  position: fixed;
  justify-content: space-around;
}

.item {
  all: unset;
  overflow: hidden;
  height: 100%;
  flex-grow: 1;
  text-align: center;
}

.separator {
  border: #aaa solid;
  border-width: 0 0 0 2px;
  height: 70%;
}

.item i {
  font-size: 2.5rem;
}
</style>
