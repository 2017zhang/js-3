
var wordGroup1=JSON.parse(sessionStorage.getItem("aaa"));//把JSON字符串转换成数组。
// var wordGroup2=localStorage.bbb;
// console.log(wordGroup1,wordGroup2);
// var killNum=1;  //杀手人数：
// var playEerNum=wordGroup1;//玩家总人数
// var smallNum=5;//求值出来的水民人数
var group=wordGroup1;
console.log(group);
// Group =group.split(",");//group遇到","，分成数组中的元素
// // console.log("杀手人数"+killNum);
// // console.log("水手人数"+smallNum);
// // console.log("玩家总人数"+playErNum);
// // console.log(Group);
var clickNum=1;
var playNum=1;



/*页面函数*/
function clickIdentity() {
        if (clickNum > group.length * 2) {
            window.location.href = "judge.html";
        } else if (clickNum % 2 != 0) {
            $("#js3-main_img1").show();
            $("#js3-main_img2").hide();
            $("#js3-1main_role").hide();
            $("#js3-1main_group1").hide();
            $(" .js3-1main_div").hide();
            $("#js3-1main_prompt").hide();
            $("#js3-1main_num").text(playNum);
            $("#js3-1btn").text("查看" + playNum + "号身份")
            playNum++;

        } else {
            $("#js3-main_img1").hide();
            $("#js3-main_img2").show();
            $("#js3-1main_role").show().text("角色:" + group[playNum - 2]);
            $(".js3-1main_div").show();
            $("#js3-1main_prompt").show();
            if (playNum < group.length + 1) {
                $("#js3-1btn").text("隐藏并传递给" + playNum + "号");
            } else {
                $("#js3-1btn").text("查看法官台本");
            }
        }
        clickNum++;

}
    clickIdentity();



