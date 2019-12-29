$(function(){
    $(CreatePuzzle);
    $("#restart").click(ramdomPosition);
});

$(function IsPuzzleValid() {
    var count = 0;

    for (var i = 0; i < 16; i++) {
        for (var j = i+1; j < 16; j++) {
            if (random_array[j] < random_array[i]) {
                count++;
            }
        }
    }
    return count % 2 === 0;
})

$(function CreatePuzzle() {
    for (var i = 1; i <= 16; i++) {
        var frag = document.createElement("div");
        //为每一个板块添加事件处理器（点击则板块移动）
        frag.addEventListener("click", PicMove);
        frag.className = "puzzle_part" + count + " position" + i;
        $("#puzzle").appendChild(frag);
        frag.id = "pic" + i;
    }
})

var count = 0;

$(function change_img(event) {
    if (count < 1) count++;
    else return;

    for (var i = 0; i < 16; i++) 
        puzzle.childNodes[i].className += " puzzle_part" + count;
})

$(function ramdomPosition(event) {
    for (var i = 1; i <= 16; i++) {
        $("#pic" + i).className = "puzzle_part" + count + " position" + i;
    }

    var frag = $("#puzzle").childNodes;
    random_array = [];

    for (var i = 0; i < 15; i++) {
        random_array[i] = i+1;
    }

    //关键函数
    $(function cmp() { 
        return 0.5-Math.random(); 
    });

    while(1) {
        random_array.sort(cmp);
        if ($(IsPuzzleValid))
            break;
    }

    for (var i = 0; i < 15; i++) {
        frag[i].className = "puzzle_part" + count + " position" + random_array[i];
    }
})

$(function PicMove(event) {
    var PicOffset_top = PicOffset.offsetTop;
    var PicOffset_left = PicOffset.offsetLeft;
    var _offset_top = this.offsetTop;
    var _offset_left = this.offsetLeft;
    if ((Math.abs(PicOffset_top-_offset_top) == 127 && PicOffset_left == _offset_left) ||
        (Math.abs(PicOffset_left-_offset_left) == 127 && PicOffset_top == _offset_top)) {
        var str = PicOffset.className;
        $("#pic16").className = this.className;
        this.className = str;
        $(check); 
    }
})
    
$(function check() {
    for (var i = 1; i <= 16; i++) {
        //var item = $("#pic"+i);
        if ($("#pic"+i).className != "puzzle_part" + count +" position"+i &&
        $("#pic"+i).className != "puzzle_part0" + " position" + i + " puzzle_part1") {
            return;
        }
    }
    alert("太棒了！你完成了一次拼图:)");
})


