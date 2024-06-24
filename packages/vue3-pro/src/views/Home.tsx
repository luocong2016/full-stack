import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { Button, Input } from "ant-design-vue";

export default defineComponent({
  name: "Home",

  setup() {
    const router = useRouter();

    const value = ref("");

    const onClick = () => {
      router.push("/input");
    };

    return () => (
      <div>
        Home
        <div>{value.value}</div>
        <Input v-model={[value.value, "value"]} />
        <Button onClick={onClick}>go</Button>
      </div>
    );
  },
});
