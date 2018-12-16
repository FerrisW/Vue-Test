/**
 * Created by Administrator on 2018/12/16.
 */
var app=new Vue({
    el :'#app',
    data:{
        list:[
            {
                id:1,
                name:'HuaWei',
                price:6000,
                count:3,
                check:1
            },
            {
                id:2,
                name:'Samsung',
                price:5000,
                count:2,
                check:1
            },
            {
                id:3,
                name:'Strawberry',
                price:4000,
                count:1,
                check:1
            },
        ],
        isCheckAll:false
    },
    computed:{
        totalPrices:function(){
            var total=0;
            for(var i=0;i<this.list.length;i++){
                var item = this.list[i];
                if(item.check==0){
                    total +=item.price*item.count;
                }
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }
    },
    methods:{
        handleReduce:function(index){
            if(this.list[index].count===1) return;
            this.list[index].count--;
        },
        handleAdd:function(index){
            this.list[index].count++;
        },
        handleRemove:function(index){
            this.list.splice(index,1);
        },
        handleCheck:function(index){
            this.list[index].check = this.list[index].check === 0 ? 1: 0;
            console.log(this.list[index].check);
        },
        CheckAll:function(){
            if(this.isCheckAll==false){
                for(var i=0;i<this.list.length;i++){
                    var item = this.list[i];
                    item.check=0;
                }
            }else{
                for(var i=0;i<this.list.length;i++){
                    var item = this.list[i];
                    item.check=1;
                }
            }
            this.isCheckAll=!this.isCheckAll;
        }
    }
})