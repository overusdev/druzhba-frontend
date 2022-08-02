export const useCounter = defineStore('count', () => {
    const count = ref(0);
    function increment() {
      count.value++;
    }
  
    return { count, increment };
})