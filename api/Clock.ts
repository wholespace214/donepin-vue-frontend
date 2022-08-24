import useAxios from "./axios";

export default function useClockAPI() {
    const { axiosPatch } = useAxios();

    const startClock = (param: any) => axiosPatch("/user/startClock");

    const stopClock = () => axiosPatch("/user/stopClock");

    const pauseClock = () => axiosPatch(`user/pauseClock`);
    const resumeClock = () => axiosPatch(`user/resumeClock`);


    return { startClock, stopClock, resumeClock, pauseClock };
}
