import { getNews, deleteNews } from "./newsService";

import { handleEdit } from "./formHandler";

export function renderNews() {
    const newsContainer = document.getElementById("news-container")
    newsContainer.innerHTML = ""

    const newsList = getNews()

    newsList.forEach(news => {
        const newsItem = document.createElement('div')
        newsItem.classList = 'news-item'

        newsItem.innerHTML = `
           <h2>${news.title}</h2>
            <p>${news.description}</p>
            <img src="${news.imageUrl}" alt="${news.title}" />
            <button class="edit-btn" data-id="${news.id}">Edit</button>
        <button class="delete-btn" data-id="${news.id}">Delete</button>
        `;
        newsContainer.appendChild(newsItem)
    })

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', () => {
            const id = parseInt(button.getAttribute('data-id'));
            deleteNews(id)
            renderNews()
        })
    })


    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', () => {
            const id = parseInt(button.getAttribute('data-id'))
            handleEdit(id)
        })
    })





}