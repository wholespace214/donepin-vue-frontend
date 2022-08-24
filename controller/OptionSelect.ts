import { ref } from "@nuxtjs/composition-api";

export default function useOptionSelect(allDataOption: any) {
  const sizing = ref({
    left: "",
    right: "",
    top: "",
    width: "",
    bottom: ""
  });

  const elementOption = ref();

  const openDropdown = ref(false);

  const indexSelect = ref();

  const addSizing = (clientObject: any) => {
    sizing.value.top = clientObject.top;
    sizing.value.bottom = clientObject.bottom;
    sizing.value.left = clientObject.left;
    sizing.value.right = clientObject.right;
    sizing.value.width = clientObject.width;
  };

  const sizingModalFilter = (clientObject: any) => {
    sizing.value.top = clientObject.top;
    sizing.value.width = "251";
  };

  const getClientPosition = (value: any, event: any, index: number) => {
    console.log("values in getClientPosition ", value)
    elementOption.value = value;

    const target = event.target.getBoundingClientRect();

    indexSelect.value = index;

    toggleOption();

    event.target.classList.contains("modal-filter")
      ? sizingModalFilter(target)
      : addSizing(target);
  };

  const resetOption = () => {
    allDataOption[indexSelect.value].dataActive = null;
    allDataOption[indexSelect.value].value =
      allDataOption[indexSelect.value].label;

    toggleOption();
  };

  const newValue = (value: any, index: number) => {
    console.log('sel value', value)
    allDataOption[indexSelect.value].value = value.label;
    allDataOption[indexSelect.value].dataActive = index;
    allDataOption[indexSelect.value].id = value.value;
  };

  const checkDataActive = () => allDataOption[indexSelect.value].dataActive;

  const toggleOption = () => (openDropdown.value = !openDropdown.value);

  return {
    sizing,
    elementOption,
    openDropdown,
    toggleOption,
    getClientPosition,
    newValue,
    checkDataActive,
    resetOption
  };
}
