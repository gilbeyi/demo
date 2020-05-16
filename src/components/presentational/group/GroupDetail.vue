<template>
  <div class="group-detail">
    <div class="group-detail__info">
      <div class="group-detail__info--name">
        {{ groupName(group.name) }}
      </div>
      <div v-if="group.url">
        URL:
        <a
          :href="group.url"
          target="_blank"
        >
          {{ group.url }}
        </a>
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
.group-detail {
  margin: 0;
  &__info {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #c9c9c9;
    &--name {
      padding-bottom: 10px;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
