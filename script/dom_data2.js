const data = [
    {//첫번째 도서
        name:'나를 소모하지 않는 현명한 태도에 관하여',
        writer:['마티아스 뇔케', '이미옥'],
        publisher:'퍼스트 펭귄',
        date:'2024년 03월',
        price:17800,
        sale:10,
        tag:['#얼리리더', '#이달의굿즈', '#나를바라보다', '#인관관계에대하여']
},{//두번째 도서
        name:'하루 한 장 나의 어휘력을 위한 필사 노트',
        writer:['유선경',],
        publisher:'위즈덤하우스',
        date:'2024년 03월',
        price:23800,
        sale:10,
        tag:['#얼리리더', '#필사', '#쓰는맛']
},{
    //세번째 도서
        name:'불변의 법칙',
        writer:['모건 하우절','이수경'],
        publisher:'서삼독',
        date:'2024년 02월',
        price:25000,
        sale:10,
        tag:['#얼리리더', '#부자되는법', '#부자만들기', '돈좀벌어보자', '돈모으고싶을때']
}]
//div.book > h1
//div.book > p.info 
//div.book > p.info > a + span
//div.book > p.price
//div.book > p.price > em + span
//div.book > p.tag
let book = '';
const section = document.querySelector('section')
console.log(book, section)
book = `<div class="book">`
//내용 시작
book += `<h1>${data[0].name}</h1>`
book += `<p class="info">`
book += `${data[0].writer[0]} 저/${data[0].writer[1]} 역`
book += `<a href="#">${data[0].publisher}</a>`
book += `<span>${data[0].date}</span>`
book += `</p>`
book += `<p class="price">`
book += `<em>${data[0].price}원</em>`
book += `<span>(${data[0].sale}% 할인)</span>`
book += `</p>`
book += `<p class="tag">`
book += `${data[0].tag[0]}
        ${data[0].tag[1]}
        ${data[0].tag[2]}
        ${data[0].tag[3]}`
book += `</p>`
//내용 끝
book += `</div>`
section.innerHTML = book