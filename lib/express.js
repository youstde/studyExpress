const http = require('http')


module.exports = function () {
    const app = function(req, res) {

    }
    
    return app
}

// 创建一个空的对象，扩展一些实例方法
const proto = Object.create(null)

proto.listen = function() {
    const server = http.createServer(this)
}
