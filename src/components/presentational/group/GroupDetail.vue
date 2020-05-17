<template>
  <div class="group">
    <div class="group__info">
      <div class="group__name">
        {{ groupName(group.name) }}
      </div>
      <div
        v-if="group.url"
        class="group__url"
      >
        <div
          class="group__url--header"
        >
          URL:
        </div>
        <a
          :href="group.url"
          target="_blank"
          class="group__url--path"
        >
          {{ group.url }}
        </a>
      </div>
      <div
        v-if="group.map"
        class="group__map"
      >
        <div
          class="group__map--inner"
        >
          <iframe
            :src="group.map"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            class="group__map--frame"
          >
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GroupDetail',
  props: {
    group: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    groupName (key) {
      return this.$t(`group.${key}.name`)
    }
  }
}
</script>

<style lang="scss" scoped>
.group {
  width: 100%;
  margin: 0;
  padding-top: 10px;
  &__info {
    padding: 10px;
    border: 1px solid #c9c9c9;
  }
  &__name {
    padding-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
  }
  &__url {
    padding: 10px 0;
    &--header {
      display: inline;
      padding-right: 5px;
    }
    &--path {
      color: #0000cd;
      text-decoration: none;
      font-size: 16px;
    }
  }
  &__map {
    width: 100%;
    padding: 20px 0;
    &--inner {
      height: 0;
      overflow: hidden;
      padding-bottom: 450px;
      @include mq-down() {
        padding-bottom: 56.25%;
      }
      position: relative;
    }
    &--frame {
      position: absolute;
      left: 0;
      top: 0;
      width: 600px;
      height: 450px;
      border:0;
      @include mq-down() {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
