<template>
  <div
    class="rounded-xl relative shadow-xl w-auto"
    id="registration-box"
    :class="currentComponent == 'SignUpVerificationCode' ? 'p-12' : 'p-16'"
  >
    <DashboardProgressLinear class="rounded-t-xl" style="top: 25px;" />
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  onMounted
} from "@nuxtjs/composition-api";
import useGeneralFeatures from "~/controller/GeneralFeatures";

export default defineComponent({
  setup() {
    const { currentComponent } = useGeneralFeatures();

    const { $recaptcha } = useContext();

    onMounted(() => {
      $recaptcha.init();
    });

    return {
      currentComponent
    };
  },
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
