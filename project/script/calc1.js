//num1, num2 사용자가 숫자 값을 입력했을 때
//결과버튼을 클릭했을 때
//#result 결과 위치에 "정답은 oo 입니다!" 출력
const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const btn = document.querySelector('button')
const result = document.querySelector('#result')
console.log(num1.value) //초기값
btn.addEventListener('click',calc)
function calc(){
    console.log(num1.value)
    console.log(num2.value)
    let a = Number(num1.value)
    let b = Number(num2.value)
    let total = a+b 
    console.log(total)
    console.log(typeof total)
    result.value = `정답은 ${total.toLocaleString('ko-kr')} 입니다!`
    console.log(result.value)
}