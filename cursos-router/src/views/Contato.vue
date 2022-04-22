<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api">
        <h1>{{api.titulo}}</h1>
        <p>{{api.descricao}}</p>
        <ul>
          <li v-for="valor, chave, indice in api.contato" :key="indice">
            <p><strong>{{chave}}:</strong> {{valor}}</p>
          </li>
        </ul>
      </div> 
    </transition>
  </div>
</template>

<script>
import fetchData from "../mixins/fetchData.js";

export default {
  name: "Contato",
  mixins: [fetchData],
  created() {
    this.fetchData("/contato");
  },
};
</script>
