<template>
  <view :style="{height: pageHeight, overflow: 'hidden'}">
    <search @search="disableScroll" />
    <!-- 焦点图 -->
    <swiper
      class="banner"
      indicator-dots
      circular
      indicator-color="rgba(255, 255, 255, 0.6)"
      indicator-active-color="#fff"
    >
      <swiper-item :key="item.goods_id" v-for="item in swiper_arr" >
        <navigator :url="'/pages/goods/index?id=' + item.goods_id">
          <image :src="item.image_src"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 导航条 -->
    <view class="navs">
      <navigator open-type="switchTab" url="/pages/category/index">
        <image src="http://static.botue.com/ugo/uploads/icon_index_nav_4@2x.png"></image>
      </navigator>
      <navigator url="/pages/list/index">
        <image src="http://static.botue.com/ugo/uploads/icon_index_nav_3@2x.png"></image>
      </navigator>
      <navigator url="/pages/list/index">
        <image src="http://static.botue.com/ugo/uploads/icon_index_nav_2@2x.png"></image>
      </navigator>
      <navigator url="/pages/list/index">
        <image src="http://static.botue.com/ugo/uploads/icon_index_nav_1@2x.png"></image>
      </navigator>
    </view>
    <!-- 楼层 -->
    <view class="floors">
      <view class="floor">
        <!-- 标题 -->
        <view class="title">
          <image src="http://static.botue.com/ugo/uploads/pic_floor01_title.png"></image>
        </view>
        <!-- 图片 -->
        <view class="items">
          <navigator url="/pages/list/index">
            <image src="http://static.botue.com/ugo/uploads/pic_floor01_1@2x.png"></image>
          </navigator>
          <navigator url="/pages/list/index">
            <image src="http://static.botue.com/ugo/uploads/pic_floor01_2@2x.png"></image>
          </navigator>
          <navigator url="/pages/list/index">
            <image src="http://static.botue.com/ugo/uploads/pic_floor01_3@2x.png"></image>
          </navigator>
          <navigator url="/pages/list/index">
            <image src="http://static.botue.com/ugo/uploads/pic_floor01_4@2x.png"></image>
          </navigator>
          <navigator url="/pages/list/index">
            <image src="http://static.botue.com/ugo/uploads/pic_floor01_5@2x.png"></image>
          </navigator>
        </view>
      </view>
      <view class="floor">
        <view class="title">
          <image src="http://static.botue.com/ugo/uploads/pic_floor02_title.png"/>
        </view>
        <view class="items">
          <navigator url="/pages/list/index">
            <image src="http://static.botue.com/ugo/uploads/pic_floor02_1@2x.png"></image>
          </navigator>
          <navigator url="/pages/list/index">
            <image src="http://static.botue.com/ugo/uploads/pic_floor02_2@2x.png"></image>
          </navigator>
          <navigator url="/pages/list/index">
            <image src="http://static.botue.com/ugo/uploads/pic_floor02_3@2x.png"></image>
          </navigator>
          <navigator url="/pages/list/index">
            <image src="http://static.botue.com/ugo/uploads/pic_floor02_4@2x.png"></image>
          </navigator>
          <navigator url="/pages/list/index">
            <image src="http://static.botue.com/ugo/uploads/pic_floor02_5@2x.png"></image>
          </navigator>
        </view>
      </view>
      <view class="floor">
        <view class="title">
          <image src="http://static.botue.com/ugo/uploads/pic_floor03_title.png"></image>
        </view>
        <view class="items">
          <navigator url="/pages/list/index">
            <image src="http://static.botue.com/ugo/uploads/pic_floor03_1@2x.png"></image>
          </navigator>
          <navigator url="/pages/list/index">
            <image src="http://static.botue.com/ugo/uploads/pic_floor03_2@2x.png"></image>
          </navigator>
          <navigator url="/pages/list/index">
            <image src="http://static.botue.com/ugo/uploads/pic_floor03_3@2x.png"></image>
          </navigator>
          <navigator url="/pages/list/index">
            <image src="http://static.botue.com/ugo/uploads/pic_floor03_4@2x.png"></image>
          </navigator>
          <navigator url="/pages/list/index">
            <image src="http://static.botue.com/ugo/uploads/pic_floor03_5@2x.png"></image>
          </navigator>
        </view>
      </view>
    </view>
    <!-- 回到顶部 -->
    <view class="goTop icon-top"></view>
  </view>
</template>

<script>
  import search from '@/components/search';

  export default {

    data () {
      return {
        pageHeight: 'auto',
        swiper_arr:[]
      }
    },

    components: {
      search
    },
    
    methods: {
      disableScroll (ev) {
        this.pageHeight = ev.pageHeight + 'px';
      },
      // 轮播图
      async get_swiper(){
      //   const [err,res] = await uni.request({
      //     url:"https://api-ugo-web.itheima.net/api/public/v1/home/swiperdata"
      //   })
      //   // console.log(res)
      //   // 拿到数据，循环遍历，注意有初始化数据
      //   this.swiper_arr=res.data.message;
      // 1.优化后--------
      const res = await this.request1({
        url:'/api/public/v1/home/swiperdata'
      })
        console.log(res);
         // 拿到数据，循环遍历，注意有初始化数据
        this.swiper_arr=res.message;
      }
     
   
    },
    onLoad(){
      this.get_swiper();
      
      // this 代表实例化 
      // this.request1()
    }
  }
</script>

<style scoped lang="less">
  .banner {
    width: 100%;
    height: 340rpx;

    image {
      width: 100%;
      height: 340rpx;
    }
  }

  .navs {
    display: flex;
    justify-content: space-between;
    padding: 30rpx 44rpx;

    image {
      width: 128rpx;
      height: 140rpx;
    }
  }

  .floor {

    .title {
      width: 750rpx;
      height: 60rpx;
      padding: 20rpx 0 0 8rpx;
      background-color: #f4f4f4;
    }

    .items {
      padding: 20rpx 16rpx;
      overflow: hidden;

      navigator {
        width: 193rpx;
        height: 188rpx;
        margin-left: 10rpx;
        margin-bottom: 10rpx;
        float: left;
      }

      navigator:first-child {
        width: 232rpx;
        height: 386rpx;
        margin-left: 0rpx;
      }

      navigator:nth-child(2),
      navigator:nth-child(5) {
        width: 273rpx;
      }
    }

    &:first-child {

      .items {

        navigator {
          width: 233rpx;
        }
      }
    }
  }

  .goTop {
    position: fixed;
    bottom: 30rpx;
    /* #ifdef H5 */
    bottom: 65px;
    /* #endif */
    right: 30rpx;
  
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100rpx;
    height: 100rpx;
    font-size: 48rpx;
    color: #666;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.8);
  }
</style>