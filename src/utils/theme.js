export class Settings {
  constructor() {
    try {
      var systemThemeDark, 
        theme = window.localStorage.getItem("theme"), 
        systemThemeMode = window.localStorage.getItem("system-theme-mode");

      if (("true" === systemThemeMode || !theme) && window.matchMedia) {
        var systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
        systemThemeDark = systemTheme && systemTheme.matches
      }
      var darkTheme = "dark" === theme || Boolean(systemThemeDark);
      darkTheme && Settings.set("dark");
    } catch (error) {}
  }

  static set(name) {
    window.localStorage.setItem("theme", name);
    window.localStorage.setItem("system-theme-mode", "false");
    document.documentElement.dataset["mode"] = name;
  }

  static useSystem() {
    window.localStorage.setItem("system-theme-mode", "true");
  }
}