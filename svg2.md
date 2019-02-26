#  排序算法

## 一、冒泡排序

举一个简单的例子说明，例如说对4，3，5，1，6这五个数字排序，从四开始依次和之后的元素进行比较，因为4比3大，4和3交换位置，依此类推；

冒泡排序的算法实现：

	int main(){
	    int n = sizeof(array)/4;
		for(int i = 0;i < n; i++){
		  for (int j = i;j < n; j++){
		    if(array[i] > array[j]){
			int temp = array[i];
			array[i]=array[j];
		        array[j]=temp;
		    }
		  }
		}
	}
