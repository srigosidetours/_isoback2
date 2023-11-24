
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
      <v-btn style="background-color:grey;" @click="incrementCount">Increment</v-btn>
    </div> 
  `
}
