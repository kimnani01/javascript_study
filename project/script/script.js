//변수
const sub = document.querySelectorAll('.sub')
const sub_bg = document.querySelector('.sub_bg')
const nav = document.querySelector('nav')
const nav_clone = nav.cloneNode(true)//nav복제 변수
const m_nav = document.querySelector('.m_nav')//복제대상 붙여넣기 부모
console.log(sub, sub_bg, nav, nav_clone, m_nav)

//모든 서브 숨기기
//sub_bg.style.display = 'none'
//for(let i of sub){i.style.display = 'none'}

//m_nav 모바일 전용 메뉴의 기존 내비게이션 태그 마지막 자식 복붙
m_nav.appendChild(nav_clone)

//메뉴에 마우스 올리면 서브 메뉴 나타나기(높이 길어지는 효과)
//height + transition + overflow
//1. 숨기는 처리를 display가 아닌 height 값으로 재설정 = 0
sub_bg.style.height = '0';
sub_bg.style.transition = 'height 0.3s'
for(let i of sub){
    i.style.height = '0'; 
    i.style.overflow = 'hidden';
    i.style.transition = 'height 0.3s'
}
//2. 메뉴 마우스 올리면 서브, 서브배경 보이기
nav.addEventListener('mouseover',()=>{
    sub_bg.style.height = '220px'
    for(let i of sub){
        i.style.height = '220px';
    }
})
nav.addEventListener('mouseout',()=>{
    sub_bg.style.height = '0'
    for(let i of sub){
        i.style.height = '0';
    }
})

//====================모바일 nav js
//m_nav 상단 변수 존재함
//1. 모바일 전체메뉴 아이콘(m_nav > all_nav) 클릭 시
//1-1. 모바일 내비가(m_nav > nav) 보이는 상태라면 -> 숨기기
//1-2. 모바일 내비가 숨겨진 상태라면 -> 보이기
const all_nav_m = m_nav.querySelector('.all_nav')
const nav_m = m_nav.querySelector('nav')
let boolean = false;//안보이는 상태(기본)
nav_m.classList.add('m_nav_hide')//숨긴값 클래스 적용
console.log(all_nav_m, nav_m) //ok
all_nav_m.addEventListener('click', (e)=>{
    e.preventDefault(); //a  href 막기
    //=============클래스(classList.toggle)
    nav_m.classList.toggle('m_nav_hide')
    //=============조건문(if) 
    //boolean = !boolean
    /* if(boolean == true){
        nav_m.style.display = 'block'
    }else{
        nav_m.style.display = 'none'
    } */
    //삼항조건연산자 조건 ? 참 : 거짓결과;
    //nav_m.style.display = boolean ? 'block' : 'none'
})
//2. 모바일 서브 메뉴 모두 숨기기(기본)
//3. 모바일 주 메뉴 클릭 시
//3-1. 모든 서브 메뉴 숨기기
//3-2. 해당 주 메뉴의 서브 메뉴 보이기
const sub_m = nav_m.querySelectorAll('.sub')
const gnb_li_m = nav_m.querySelectorAll('.gnb > li')
console.log(sub_m, gnb_li_m)
for(i of sub_m){i.style.display = 'none'}
for (let i of gnb_li_m){
    console.log(i)
    i.addEventListener('click',()=>{
        console.log(i.children[1])
        for(j of sub_m){j.style.display = 'none'}
        i.children[1].style.display = 'block'
    })
}