const bg =document.querySelectorAll('.bg')
const btn =document.querySelectorAll('.btn')
const color = ['yellow', 'aqua', 'lime', 'hotpink']
console.log(bg,btn)
//스크롤 움직일 때 인식하는 이벤트
window.addEventListener('scroll', function(){
    //console.log(this.window.pageYOffset)
    //btn[0].innerHTML = `${window.pageYOffset}`
    //연습1. pageY 좌표가 200이상일 때 1번 버튼 배경색 노랑
    //연습1. pageY 좌표가 600이상일 때 2번 버튼 배경색 v파랑
    /* if(window.pageYOffset >= 200){
        btn[0].style.backgroundColor = 'yellow'
    }
    if(this.window.scrollY >= 600){
        btn[1].style.backgroundColor= 'skyblue'
    } */
    //특정 DOM 위치 자동 인식하기
    if(bg[0].getBoundingClientRect().y <= 400){
        btn[0].style.backgroundColor= color[0]
    }
    if(bg[1].getBoundingClientRect().y <= 400){
        btn[1].style.backgroundColor= color[1]
    }
    if(bg[2].getBoundingClientRect().y <= 400){
        btn[2].style.backgroundColor= color[2]
    }
    if(bg[3].getBoundingClientRect().y <= 400){
        btn[3].style.backgroundColor= color[3]
    }
})