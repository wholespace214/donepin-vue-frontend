import { ref, computed } from "@vue/composition-api";

export default function useResize() {
  const resizeBreakpoint = ref();

  const ipadUpSize = computed(() =>
    resizeBreakpoint.value > 768 ? true : false
  );

  const onResize = () => (resizeBreakpoint.value = window.innerWidth);

  const laptopUpsize = computed(() =>
    resizeBreakpoint.value >= 1280 ? true : false
  );

  return {
    onResize,
    ipadUpSize,
    laptopUpsize
  };
}
