<template>
  <div
    class="app-modal"
  >
    <div
      class="app-modal__mask"
      @click="closeModal"
    >
      <div
        class="app-modal__wrapper"
      >
        <div
          class="app-modal__container"
          @click="stopPropagation"
        >
          modal contents
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppModal',
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showModal: false
    }
  },
  watch: {
    show (value) {
      if (value && !this.showModal) {
        this.showModal = true
      }
    }
  },
  methods: {
    closeModal () {
      this.$emit('change', false)
    },
    stopPropagation (e) {
      e.stopPropagation()
    }
  }
}
</script>

<style lang="scss" scoped>
.app-modal {
  &__mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }
  &__wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  &__container {
    width: 300px;
    height: 240px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }
}
</style>
