import { renderNews } from "./modules/renderNews";
import { handleFormSubmit } from "./modules/formHandler";
import './style.css'


document.getElementById('add-news-form').addEventListener('submit', handleFormSubmit
)

renderNews()