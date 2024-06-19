//올바른 id, pw => admin, 1234
let userid = 'admin';
let userpw = 1234;
/* if(userid == 'admin'){
    console.log('로그인 성공')
}else{
    console.log('로그인 실패')
} */
// 삼항조건연산자 => 조건식 ? 참실행 : 거짓실행
let result = userid == 'admin' ? '로그인성공' : '로그인실패'
console.log(result)
console.log('-----------------')
//if, else ver1 userpw
if(userpw != '1234'){
    console.log('로그인 실패')
}else{
    console.log('로그인 성공')
}
//삼항 조건 ver2 uerpw
result = userpw == '1234' ? '로그인 성공' :  '로그인 실패'
console.log(result)
//--------------------논리연산+
//&&(and) 모두 참일 때 참
//||(or) 하나라도 참이면 참
console.log('------------------')
//if(비교연산 논리연산 비교연산)
//if(비교연산 논리연산 (비교 논리 비교))
if(userid == 'admin' && userpw == 1234){
    console.log('로그인 성공')
}else{
    console.log('로그인 실패')
}
console.log('------------------')
//let num = prompt('1~20 사이 중좋아하는 수를 입력하세요')
let num = 5
//num이 받은 숫자가 10보다 작으면 '10이하입니다'
//아니면 ''11 이상입니다' 출력
if(num <=10 && num >= 1){
    console.log('10이하입니다')
}else{
    console.log('10이상입니다.')
}
console.log('----------------')
//거짓일 때 추가 조건을 만들고 싶다면? else if
/*
if(조건식1){
    조건식1이 참일 때 실행결과
}else if(조건식2){
    조건식 1은 거짓이고 조건식2가 참일 때 실행결과
}else if(조건식3){
    조건식1, 조건식2 모두 것짓이고 조건식3 참일 때 실행결과
}else {
    조건식1,2,3 모두 거짓일 때 자동 실행
}
*/
//위 아래 왼쪽 오른쪽 게임 캐릭터 이동 게임
const move = "왼쪽"
/* if(game_move == "왼쪽"){
    console.log('왼쪽 1칸 이동')
}else if(game_move == '오른쪽'){
    console.log('오른쪽 1칸 이동')
}else if(game_move == '위쪽'){
    console.log('위쪽 1칸 이동')
}else if(game_move == '아래쪽'){
    console.log('아래쪽 1칸 이동')
}else {
    console.log('잘못입력하셨습니다.')
} */
//논리연산을 이용한 간편한 처리 방법
if(move=='왼쪽' || move=='오른쪽' || move=='위쪽' || move=='아래쪽'){
    console.log(`${move} 1칸 이동`)
}else{
    console.log(`잘못 입력하셨습니다`)
}
console.log('-------------------')
//키오스트 소스 선택
//설탕, 케챱, 머스터드
//위 3개 중 하나의 소스를 선택하면 "oo 소스 추가"
//소스 선택 안하셨습니다.
const source = ''
if(source=='설탕' || source=='케챱' || source=='머스터드'){
    console.log(`${source} 소스 추가`)
}else{
    console.log(`소스 선택 안하셨습니다`)
}
//if, else if, else 연습문제
//A~F 점수에 따라 평균 등급
//0~100 사이 입력하세요.
//100~90 A
//89~80 B
//79~70 C
//69~60 D
//59 이하면 F
//0~100 사이가 아닌 잘못된 숫자 입력 시 '오류발생'
//A~F 결과기준 출력 예시 => "당신의 점수는 ? 학점입니다"
const score = 90
let credit = ''
/* if(90 <= score && score <= 100){
    credit = `A`
}else if(80 <= score && score <= 89){
    credit = `B`
}else if(70 <= score && score <= 79){
    credit = `C`
}else if(60 <= score && score <= 69){
    credit = `D`
}else if(score <= 59){
    credit = `F`
}else{
    console.log(`오류발생`)
} */
if(score > 0 && score < 101){
    //1~100 참으로 인식하는 위치
    if(score >= 90){//100~90
        credit = 'A'
    }else if(score >= 80){//89~80
        credit = 'B'
    }else if(score >= 70){//79~70
        credit = 'C'
    }else if(score >= 60){//69~60
        credit = 'D'
    }
}else{
    alert('잘못 입력하셨습니다.')
}
console.log(`당신의 점수는 ${credit}학점입니다.`)
//---------------------------

const birthday_flower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손, 양보',
    },{
        month:3,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:4,
        flower:'스위트피',
        content:'추억, 즐거움'
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함'
    },{
        month:6,
        flower:'백합',
        content:'순결'
    },{
        month:7,
        flower:'미나리아재비',
        content:'아름다움, 인격'
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀, 상상, 견고함'
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑'
    },{
        month:10,
        flower:'금잔화',
        content:'실망, 비애'
    },{
        month:11,
        flower:'국화',
        content:'성실, 진실'
    },{
        month:12,
        flower:'포인세티아',
        content:'축하, 감사'
    }
]

console.log(birthday_flower)
console.log(birthday_flower[0])
console.log(birthday_flower[0].flower)
//사용자가 입력한 생일을 체크해서 버튼 클릭 시
//사용자가 새일 1월이라면 1월에 대한 탄생화와 꽃말이 result 출력
//출력 예) ?월에 탄생화는 ?, 꽃말은 ? 입니다.
//잘못입력하셨습니다. 1~12월 중 입력해주세요.
const month = document.querySelector('#month')
const btn = document.querySelector('#btn')
const p_result = document.querySelector('.result')
console.log(month, btn)
let f = ''
let c = ''
/*
btn.addEventListener('click', () => {
    if(month.value >= 1 && month.value <= 12){
        if(month.value == 1){
            f = birthday_flower[0].flower
            c = birthday_flower[0].content
        }else if(month.value == 2){
            f = birthday_flower[1].flower
            c = birthday_flower[1].content
        }else if(month.value == 3){
            f = birthday_flower[2].flower
            c = birthday_flower[2].content
        }else if(month.value == 4){
            f = birthday_flower[3].flower
            c = birthday_flower[3].content
        }else if(month.value == 5){
            f = birthday_flower[4].flower
            c = birthday_flower[4].content
        }else if(month.value == 6){
            f = birthday_flower[5].flower
            c = birthday_flower[5].content
        }else if(month.value == 7){
            f = birthday_flower[6].flower
            c = birthday_flower[6].content
        }else if(month.value == 8){
            f = birthday_flower[7].flower
            c = birthday_flower[7].content
        }else if(month.value == 9){
            f = birthday_flower[8].flower
            c = birthday_flower[8].content
        }else if(month.value == 10){
            f = birthday_flower[9].flower
            c = birthday_flower[9].content
        }else if(month.value == 11){
            f = birthday_flower[10].flower
            c = birthday_flower[10].content
        }else{
            f = birthday_flower[11].flower
            c = birthday_flower[11].content
        }
        console.log(month.value)
        console.log(f, c)
        p_result.innerHTML = `${month.value}월의 탄생화는 ${f}, 꽃말은 ${c}입니다.`
        }else{
        alert(`잘못 입력하셨습니다. 1~12월 중 입력해주세요.`)
    }
}) 
*/
btn.addEventListener('click', () => {
    if(month.value > 0 && month.value <13){
        console.log(month.value)
        let m = month.value
        p_result.innerHTML = `${m}월의 탄생화는 <span>${birthday_flower[m-1].flower}</span>,<br>꽃말은 <span>${birthday_flower[m-1].content}</span>입니다.`
    }else{
        alert(`잘못 입력하셨습니다. 1~12월 중 입력해주세요.`)
    }
})