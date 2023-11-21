
export default {
  setup() {
    const count = Vue.ref(0)

    const incrementCount = () => {
      count.value++
    }

    return {
      count,
      incrementCount
    }
  },
  template: `
    <div class="my-component sec" style="margin:20px">
      <p>Count is {{ count }}</p>
      <button style="background-color:grey;" @click="incrementCount">Increment</button>
    </div> 
  `
}
