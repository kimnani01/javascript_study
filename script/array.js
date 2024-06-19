// 배열 작성법 1.
let yoil = []//빈 배열
console.log(yoil)
yoil = ['월','화','수','목','금','토','일'];
console.log(yoil)
console.log(`오늘은 ${yoil[0]}요일입니다.`)//오늘은 월요일입니다.
// 배열 작성법 2.
let yoil_v2 = new Array(2); //빈 배열*2
console.log(yoil_v2);
console.log(yoil_v2[1])//undefined
yoil_v2[1] = '월'
console.log(yoil_v2)
yoil_v2[0] = '일'
console.log(yoil_v2[0]+'요일')
console.log(yoil_v2)
console.log('--------------------------')
//배열 기초 문제
//1. 색상을 자유롭게 6개 배열로 각각 저장하고 그 중 좋아하는 색상 2개를 골라서 콘솔에 출력하세요.
//콘솔결과 예) 좋아하는 색상은 0, 0 입니다.
let color = new Array('빨간색','주황색','노란색','초록색','파란색','보라색');
console.log(color);
console.log(`좋아하는 색상은 ${color[2]}, ${color[3]} 입니다.`)
//2. 좋아하는 과일 5개 배열로 저장하고 모두 역순으로 출력해보세요.
let fruit = ['사과','복숭아','파인애플','귤','배'];
console.log(fruit)
let result = `${fruit[4]}, ${fruit[3]}, ${fruit[2]}, ${fruit[1]}, ${fruit[0]}`
console.log(result)
//날씨카드(맑음, 흐림, 비, 눈)을 배열로 생성하고 이번주 기상예보를 출력하세요.
//결과 예)
//월요일 : 맑음
//화요일 : 눈
//수요일 : 비
//목요일 : 흐림
//금요일 : 맑음
//토요일 : 맑음
//일요일 : 눈
let weather = ['맑음','흐림','비','눈'];
console.log(yoil)
console.log(weather)
console.log(`${yoil[0]}요일 : ${weather[0]}`)
console.log(`${yoil[1]}요일 : ${weather[3]}`)
console.log(`${yoil[2]}요일 : ${weather[2]}`)
console.log(`${yoil[3]}요일 : ${weather[1]}`)
console.log(`${yoil[4]}요일 : ${weather[0]}`)
console.log(`${yoil[5]}요일 : ${weather[0]}`)
console.log(`${yoil[6]}요일 : ${weather[3]}`)
console.log('------------------------------')
let cgv = new Array(8)
console.log(cgv)
console.log(cgv.length)
cgv[0] = 'A1'
console.log(cgv)
cgv[1] = 'C3'
console.log(cgv)
cgv.push('F5')
console.log(cgv)
//배열 속성 활용
let megabox = []
console.log(megabox)
console.log(megabox.length)
megabox.push('A2')
console.log(megabox)
megabox.push('B1')
console.log(megabox)
megabox.unshift('A1')
console.log(megabox)
megabox.pop()
console.log(megabox)
megabox.shift()
console.log(megabox)
megabox.push('F5','F6')
console.log(megabox)
console.log('--------------------------')
let lottecinema = []
console.log(lottecinema)
lottecinema.push('C9')
console.log(lottecinema)
lottecinema.shift()
console.log(lottecinema)
lottecinema.unshift('F1')
console.log(lottecinema)
lottecinema.push('H9')
console.log(lottecinema)
lottecinema.unshift('A1')
console.log(lottecinema)
//ex) 좌석 배열에 3개의 좌석 정보가 들어있을 때
//예매하신 좌석은 총 3좌석이며 성인 1명당 10000원 기준으로 총 결제 금액은 30000원입니다.
let price = 10000
let total = ''
//결제하기 클릭 수 메시지 출력
lottecinema_total()
//뒤로가기 인원 수정
lottecinema.pop()
//결제하기 클릭 후 메시지 출력
lottecinema_total()
//뒤로가기 인원 수정
lottecinema.push('I6','I7')
//결제하기 클릭 후 메시지 출력
function lottecinema_total(){
    total = `예매하신 좌석은 총 ${lottecinema.length}좌석이며 성인 1명당 ${price}원 기준으로 총 결제 금액은 ${lottecinema.length*price}원 입니다.`
    console.log(total)
}
lottecinema_total()