<template>
          <tbody>
            <tr v-for="article in articles" v-bind:key="article.id" v-bind:title="article.title" class="articles" v-on:click="getValue(article.id)">
              <td><p>{{article.title}}</p></td>
              <td>{{article.publisher}}</td>
            </tr>
          </tbody>
</template>

<script>
import {bus} from '../main'

export default {
  name: 'ListView',
  props: {
    articles: {
      type: Array,
      required: true
    }
    },
  methods: {
    getValue: function(event){
      console.log(this.articles[event].title);
      bus.$emit('changeArticle', this.articles[event]);
    }
  }
}
</script>

<style scoped>
#app {
  background: #ffffff
}

div.listView {
  border-right: 1px solid rgb(222, 226, 230);
}

tr.articles {
  cursor:pointer;
}

tr.articles:hover{
    background-color:slategray;
}
</style>

