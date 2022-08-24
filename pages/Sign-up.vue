<template>
  <SignUp />
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  head: {
    title: "Sign Up",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description"
      }
    ]
  }
});
</script>

<style scoped>
a {
  color: rgba(41, 41, 41, 1);
}

p {
  margin-bottom: 0px;
}
</style>
