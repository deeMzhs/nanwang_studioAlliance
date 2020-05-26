// localStorage在浏览器的隐私模式下面是不可读取的。
// localStorage本质上是对字符串的读取，有json格式时需要JSON.stringify()转化为字符串。
// localStorage不能被爬虫抓取到
// 封装操作localstorage 本地存储的方法，这是模块化的文件，
// localStorage是window上的。所以不需要写this.localStorage，vue中如果写this，是指vue实例。会报错
var storage = {
    set(key,value){ // 调用这个方法时候传入一个 key 和 value 
        //  将传入的 value 转换成JSON 字符串
        localStorage.setItem(key,JSON.stringify(value))
    },
    get(key){  // get 方法 直接传入 key 就行
        // 反序列化，将 JSON 字符串转换成 JSON 对象
        return JSON.parse(localStorage.getItem(key))
    },
    remove(){  // 删除
        localStorage.removeItem(key)
    },
    //删除所有
    removeAll(){
        localStorage.clear()
    }
}
// Storage 发生变化（增加、更新、删除）时的 触发，同一个页面发生的改变不会触发，只会监听同一域名下其他页面改变 Storage
// window.addEventListener('storage', function (e) {
// 　　console.log('key', e.key); console.log('oldValue', e.oldValue);
// 　　console.log('newValue', e.newValue); console.log('url', e.url);
// })
export default storage   // 将 storage 暴露出去