<template>
  <div id="app">
    <div class="container">
    <div class="row header">
      <div class="col-xs-12">
        <HeaderView v-bind:message="message"/>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-6 listView">
        <table class="table">
          <thead>
          <tr>
      <th scope="col">Title</th>
      <th scope="col">Publisher</th>
          </tr>
          </thead>
          <ListView v-bind:articles="articles"/>
        </table>
      </div>
      <div class="col-xs-12 col-md-6">
        <MessageView Title="Some Title" AuthorName="Post Author" Story="Post Story"/>
      </div>
    </div>
  </div>
  </div>
</template>


<script>
import ListView from './components/ListView'
import HeaderView from './components/HeaderView'
import MessageView from './components/MessageView'

export default {
  name: 'App',
  components: {
    ListView, HeaderView, MessageView
  },
  data () {
    return {
       message: 'Welcome to DMR', 
       header: "Article",
      articles: [
      {id: "0", title:"Picnic Baskets..", publisher: "Yogi Bear", story:"A story of betrayal and food"},
      {id: "1",title:"No Yogi!..", publisher: "Booboo Bear", story:"My friend, I hardly knew him"},
      {id: "2",title:"Meanwhile, at the Hall of Justice..", publisher: "Lex Luthor", story:"The superfriends must pay!"},
      {id: "3",title:"Picnic Baskets 2..", publisher: "Yogi Bear", story:"Last Will and testament of Yogi Bear"},
      {id: "4",title:"Picnic Baskets 3..", publisher: "Yogi Bear", story:"PS I like Picnic Baskets"},
      {id: "5",title:"Picnic Baskets 4..", publisher: "Yogi Bear", story:"I'm Dead"}
    ]
    }
  }
}
</script>


<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
