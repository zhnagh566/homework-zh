var str=null;
var block=null;
var equal=null;
var clear=null;
var back=null;

window.onload=function(){
    str=document.getElementsByTagName("td");
    block=document.getElementById("block");
    equal=document.getElementById("equal");
    back=document.getElementById("back");
    clear=document.getElementById("clear");
    read_data();
}

function read_data(){
    for(var i=0;i<str.length;i++){
        var is_ID=str[i].getAttribute("id");//判断元素是不是id类型
        if(is_ID){
            continue;
        }
        str[i].onclick=function(){
        block.innerHTML+=this.innerHTML;//将点击的内容显示在屏幕上
    }

    clear.onclick=function(){
        block.innerHTML="";//清空屏幕
    }
    
    back.onclick=function(){
        var str=block.innerHTML;
        block.innerHTML=str.substr(0,str.length-1);//回退
    }
    
    equal.onclick=function(){
        block.innerHTML=eval(block.innerHTML);//进行计算
    }
}}
