<template>
  <group-detail
    :group="group"
  />
</template>

<script>
import GroupDetail from '@/components/presentational/group/GroupDetail.vue'
import { groupList } from '@/data/demoData.js'
export default {
  name: 'GroupDetailContainer',
  components: {
    GroupDetail
  },
  data () {
    return {
      groupList,
      id: this.$route.params.id,
      group: {}
    }
  },
  created () {
    this.setGroupInfo()
  },
  methods: {
    setGroupInfo () {
      // TODO: refactor
      const result = this.groupList.find(el => String(el.id) === String(this.id))
      this.group = result
    }
  }
}
</script>
