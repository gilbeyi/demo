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
        class="group__map"
      >
        <div
          class="group__map--inner"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.6020103847372!2d139.79140871525956!3d35.711410280187266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec0a6117f9d%3A0x718a747bf68936fd!2sTokyo%20Knowledge!5e0!3m2!1sja!2sjp!4v1589631759551!5m2!1sja!2sjp"
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
    },
    url (url) {
      return `URL: ${url}`
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
      padding-bottom: 56.25%;
      position: relative;
    }
    &--frame {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      border:0;
    }
  }
}
</style>
