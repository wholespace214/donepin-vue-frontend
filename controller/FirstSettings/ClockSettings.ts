import useClockAPI from "~/api/Clock";
import clockDataComponent from "~/data_component/Clock/clockData";

export default function useClockSettings() {
    const { clockData } = clockDataComponent();

    const { startClock, stopClock, pauseClock, resumeClock } = useClockAPI();

    const setClockStart = (param: any) =>
        new Promise(resolve => {
            startClock(param).then((res: any) => {
                let { data } = res;

                clockData.value = data

                resolve(true);
            });
        });

    const setClockStop = () =>
        new Promise(resolve => {
            stopClock().then((res: any) => {
                let { data } = res;

                clockData.value = data

                resolve(true);
            });
        });

    const setClockPause = () =>
        new Promise(resolve => {
            pauseClock().then((res: any) => {
                let { data } = res;

                clockData.value = data

                resolve(true);
            });
        });

    const setClockResume = () =>
        new Promise(resolve => {
            resumeClock().then((res: any) => {
                let { data } = res;
                console.log("data", data)
                clockData.value = data

                resolve(true);
                return data
            });
        });

    return { setClockStart, setClockStop, setClockPause, setClockResume };
}
