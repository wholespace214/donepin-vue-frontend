<template>
  <div id="content" class="p-5 flex justify-end">
    <div class="flex flex-col space-y-3">
      <v-card class="mx-auto" width="500">
        <v-card-text>
          <p class="font-semibold mb-2  pb-0 text-lg capitalize text--primary">
            attendance
          </p>
          <p class="font-semibold mb-0 pb-0 text-sm capitalize text--primary">
            working
          </p>

          <p
            class="font-semibold mb-0 text-[20px] py-1 capitalize text-DPGREEN-500"
          >
            03:05:10
          </p>
          <span class="text-sm">
            of 8 hours
          </span>

          <div class="w-full mt-4 h-2 items-end bg-gray-100">
            <div class="w-1/2 bg-DPGREEN-500 h-2"></div>
          </div>
        </v-card-text>
      </v-card>

      <div class="flex flex-col space-y-3">
        <v-card class="mx-auto" width="500">
          <v-card-text>
            <p
              class="font-semibold mb-2  pb-0 text-lg capitalize text--primary"
            >
              recent activies
            </p>

            <v-timeline align-top dense>
              <v-timeline-item
                v-for="message in messages"
                :key="message.time"
                fill-dot
                color="rgba(165, 210, 118, 1)"
                small
              >
                <div>
                  <div class="font-weight-normal">
                    <strong>{{ message.from }}</strong> @{{ message.time }}
                  </div>
                  <div>{{ message.message }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const reveal = ref(false);

    const messages = ref([
      {
        from: "You",
        message: `Sure, I'll see you later.`,
        time: "10:42am",
        color: "deep-purple lighten-1"
      },
      {
        from: "John Doe",
        message: "Yeah, sure. Does 1:00pm work?",
        time: "10:37am",
        color: "green"
      },
      {
        from: "You",
        message: "Did you still want to grab lunch today?",
        time: "9:47am",
        color: "deep-purple lighten-1"
      }
    ]);

    return {
      reveal,
      messages
    };
  }
});
</script>

<style>
.slide-fade-enter-active {
  transform: translateY(-10px);
  opacity: 0;
  transition: all 0.1s ease;
}
.slide-fade-leave-active {
  transform: translateY(-20px);
  opacity: 0;
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1) ease;
}
</style>
