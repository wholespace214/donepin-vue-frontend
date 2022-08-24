import { ref } from "@nuxtjs/composition-api";

const calendarData = ref()
export default function calendarDataComponent() {
    return {
        calendarData
    };
}
