/* 
계산식) 적정체중 = (본인신장-100)*0.9
- 현재 키와 몸무게를 자유롭게 입력하고
- 버튼을 눌렀을 때 최종 목표 칸에 메시지 출력하기
결과예시) 적정체중은 ?kg이며 ?kg 초과되셨습니다.
*/
const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const goals = document.querySelector('#goals')
const btn = document.querySelector('#result')
btn.addEventListener('click',function(){
    let save = (Number(height.value)-100)*0.9
    //console.log(save)
    let plus = Number(weight.value)-save
    //console.log(plus)
    goals.value = `적정체중은 ${save}kg이며 ${plus}kg 초과되셨습니다.`
    console.log(goals.value)
})
