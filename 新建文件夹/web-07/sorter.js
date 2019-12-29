$.tablesorter.addParser({  
    id: "num", //指定一个唯一的ID  
    is: function(s){  
        return false;  
        },  
    format: function(s){  
            return s.substring(0,s.length-2);
            },  
    type: "numeric" //按数值排序  
});  

$("#todo").tablesorter({
    headers:{
        6:{
            sorter:"num"
        },
        7:{
            sorter:"num"
        },
        8:{
            sorter:"num"
        }
    }
}); 

$("#staff").tablesorter({
    headers:{
        6:{
            sorter:"num"
        },
        7:{
            sorter:"num"
        },
        8:{
            sorter:"num"
        }
    }
}); 

