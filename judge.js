/**
 *Created by 飞.no 2017/7/25/001.
 **/

var wordGroup1=JSON.parse(sessionStorage.getItem("aaa"));//把JSON字符串转换成数组。
var group=wordGroup1;
console.log(group);

for (var i=0;i<group.length;i++) {//i初始化为0，i小于数组的长度时i加1.
    $('.identity').eq(0).append(
        "<div class='news'><p class='civilian'>"+group[i]+"" +
        "</p><div class='news-foot'>"+(i+1)+"号"+"</div></div>"
    )
}
    // var $div_1 = $("<div class='news'></div>");
    // var $p_1 = $("<p class='civilian'></p>");
    // var $div_2 = $("<div class='news-foot'></div>");
    // $(".js4-1main").append($div_1);
    // $(".news").append($p_1);
    // $(".news").append($div_2);


// for (var i=0;i<group.length;i++){
//     contant += "<div class='news'>"+'<div class="civilian"> </div>'
//         +'<span class="news-foot">'+Group[i]+"</span>"+"<span class='js4-1main-numBox'>"
//         +(i+1)+"号"+'</span>'+"</div>";
//     //通过提前设好div的css样式，然后通过div层级嵌套，组成一个大contant。再通过+=操作符组成main的内容
// //   这里就是div相加，用加号相连，要注意每个div都要加引号，字也要加字符串，变量要加号相连
//     console.log(contant);
//     $(".js4-1main").eq(0).html(contant);// 把contant通过html()方法写在.js4-1main的eq(0)上面
// }    $('.js4-1main').append(
//     "<div class='news'><p class='civilian'>"+group[i]+"</p><div class='news-foot'>"+(i+1)+"号"+"</div></div>")
// }

// var killNum=sessionStorage.kill;
// var playerNum=sessionStorage.all;
// var group=sessionStorage.allNum;
//
// Group=group.split(",");
//
// console.log("杀手人数"+killNum);
// console.log("玩家总人数"+playerNum);
// console.log(Group);

// for (var i=0;i<group.length;i++){
//
//     // contant += "<div class='news'>" +
//     //     '<div class="civilian"></div>>' + group[i]  +
//     //     '<div class="news-foot">' + (i + 1) + "号" +
//     //     '</div>' + "</div>";
//     // $('.news').appendChild('<div class="civilian"></div>>' + group[i]  +
//     //     '<div class="news-foot">' + (i + 1) + "号" +
//     //     '</div>')
//
// }

 $("ul li").click(function() {
     $(this).clone(true).appendTo("ul"); //复制当前点击的节点，并将它追加到《ul》元素中，
 });                                     //当添加参数时复制它的事件