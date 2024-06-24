import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { Input, Button } from "ant-design-vue";

export default defineComponent({
  name: "Input",

  setup() {
    const router = useRouter();

    const value = ref("");

    const onClick = () => {
      router.push("/home");
    };

    return () => (
      <div>
        <div>Input</div>
        <div>{value.value}</div>
        <Input v-model={[value.value, "value"]} />
        <Button onClick={onClick}>go</Button>
      </div>
    );
  },
});
