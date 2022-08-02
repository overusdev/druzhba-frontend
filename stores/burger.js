export const useBurger = defineStore('burger', () => {
    let menuActive = ref(false);
    function toggleMenu() {
      menuActive.value = !menuActive.value;
      console.log(menuActive);
    }

    function getActive() {
      return menuActive.value;
    }
  
    return {
      menuActive,
      toggleMenu,
      getActive
    };
});

// export const useBurger = defineStore('burger', {
//   state: () => ({
//     menuActive: false,
//   }),

//   getters: {
//     getActive: (state) => state.menuActive,
//   },

//   actions: {
//     toggleMenu() {
//       this.menuActive = !this.menuActive;
//     }
//   },

// })