<template>
  <div class="group-list">
    <div
      v-for="item in list"
      :key="item.id"
      class="group-list__item"
      @click="goDetail(item.id)"
    >
      <div class="group-list__item--name">
        {{ groupName(item.name) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GroupList',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    groupName (key) {
      return this.$t(`group.${key}.name`)
    },
    goDetail (id) {
      const path = `/groups/${id}`
      this.$router.push({ path: path })
    }
  }
}
</script>

<style lang="scss" scoped>
.group-list {
  margin: 0;
  &__item {
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #c9c9c9;
    cursor: pointer;
    &--name {
      padding-bottom: 10px;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
