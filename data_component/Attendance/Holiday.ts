import { ref } from "@nuxtjs/composition-api";

const HolidayData = ref();
const defaultHolidayData = ref();
const defaultMonth = ref();
export default function HolidayDataComponent() {
    return {
        HolidayData,
        defaultHolidayData,
        defaultMonth
    };
}
