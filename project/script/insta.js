//1.like(a) 클릭 시 like_off.png -> like_on.png 변경
const like = document.querySelector('.like')
console.log(like)
console.log(like.children)
console.log(like.children[0])
console.log(like.children[0].src)
const like_func = () => {
    like.children[0].src = "./images/like_on.png";
}
like.addEventListener('click', like_func)

const comments = document.querySelector('.comments')
const comments_func = () => {
    comments.children[0].src = "./images/comment_on.png";
}
comments.addEventListener('click', comments_func)
const share = document.querySelector('.paper')
const share_func = () => {
    share.children[0].src = "./images/paper_on.png"
}
share.addEventListener('click',share_func)