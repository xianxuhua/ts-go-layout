<template>
  <div>
    <div style="display: flex;margin: 100px auto;width: 200px;justify-content: space-around">
      <nuxt-link to="/login">login</nuxt-link>
      <nuxt-link to="/register">register</nuxt-link>
    </div>
    <div style="display: flex;flex-direction: column;width: 300px;margin: 0 auto">
      <p v-for="post in post_res.data">
        <nuxt-link :to="{path: '/post/'+post.id, params: {id: post.id}}">{{ post.title }}</nuxt-link>
      </p>
      <el-input v-model="post_form.title"></el-input>
      <el-input v-model="post_form.content" type="textarea"></el-input>
      <el-button @click="create_post">create post</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {post} from "~/proto/post_pb";

export default Vue.extend({
  name: "index",
  data() {
    return {
      post_form: {} as post.CreatePostRequest,
      post_res: {} as post.GetPostListResponse
    }
  },
  created() {
    const token = this.$cookies.get("token")
    this.$axios.setToken(token, "Bearer")
    this.$axios.get("post").then(rep => {
      this.post_res = post.GetPostListResponse.fromObject(rep.data)
    })
  },
  methods: {
    create_post() {
      const token = this.$cookies.get("token")
      if (!token) {
        this.$notify.error("please login")
      }

      this.$axios.setToken(token, "Bearer")
      this.$axios.post("post", {
        title: this.post_form.title,
        content: this.post_form.content
      } as post.CreatePostRequest).then(rep => {
        this.$notify.success("create post success")
        location.reload()
      })
    }
  }
})
</script>

<style scoped>

</style>
