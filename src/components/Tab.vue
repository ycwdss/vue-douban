<template>
  <div id="tab">
    <mu-drawer class='drawer' :open="open" :docked="docked" @close="toggle()">
      <div class="drawer-pic" style="background:#474a4f; padding: 70px 0;text-align:center; color:#fff;">
        <div class="title" style="font-size: 32px;">微豆 Vdo</div>
        <div class="description" style="font-size: 16px;color:#e0e0e0;">一个移动端豆瓣 Web 应用</div>
      </div>
      <mu-list :value="listVal" @itemClick="docked ? '' : toggle()" @change="page">
        <mu-list-item value="movie" title="电影" >
          <mu-icon slot="left" value="movie"/>
        </mu-list-item>
        <mu-list-item value="book" title="图书">
          <mu-icon slot='left' value="book"/>
        </mu-list-item>
        <mu-list-item value="music" title="音乐">
          <mu-icon slot='left' value="music_note"/>
        </mu-list-item>
        <mu-divider shallowInset/>
        <mu-list-item value="about" title="关于">
          <mu-icon slot='left' value="info"/>
        </mu-list-item>
      </mu-list>
    </mu-drawer>

    <mu-paper class='header' :zDepth="2">
      <mu-appbar :title='listTitle'>
        <mu-icon-button icon='menu' slot="left" @click="toggle(true)"/>
        <mu-icon-button icon='search' slot='right' @click="gotoSearch"/>
      </mu-appbar>
    </mu-paper>


  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  export default {
    data() {
      return {
        open: false,
        docked: true,
        listVal:'movie',
        listTitle:' '
      }
    },
    components: {},
    methods: {
      toggle (flag) {
        this.open = !this.open
        this.docked = !flag
      },
      gotoSearch() {
        this.$router.push({name: 'MovieSearch'});
      },
      page(val) {
        this.listVal=val;
        if (val === 'movie') {
          this.$router.push({name: 'MovieHome'});
        }
        if (val === 'book') {
          this.$router.push({name: 'BookHome'});
        }
        if (val === 'music') {
          this.$router.push({name: 'MusicHome'});
        }
        if (val === 'about') {
          this.$router.push({name: 'About'});
        }
      },
    },
    computed: {},
    watch: {
      '$route' (to, from) {
        if(to.name=='BookHome'){

        }
      }
    },
  };

</script>

<style lang="scss">
  #tab {
    width: 100%;
    height: 100%;
  }

  .drawer {
    color: #212121;
    background: #f5f5f5;
  }
</style>
