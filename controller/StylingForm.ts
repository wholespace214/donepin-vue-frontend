import { onMounted, ref } from "@vue/composition-api";

export default function useStylingForm(form?: any) {
  const inputValue = ref();

  const onBlurStyle = (index?: number, dataform?: any) => {
    if (typeof index == "number") {
      if (form[index].value.length == 0)
        form[index].labelActive = false;
    }
  };

  onMounted(() => {
    form.forEach((element: any) => {
      if (element.value.length > 0) element.labelActive = true;
    });
  });

  const focusInput = (index: number) => inputValue.value[index].focus();

  return {
    inputValue,
    onBlurStyle,
    focusInput
  };
}
