import { ref } from "@nuxtjs/composition-api";

const clockData = ref()

export default function clockDataComponent() {
    return {
        clockData
    };
}
