const newsList = [
    {
        id: 1,
        title: 'Yazılım dünyasında atılım',
        description: 'Yazılım geliştiricileri gelişiyor',
        imageUrl: 'https://www.investopedia.com/thmb/XJDLdvCuNbcWk_EVZzXx84ae82c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1258889149-1f50bb87f9d54dca87813923f12ac94b.jpg'
    }
];


export function addNews(title, description, imageUrl) {
    const news = { id: Date.now(), title, description, imageUrl }
    newsList.push(news)
    console.info(newsList)
    return news
}



export function getNews() {
    return newsList
}


export function deleteNews(id) {
    const index = newsList.findIndex(news => news.id === id)
    if (index !== -1) {
        newsList.splice(index, 1)
    }
}


export function updateNews(id, newTitle, newDescription, newImageUrl) {
    const news = newsList.find(news => news.id === id)
    if (news) {
        news.title = newTitle
        news.description = newDescription
        news.imageUrl = newImageUrl
    }
}