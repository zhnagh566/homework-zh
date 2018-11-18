仔细观察您洗衣机的运作过程，运用Top-down设计方法和Pseudocode 描述洗衣机控制程序。假设洗衣机可执行的基本操作如下：

 water_in_switch(open_close)  // open 打开上水开关，close关闭 
 water_out_switch(open_close)  // open 打开排水开关，close关闭 
 get_water_volume()  //返回洗衣机内部水的高度
 motor_run(direction) // 电机转动。
 left左转，right右转，stop停 time_counter()  // 返回当前时间计数，以秒为单位
 halt(returncode) //停机，success 成功 failure 失败
1）请使用伪代码分解“正常洗衣”程序的大步骤。包括注水、浸泡等 
        
        放衣服
        注水浸泡
        机器转动，开始洗衣
        排水
        注水
        机器转动，开始冲衣
        排水
        甩干
        结束运转

2）进一步用基本操作、控制语句（IF、FOR、WHILE等）、变量与表达式，写出每 个步骤的伪代码

        Put clothes in
        water_in_switch(open)
        Machine put water in
        if get_water_volume() equal standard_volume
        water_in_switch(close)
        dip in clothes in a limited time
        END WHILE on the preset time
        motor_run(left)
        motor_run(right)
        END WHILE on the preset time
        water_out_switch(open)
        REPEAT Push water
        UNTIL get_water_volume() == 0
        water_out_switch(close)
        repeat the operation
        dry clothes
        halt(success)

3）根据你的实践，请分析“正常洗衣”与“快速洗衣”在用户目标和程序上的异同。 你认为是否存在改进（创新）空间，简单说明你的改进意见？

    二者的区别在于预设时间长短不同，且预定注水量不相同；
    快速洗衣为时间紧迫之人提供便利，二者的机器运作顺序相同。

    可以通过在相同的时间改变洗衣机转动的速率和强度来对洗衣级进行改良

4）通过步骤3），提取一些共性功能模块（函数），简化“正常洗衣”程序，使程序 变得更利于人类理解和修改维护。例如： wait(time) //等待指定的时间； 注水(volume,timeout) //在指定时间内完成注水，否则停机； 排水(timeout)。等子程序

    short every motor time 

    change every motor angle