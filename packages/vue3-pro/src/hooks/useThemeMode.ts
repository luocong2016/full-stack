import { computed } from "vue";
import { theme } from "ant-design-vue";
import { ThemeEnum } from "@/enums/app";
import appStore from "@/store/appStore";

export function useThemeMode() {
  const { darkAlgorithm } = theme;
  const app = appStore();

  const isDark = computed(() => app.themeMode === ThemeEnum.DARK);
  const darkTheme = { darkAlgorithm: [darkAlgorithm] };

  return {
    isDark,
    darkTheme,
  };
}
