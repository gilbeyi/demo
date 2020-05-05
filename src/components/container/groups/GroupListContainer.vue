<template>
  <group-list
    :list="groupList"
  />
</template>

<script>
import GroupList from '@/components/presentational/groups/GroupList.vue'
import { groupList } from '@/data/demoData.js'
export default {
  name: 'GroupListContainer',
  components: {
    GroupList
  },
  data () {
    return {
      groupList: groupList
    }
  }
}
</script>
