import { addNews, getNews, updateNews } from "./newsService";
import { renderNews } from "./renderNews";

let editMode = false;
let editId = null;
export function handleFormSubmit(event) {
    event.preventDefault()

    const title = document.getElementById('news-title').value
    const description = document.getElementById('news-description').value
    const imageUrl = document.getElementById('news-image').value

    if (editMode) {
        updateNews(editId, title, description, imageUrl)
    } else {
        addNews(title, description, imageUrl)
    }

    renderNews()
    event.target.reset()
}


export function handleEdit(id) {
    const news = getNews().find(news => news.id === id)

    console.log(news)

    if (news) {
        document.getElementById('news-title').value = news.title
        document.getElementById('news-description').value = news.description
        document.getElementById('news-image').value = news.imageUrl
        editMode = true
        editId = id
    }
}