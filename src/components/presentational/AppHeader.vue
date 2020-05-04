<template>
  <div class="header">
    <div class="header__title">
      {{ $t("title") }}
    </div>
    <div class="header__option">
      <select
        v-model="selected"
        class="header__option--select-box"
      >
        <option
          v-for="item in listItems"
          :key="item.value"
          :value="item.value"
        >
          {{item.text}}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      selected: 'ja',
      listItems: [
        {
          value: 'ja',
          text: 'Japanese'
        },
        {
          value: 'en-US',
          text: 'English'
        }
      ]
    }
  },
  watch: {
    selected () {
      this.$i18n.locale = this.selected
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
  padding: 5px 10px;
  border: 1px solid #c9c9c9;
  &__title {
    display: inline-block;
    font-size: 24px;
    font-weight: bold;
  }
  &__option {
    float: right;
    width: 150px;
    padding-top: 10px;
    &--select-box {
      font-size: 16px;
    }
  }
}
</style>
