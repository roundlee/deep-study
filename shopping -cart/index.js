// 分析数据与业务需求的相关性，利用构造函数进行对应业务数据的封装和计算，降低耦合性
//单件数据
class UIGoods {
    constructor(g){
        this.data = g
        this.choose = 0
    }
    //获取总价
    getToltalPrice(){
        return this.data.price * this.choose
    }
    //判断是否选中商品
    isChoose(){
        return this.choose > 0
    }
    increase(){
        this.choose++
    }
    decrease(){
        if(this.choose == 0) return
        this.choose--
    }
}

// 整个界面的数据
class UIData {
    constructor(){
        var uigoods = []
        for(var i = 0;i<goods.length;i++){
            var uig = new UIGoods(goods[i])
            uigoods.push(uig)
        }
        this.uigoods = uigoods
        this,deliveryThreshold = 30
        this.deliveryPrice = 5
    }
    getTotalPrice(){
        var sum = 0
        for(var i = 1;i<this.uigoods.length;i++){
            var g = this.uigoods[i]
        }
    }
}

var UId = new UIData()
var UIg = new UIGoods(goods[0])
console.log(UIg)