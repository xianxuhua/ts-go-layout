<template>
  <div>
    <p>{{ post_detail.title }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {post} from "~/proto/post_pb";
export default Vue.extend({
  name: "id",
  data() {
    return {
      post_detail: {} as post.GetPostDetailResponse
    }
  },
  created() {
    const token = this.$cookies.get("token")
    this.$axios.setToken(token, "Bearer")
    this.$axios.get("post/"+this.$route.params.id).then(rep => {
      this.post_detail = post.GetPostDetailResponse.fromObject(rep.data)
    })
  }
})
</script>

<style scoped>

</style>
