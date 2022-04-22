export default {
  data() {
    return {
      loading: true,
      api: null,
    };
  },
  methods: {
    fetchData(url) {
      this.loading = true;
      this.api = null;  
      fetch(`http://localhost:3000${url}`)
        .then((r) => r.json())
        .then((rJson) => {
          //Simula o tempo de carregamento da API para ter o efeito de loading
          setTimeout(()=> {
            this.api = rJson;
            this.loading = false;
          }, 1500)
         
        });
    },
  },
};
