import { reactive, ref } from "@vue/composition-api";

export default function modalRoles() {
  const role = ref("");
  const submenu = reactive(["access", "manage"]);

  const variantColorClass = ref([
    "DPYELLOW",
    "DPPINK",
    "DPBLUE",
    "DPPURPLE",
    "DPYELLOW"
  ]);

  return { submenu, variantColorClass, role };
}
