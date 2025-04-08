import { getData } from "./data";
import './styles.css'
import likeImage from './assets/images/like.jpg'
import './test/date/printDate'





const blogs = getData()
const ul = document.createElement('ul')
blogs.forEach(element => {
    const li = document.createElement('li')
    li.textContent = element
    ul.append(li)
});
document.body.append(ul)

const image = document.createElement('img')
image.src = likeImage
document.body.prepend(image)

const h1 = document.createElement('h1')
h1.innerText = '博客列表'
document.body.prepend(h1)




