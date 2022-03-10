// DOM basics

const title = document.getElementById('title')
const subHeaders = document.getElementsByTagName('h2')
const uniqueHeaders = document.getElementsByClassName('unique')
const header = document.querySelectorAll('#superUnique')
const body = document.getElementsByTagName('body')[0]
const input = document.querySelector('#myInput')



// const btn = document.getElementById('myBtn')
// btn.addEventListener('click', function () {
//     const text = input.value
//     const post = document.createElement('h1')
//     post.innerText = text
//     body.append(post)
// })




const createPost = function () {
    const text = input.value
    const post = document.createElement('h1')
    const hr = document.createElement('hr')
    post.innerText = text
    body.append(post, hr)

    input.value = ''
}

btn.addEventListener(click, createPost)

input.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        createPost()
    }
})





const dynamicElem = document.createElement('div')
dynamicElem.id = "myDynamicElem"
dynamicElem.classList.add('dynamic')
dynamicElem.id = "dynamic"
body.append(dynamicElem) //add in the end
// body.prepend(dynamicElem) first