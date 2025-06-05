#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int n, int w, int num) {
    int answer = 0;
    if(n%w == 0){
        answer = (n/w) - (num/w)+1;
    } else {
        
    }
    return answer;
}

if (n%w == 0)
    n/w 줄 만큼 쌓임
else if (n%w != 0)
    n/w + 1 줄 만큼 쌓임
    
    
if (num%w == 0 )
    if ((num/n)%2 == 1)
		가장 오른쪽
    if ((num/n)%2 == 0)
        가장 왼쪽
else if (num%w != 0)
    num/w + 1번째 줄에 있음
    if (n%w > num%w || n%w == num%w)
        n/w + 1 - num/w + 1 개 만큼 빼면 나옴
    else if (n%w < num%w)
        (n/w + 1 - num/w + 1) - 1 개만큼 빼면 나옴
        
        