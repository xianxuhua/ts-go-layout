<template>
  <div style="  display: flex;flex-direction: column;width: 500px;margin: 100px auto">
    <el-input v-model="register_form.name"></el-input>
    <el-input v-model="register_form.password" show-password></el-input>
    <el-button @click="register">register</el-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { user } from '~/proto/user_pb'

export default Vue.extend({
  data() {
    return {
      register_form: {} as user.CreateUserRequest
    }
  },

  created() {

  },
  methods: {
    register() {
      this.$axios.post("user", {
        name: this.register_form.name,
        password: this.register_form.password
      } as user.CreateUserRequest).then(rep => {
        const res = user.CreateUserResponse.fromObject(rep.data)
        this.$notify.success("register success")
        location.href = "/login"
      })
    }
  }
})
</script>

<style>

</style>
