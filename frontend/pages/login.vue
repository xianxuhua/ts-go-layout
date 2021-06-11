<template>
  <div style="display: flex;flex-direction: column;width: 500px;margin: 100px auto">
    <el-input v-model="login_form.name"></el-input>
    <el-input v-model="login_form.password" show-password></el-input>
    <el-button @click="login">login</el-button>
  </div>
</template>

<script lang="ts">
import {user} from "~/proto/user_pb";
import Vue from "vue";

export default  Vue.extend({
  name: "login",
  data() {
    return {
      login_form: {} as user.LoginRequest
    }
  },
  created() {

  },
  methods: {
    login() {
      this.$axios.post("login", {
        name: this.login_form.name,
        password: this.login_form.password
      } as user.LoginRequest).then(rep => {
        const res = user.LoginResponse.fromObject(rep.data)
        this.$cookies.set("token", res.token)
        location.href = "/"
      })
    }
  }
})
</script>

<style scoped>

</style>
