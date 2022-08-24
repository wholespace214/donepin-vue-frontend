import { onMounted } from "@nuxtjs/composition-api";
import Settings from "~/data_component/Finance/Settings";

export default function useSettings() {
  const { settings, taxTemplate } = Settings();

  const addTax = () => settings[0].tax.push(taxTemplate.value);

  const removeTax = (index: number) => settings[0].tax.splice(index, 1);

  return { addTax, removeTax };
}
