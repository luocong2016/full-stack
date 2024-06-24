import { defineComponent, Transition, KeepAlive } from "vue";
import { RouterView } from "vue-router";
import { includes } from '@/router'

export default defineComponent({
  setup() {
    return () => (
      <RouterView
        v-slots={{
          default({ Component, route }) {
            return (
              Component && (
                <Transition name="fade" mode="out-in" appear>
                  <KeepAlive include={includes}>
                    <Component key={route.fullPath} />
                  </KeepAlive>
                </Transition>
              )
            );
          },
        }}
      />
    );
  },
});
