<template>
  <v-layout column>
    <v-flex class="align-self-center mt-2">
      <v-alert v-if="respData.status === 200" dense text type="success" class="mt-5">Team Member addition request confirmed successfully.</v-alert>
      <v-alert v-if="!respData.status === 200 && err === 'error'" dense text type="error" class="mt-5">Team Member addition request failed.</v-alert>
    </v-flex>
  </v-layout>
</template>
<script>
import useAcceptanceApi from "~/api/acceptance";

export default {
  head() {
    return {
      title: "Acceptance",
    };
  },
  data() {
    return {
      respData: {},
      err: "",
    };
  },

  setup(props) {
    const { getAcceptance } = useAcceptanceApi();
    const getAccept = async (accId) => {
      try {
        let res = await getAcceptance(accId);
        return res;
      } catch (error) {
        if (error.response) console.log("error", error);
      }
    };
    return {
      getAccept,
    };
  },
  async created() {
    const data = await this.getAccept(this.$route.params.accId);
    this.respData = data;
    if (data?.status === 200) {
      if (window.localStorage.JWT) {
        console.log("redireting to members", window.localStorage);
        this.$router.push("/members");
      } else {
        this.$router.push("/login");
      }
    } else {
      this.err = "error";
    }
  },
};
</script>
<style scoped></style>