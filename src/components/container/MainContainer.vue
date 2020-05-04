<template>
  <group-list
    :list="groupList"
  />
</template>

<script>
import GroupList from '@/components/presentational/group/GroupList.vue'
import { groupList } from './demoData.js'
export default {
  name: 'MainContainer',
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
