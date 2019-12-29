var clear=false;
function f(event){
  var btn=event.target;
  var $block=$("#block");
  var temp=$block.html();
  var value=$(btn).val();

  //将除INPUT对象全部返回
  if($(btn).prop("nodeName")!="INPUT"){
    return;
  }

  //判断是否需要清除屏幕
  if(clear==true){
    temp="";
    clear=false;
  }

  //删除操作
  if(value=="C"){
    temp="";
    $block.html(temp);
  }

  else if(value=="←"){
    temp=temp.substring(0,temp.length-1);
    $block.html(temp);
  }

  //点击等于号时
  else if(value=="="){
    var result="="+eval(temp);
    $block.html(temp+result);
    clear=true;
  }
  
  //点击其他按钮时
  else{
    temp=temp+value;
    $block.html(temp);
  }
}
