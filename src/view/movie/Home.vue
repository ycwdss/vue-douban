<template>
  <!--电影信息-->
  <div class="movie">
    <Tab></Tab>
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="in_theaters" title="正在热映"/>
      <mu-tab value="coming_soon" title="即将上映"/>
    </mu-tabs>
    <div class="card-wrap" v-if="activeTab === 'in_theaters'">
      <Card tab-name='in_theaters'></Card>
    </div>
    <div class="card-wrap" v-if="activeTab === 'coming_soon'">
      <Card tab-name='coming_soon'></Card>
    </div>

  </div>
</template>
<script>
  import Tab from './../../components/Tab';
  import Card from './../../view/movie/Card';
  export default {
    name: '',
    data () {
      return {
        activeTab: 'in_theaters'
      }
    },
    mounted(){

    },
    components:{
      Tab,
      Card
    },
    methods:{
      handleTabChange (val) {
        this.activeTab = val
      },
    }
  }
</script>
<style lang="scss" scoped>

</style>
