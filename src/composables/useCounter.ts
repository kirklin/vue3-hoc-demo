import { h, ref } from "vue";
import type { DefineComponent } from "vue";

export default function (WrappedComponent: DefineComponent, number: number) {
  return {
    name: "useCounter",

    setup() {
      const count = ref<number>(number);

      const increment = () => count.value += number;

      return () => h(WrappedComponent, { counter: count.value, increment });
    },
  };
}
