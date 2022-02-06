class DM {
  set(dark: boolean, setStore: boolean, store: Storage = localStorage) {
    const { classList } = document.body;
    
    if (dark) classList.add("dark");
    else classList.remove("dark");

    if (setStore) store.setItem("dark", dark.toString());
  }

  toggle(store: Storage = localStorage, setStore: boolean = true) {
    const dark = store.getItem("dark");

    this.set(dark == "true" ? false : true, setStore, store);
  }

  load(store: Storage, setStore: boolean = false) {
    const dark = store.getItem("dark");

    this.set(dark == "true" ? true : false, setStore, store);
  }

  onload() {
    const systemIsDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    document
      .querySelector(".darkToggle")
      ?.addEventListener("click", () => this.toggle(localStorage));

    if (systemIsDark) {
      this.set(true, false);
    } else {
      this.load(localStorage, false);
    }
  }
}

export const DarkMode = new DM();
