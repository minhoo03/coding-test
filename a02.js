// 삼각형 판별

function solution(a, b, c) {
    let answer

    let max = Math.max(a, b, c)
    
    if(max > a + b) {
        return "No"
    } else {
        return "Yes"
    }
}

// console.log(solution(6, 2, 11))
console.log(solution(6, 7, 11))