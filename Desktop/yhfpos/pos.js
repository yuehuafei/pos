/**
 * Created by xxx on 17-7-11.
 */
var inputs=[
{
    barcode: 'ITEM000000',
        name: '可口可乐',
    unit: '瓶',
    price: 3.00,
    count: 5
},
{
    barcode: 'ITEM000001',
        name: '雪碧',
    unit: '瓶',
    price: 3.00,
    count: 2
},
{
    barcode: 'ITEM000004',
        name: '电池',
    unit: '个',
    price: 2.00,
    count: 1
}
]
function sum(inputs) {
    var totalMoney=0;
    for(var i=0;i<inputs.length;i++)
        totalMoney+=inputs[i].count*inputs[i].price;
    return totalMoney;
}
function strConnect(inputs,totalMoney){
    var strs="***<没钱赚商店>收据***\n";
    for(var i=0;i<inputs.length;i++)
    strs+="名称："+inputs[i].name+"，数量 ："+inputs[i].count+inputs[i].unit+"，单价："+inputs[i].price.toFixed(2)+"(元)，"
        +"小计："+(inputs[i].count*inputs[i].price).toFixed(2)+"(元)\n";
    strs+="----------------------\n"+"总计："+totalMoney.toFixed(2)+"元\n"+"**********************";
    return strs;
}
function print(strs){
    console.log(strs);
}
print(strConnect(inputs,sum(inputs)));
