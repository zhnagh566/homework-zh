# 贪吃蛇实验报告

按照要求，程序的主题结构为

    输出字符矩阵
    WHILE not gameover DO
        ch = 等待输入
        CASE 'A':
            向左移动一个单位
            break
         CASE 'D':
            向右移动一个单位
            break
         CASE 'S':
            向下移动一个单位
            break
         CASE 'W':
            向上移动一个单位
            break
        END CASE
        输出字符阵
    END WHILE
    输出 game over

按照top—down方法编该程序

    #include<stdio.h>
    #include<stdlib.h>
    #include<time.h>

    #define SNAKE_MAX_LENGTH 20
    #define SNAKE_HEAD 'H'
    #define SNAKE_BODY 'X'
    #define BLANK_CELL ' '
    #define SNAKE_FOOD '$'
    #define WALL_CELL '*'

    void snakeMove (int, int);
    void put_money(void);
    void output(void);
    void gameover(void);

    char map[12][13] =	{"************",
				"*XXXXH     *",
				"*          *",
				"*          *",
				"*          *",
				"*          *",
				"*          *",
				"*          *",
				"*          *",
				"*          *",
				"*          *",
				"************"};	
    int snakeX[SNAKE_MAX_LENGTH] = {5, 4, 3, 2, 1}; 
    int snakeY[SNAKE_MAX_LENGTH] = {1, 1, 1, 1, 1};
    int snakeLength = 5;

该程序的主程序为

    int main() { 	
	    char ch='d';//默认向右走 	
	    put_money(); 	
	    output();
	    while(1) {	
		    switch(ch) {			
			case 'A': 				
				snakeMove (-1, 0);				
				break;			
			case 'S':				
				snakeMove (0, 1);				
				break;			
			case 'D':				
				snakeMove (1, 0);				
				break; 			
			case 'W':				
				snakeMove (0, -1);				
				break;			
		    }
            if(judge() == 0){			
			gameover();			
			break;		
		    }	
	    }
    }

具体函数编写选择以伪代码的方式呈现

首先，snakeMove函数

    确定食物的位置
    根据食物位置移动
    IF 吃到食物
    蛇的长度加一
    IF 碰壁 OR 碰到自己的身体
    GAME OVER

put money函数

    WHILE map 中空白区域没有Money
    Money以随机形式出现在空白处
    当游戏结束时
    put money 的行为也结束

output

    IF 游戏结束
    输出蛇的长度

gameover

    IF 蛇头碰壁 OR 触碰到自己的身体
    游戏结束
    弹出结果



