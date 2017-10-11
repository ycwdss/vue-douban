<template>
  <div class='wrap'>
    <mu-row class='paper-row'>
      <mu-col class='paper-elem' width="33" tablet="25" desktop="20" v-for="(subject,index) in subjects"
              :data-index="index" :key="subject.id">
        <router-link :to="{name: 'MovieSubject', params:{id: subject.id}}" tag="li">
        <mu-paper>
          <div class='paper-border'>
            <div class='paper-img' :style="'background-image:url('+subject.images.large+')'"></div>
          </div>
          <div class='paper-text'>
            <p>{{subject.title}}</p>
            <p class="star-box">
              <span class="paper-star" >
                  <Star class="star" :rating='subject.rating.average'></Star>
                </span>
              <span class='paper-rating'>{{subject.rating.average | fixNum}} </span>
            </p>
          </div>
        </mu-paper>
      </router-link>
      </mu-col>
    </mu-row>
  <!--  <infinite-loading :on-infinite="onInfinite" spinner="circles" ref="infiniteLoading">
      <span slot="no-more">暂无更多数据...</span>
    </infinite-loading>-->
  </div>
</template>

<script>

  import {mapState} from 'vuex';
  import * as types from '../../store/types';
  import * as api  from '../../store/api';
  import InfiniteLoading from 'vue-infinite-loading'
  import Star from '../../components/Star'
  export default {
    name: 'card',
    props: ['tabName'],
    data() {
      return {
        start: 0,
      };
    },
    components: {
      InfiniteLoading,
      Star
    },
    computed: {
      ...mapState({
        subjects(state) {
          return state.movies.movies[this.tabName].subjects;
        },
      })
    },
    mounted() {
      console.log(this.$store.state.movies.movies[this.tabName])
      this.$store.state.movies.movies[this.tabName].subjects = [];
      this.fetchData(this.start);
      this.onInfinite();
    },
    watch: {
      tabName(val) {
        if (val == 'in_theaters') {
          this.$store.state.movies.movies[this.tabName].subjects = [];
          this.start = 0
          this.fetchData(this.start);
          this.onInfinite();
        }
        if (val == 'coming_soon') {
          this.$store.state.movies.movies[this.tabName].subjects = [];
          this.start = 0
          this.fetchData(this.start);
          this.onInfinite();
        }
      }
    },
    methods: {
      fetchData(start){
        this.$store.dispatch(types.FETCH_MOVIES, {type: this.tabName, city: '上海', start: start, count: 10})
      },
      //加载更多
      onInfinite() {
        setTimeout(() => {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
          if (this.$store.state.movies.movies[this.tabName].subjects.length > 0) {
            this.start += 10;
            const total = this.$store.state.movies.movies[this.tabName].total;
            if (this.start <= total) {
              console.log(this.start)
              this.fetchData(this.start)
              console.log(this.$store.state.movies.movies[this.tabName])
              this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
            } else {
              this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
            }
          }
        }, 2000);
      },
    }
  };
</script>

<style lang='css' scoped>
  .wrap {
    padding: 6px;
  }
  li{
    list-style: none;
  }
  .wrap > .paper-row {
    justify-content: flex-start;
    flex-flow: row wrap;
  }

  .paper-elem {
    padding: 6px;
  }

  .paper-border {
    position: relative;
    border-radius: 2px 2px 0 0;
    overflow: hidden;
  }

  .paper-img {
    position: relative;
    width: 100%;
    padding-top: 141%;
    background-size: cover;
    -moz-background-size: cover;
  }

  .paper-img-wrap {
    top: 0;
    left: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 2px 2px 0px 0px;
    box-sizing: border-box;
  }

  .paper-img-wrap > img {
    width: 100%;
  }

  .paper-text {
    padding: 6px 0 2px 0;
  }

  .paper-text > p {
    margin: 0;
    padding: 0 6px;
    font-size: 14px;
    height: 18px;
    line-height: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .star-icon {
    font-size: 14px;
    margin-right: -4px;
    float: left;
  }

  .star-box {
    display: flex;
    color: #ff6f00;
  }

  .star {
    letter-spacing: -3px;
  }

  .paper-star {
    margin-right: 3px;
    /*font-size: 12px;*/
  }

  .paper-rating {
    position: relative;
    /*top: -2px;*/
  }
</style>
