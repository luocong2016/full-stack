import { defineStore } from "pinia";
import { ThemeModeEnum } from "@/enums/app";

const defaultThemeMode =
  localStorage.getItem(import.meta.env.VITE_THEME_MODE_KEY) ||
  import.meta.env.VITE_THEME_MODE ||
  "";

export default defineStore("appStore", {
  state() {
    return {
      themeMode: defaultThemeMode,
    };
  },

  getters: {
    getThemeMode(state): string {
      return state.themeMode || defaultThemeMode;
    },
  },

  actions: {
    setThemeMode(themeMode: ThemeModeEnum) {
      this.themeMode = themeMode;
    },
  },
});
