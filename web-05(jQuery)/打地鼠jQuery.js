var count = 0;  // 分数
var status = 0; 
_clock = 31;

$(function(){
    $(function(){
        for (var i = 0; i < 60; i++) {
            var new_button = document.createElement("input");
            $("#container").append(new_button);
            $("input").attr("type", "radio");
            $("input").attr("name", "mouse");
            $("input").className = "hole";
            $("input").click($(function(event){
                if (_clock != 0) {
                    if (before == true) { // before 是点击前的状态
                        count++;
                        this.checked = false;  // 取消点击状态
                        //Random_occur();
                        $(function(){
                            if (_clock != 0) { // 避免游戏结束后还能继续操作
                                current = Math.round(Math.random()*60-1);  // 使范围处于0～59，减一是为了避免出现60的情况
                                button[current].checked = true;
                            }
                        });
                    } else {  // 非目标按钮
                        count--;
                        this.checked = false;
                        button[current].checked = true; // 由于单选框的特性，点击其他按钮时原来的按钮也会消失，所以要给原来的按钮重新checked
                    }
                    $("#score").val(count);
                } else { // 避免接触后继续对按钮操作
                    this.checked = false;
                }
            }));

            $("input").mousedown($(function(){
                before = this.checked;
            }));
        }
    });

    $("#start_stop").click(function(){
        $(function () {
            if (status == 0) {  // 初始化
                status = 1;
                count = 0;
                _clock = 31;
                Random_occur();
                $("#score").val(count);
                $("#time").val(_clock);
                $("#result").val("Playing");
                //clock();
        $(function() {
            _clock = _clock-1;
            $("#time").val(_clock);
            time_value = setTimeout(clock, 1000);
            if (_clock == 0) {
                clearInterval(time_value);
                $("#result").val("Gameover");
                alert("Game Over.\n Your score is: " + $("#score").val());
                status = 0;
                button[current].checked = false;
            }
        });
        
            } else {
                alert("Game Over.\n Your score is: " + $("#score").val());
                $("#result").val("Gameover");
                clearInterval(time_value);
                button[current].checked = false;
                _clock = 0;
                status = 0;
            }
        });        
});
    button = $(".hole");
});

/* 计时器 */

/* Start Game | Stop Game 按钮的处理器 */

/* 产生随机数的函数 */

