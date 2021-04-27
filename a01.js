// 세 수 중 최솟값

// 100이하 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력

function solution(a, b, c) {
    let answer

    if(a > b) {
        answer = b
    } else if(b > c) {
        answer = c
    } else {
        answer = a
    }

    return answer
}

console.log(solution(2, 5, 1))