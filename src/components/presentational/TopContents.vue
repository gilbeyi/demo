<template>
  <div class="top-contents">
    <div class="top-contents__header">
      <div class="top-contents__title">
        {{ $t("title") }}
      </div>
      <div class="top-contents__option">
        <select v-model="selected">
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
  </div>
</template>

<script>
export default {
  name: 'TopContents',
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
.top-contents {
  width: 100%;
  &__header {
    height: 50px;
    padding: 5px 10px;
    border: 1px solid #c9c9c9
  }
  &__title {
    display: inline-block;
  }
  &__option {
    float: right;
    width: 150px;
  }
}
</style>
