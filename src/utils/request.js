// 导出
export default function(Vue){
    // Vue:构造函数，只要在Vue构造函数原型对象上面设置方法，那么所有Vue实例化对象都可以直接使用该方法
    // prototype: 原型对象(把所有的方法都放到原型对象上，原型对象的作用是共享方法)
    // console.log(Vue)
    Vue.prototype.request1 = async function(opts){

        // 基础路径
      var baseUrl = "https://api-ugo-web.itheima.net"

    // 1.优化 （数据没加载出来时设置loading）
    uni.showLoading({
        title:'数据加载中'
    })
        // 最终路径：基础路径+opts.url
        // 封装自己的请求
        const [err,res] =await uni.request({
          url:baseUrl+opts.url
        })
    // 2.优化 拿到数据后,隐藏loadding
    uni.hideLoading()

        // 请求数据返回
        return res.data;
    //    console.log("新的自己配置的请求方法")
    }

    // 未来：this.request1() 在vue文件中使用
    // 意义：简化请求，方便维护
    // 请求：不同的业务应该是不同的请求路径 （路径拼接，传入参入）
}