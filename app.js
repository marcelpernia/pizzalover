const pizza = {
  props: ['nombre', 'picture', 'cantidad'],
  template: "#pizza-template",
  methods: {
    // oneMore() {
    //   // this.pizzas[value].cantidad++;
    //   this.$emit('onemore');
    // },
    menos() {
      // this.pizzas[value].cantidad > 0 ? this.pizzas[value].cantidad-- : null;
      // this.cantidad > 0 && this.cantidad--
      // console.log('menos')
      if (this.cantidad > 0) {
        this.$emit('oneless');
      }
    }
  }
};
new Vue({
  el: '#app',
  mounted() {
    axios
      .get('https://run.mocky.io/v3/a2d8b3de-0d1a-40f1-ba85-279fca60a8f5')
      .then(response => (this.pizzas = response.data))
      .catch(error => console.log(error))
  },
  data: {
    title: 'Pizza Lovers',
    pizzas: [],
    totalPizzas: 0
  },
  components: {
    pizza
  }
});