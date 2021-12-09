toastLog("开始执行")
var t = require("mod.js")
t.config = {
    delay: 500, //基础等待时长
    eatType: "", //强化目标枪种
    eatStart: 0, //强化目标起始位置
    //  fixStart: 250, //修理起点坐标,246 = 大破 293 = 掉1编制
    fixMod: 1, //修理模式,0=不检查修理,1=检查修理,2=检查修理并在发现可修理目标时停止
    threshold: 5, //颜色比较灵敏度，0为完全相等，默认4，建议6+
    level: "13-4", //关卡
    minute: 47
}
toastLog(t.config.level)

t.init()
t.addPoint("指挥部", 837, 350);
t.addPoint("机场", 530, 400);
t.addPoint("怪1", 792, 396);
t.addPoint("怪2", 837, 490);
t.addPoint("空弹", 250, 548, 0, 0, 0);
t.addPoint("左边2队", 60, 660, 0, 116, 159);

core = function() {
	supply1()
	bushu()
	t.eatCheck();
	supply2()
	round1()
	round2()
	round3()
}
supply1 = function() { //补给1——切换为补给队
}
supply2 = function() { //补给2——切换为拖尸队——部署
}
bushu = function() { //部署补给队
	log("开始部署")
	t.airport("机场");
    //打手轮换
    exchange();
    //部署    
    t.click("开始");
    t.airport("指挥部");
    t.fix(210);
    t.click("开始");
    t.sleep(1)
    t.click("开始");
    log("部署完毕")
}
round1 = function() {
	toastLog("第1回合开始")
	t.airport("机场");
	t.click("补给");
	t.wait("用户界面");
	t.sleep(2);
	t.click("指挥部");
	t.sleep(3)
//	t.autoSkill("on")
	t.sleep(2);
	t.plan();
	t.sleep(2);
   // t.autoSkill("on");
   t.click("怪1");	t.sleep(1);
   t.click("怪2");t.sleep(1);
   t.click("怪1");
   t.sleep(1);
   t.click("开始")
   t.accounts()
}
round2 = function() {}
round3 = function() {
    //新开
    t.wait("主线选关");
    /*if (counter.times == 10){
        toastLog("统计掉落")
          device.vibrate(2000);
          exit();
    }
    */
    t.sleep(2);
    t.click("关卡4");
    t.sleep(20);
    t.click("普通作战");
    t.sleep(4);t.click("普通作战");
    t.sleep(4);
    t.eatCheck();
}
round4 = function() {}
goEvent = function() {}
exchange = function() {

	if (!t.coloris("空弹")) {
        //打手轮换        
        t.sc("编队", "编队");
        t.wait("梯队界面")
        t.sleep(6);
        t.click(250, 300);
        t.wait("仓库界面")
        t.sleep(3);
        t.click("降序")
        t.sleep(2)
        t.filter("SMG","五星","满级") ;
        t.sleep(5);
       t.click(630+180+180,555-200)
    //   t.click(630,555)
        t.wait("梯队界面");
        t.sleep(2)
        do {
        	t.click("返回");
        	t.sleep(4)
        	t.click("返回");
        	t.sleep(4)
        } while (t.coloris("梯队界面"))

        t.wait("用户界面");
        t.airport("机场");
        t.sleep(1)
    }
}
t.main();
toastLog("执行完毕");