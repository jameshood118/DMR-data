<template>
        <div>
          <h1>{{Title}}</h1>
          <h5>by: {{AuthorName}}</h5
          ><p>{{Story}}</p>
          </div>
</template>

<script>
import {bus} from '../main'

export default {
  name: 'MessageView',
  props: ["Title", "AuthorName", "Story"],
  created() {
    bus.$on('changeArticle', (data) =>{
      this.Title = data.title;
      this.AuthorName = data.publisher;
      this.Story = data.story;
    })
  }
}
</script>

