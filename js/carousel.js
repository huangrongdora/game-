var i = 0;
$(document).ready(function () {
    var arr = ["timg1.jpg", "timg2.jpg", "timg3.jpg"];
    var ord = 0; //代表当前图片的序号，从0开始。
    var myTimer = null;

    function initUI() {
        $("#carousel li:first").css({
            "opacity": "1"
        });
        $("#carousel li:first").siblings().css({
            "opacity": "0"
        });
    }

    function initEvent() {
        $("#carousel").mouseenter(function () {
            stopPlay();
        });

        $("#carousel").mouseleave(function () {
            autoPlay();
        });

        $("#carousel li").click(function () {
            goImg($("#carousel li").index(this));
        });

        $("#leftArrow").click(function () {
            let transord = ord - 1;
            transord = transord < 0 ? arr.length - 1 : transord;
            goImg(transord);
        });

        $("#rightArrow").click(function () {
            let transord = ord + 1;
            transord = transord > arr.length - 1 ? 0 : transord;
            goImg(transord);
        });
    }

    //1、自动播放
    function autoPlay() {
        myTimer = setInterval(function () {
            //一、改变数据
            // 1、记录当前序号（淡出的图片序号）
            let outOrd = ord;
            //2、改变要显示的图片的序号（淡出图片序号加一）
            ord++;
            if (ord > arr.length - 1) {
                ord = 0;
            }
            //二、改变外观
            let $img = $("#carousel img");
            //1、淡入淡出效果
            //让一张(outOrd)淡出 当前消失
            $img.eq(outOrd).animate({
                "opacity": 0
            }, 1000);
            //让一张(ord)淡入下一张图片显示
            $img.eq(ord).animate({
                "opacity": 1
            }, 1000);
            //2、改变豆豆的颜色；
            $("#carousel li").eq(ord).css({
                "opacity": 1
            }).siblings().css({
                "opacity": 0
            });
        }, 2000);
    }

    //2、停止播放
    function stopPlay() {
        window.clearInterval(myTimer);
    }

    //3、跳转到指定的图片
    function goImg(transOrd) {
        //一、改变数据
        // 1、记录当前序号（淡出的图片序号）
        let outOrd = ord;
        //2、改变要显示的图片的序号（传入的图片序号）
        ord = transOrd;
        if (ord > arr.length - 1) {
            ord = 0;
        }
        //二、改变外观
        let $img = $("#carousel img");
        //1、淡入淡出效果
        //让一张(outOrd)淡出 当前消失
        $img.eq(outOrd).animate({
            "opacity": 0
        }, 2000);
        //让一张(ord)淡入下一张图片显示
        $img.eq(ord).animate({
            "opacity": 1
        }, 2000);
        //2、改变豆豆的颜色；
        $("#carousel li").eq(ord).css({
            "opacity": 1
        }).siblings().css({
            "opacity": 0
        });
    }

    $(function () {
        //1、初始化界面
        initUI();
        //2、绑定事件
        initEvent();
        //3、自动播放
        autoPlay();
    });

})