#include<iostream>
#include<iomanip>
using namespace std;

int main(){
	int data[5] = {34,56,4,10,77};
	int insert;
	for(int next = 0; next < 5; next++){
		insert = data[next];
		int moveItem = next;
		while((moveItem > 0) && (data[moveItem - 1] > insert)){
			data[moveItem] = data[moveItem - 1];
			moveItem --;
		}
		data[moveItem] = insert;
	}
	for(int i = 0; i < 5; i++)
		cout <<setw(4) << data[i];
}