document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'f352efee7daf4e0280484b6b55fe5d43'; 
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const articlesDiv = document.getElementById('articles');
            data.articles.forEach(article => {
                const articleElement = document.createElement('article');
                const titleElement = document.createElement('h3');
                const descriptionElement = document.createElement('p');

                titleElement.textContent = article.title;
                descriptionElement.textContent = article.description;

                articleElement.appendChild(titleElement);
                articleElement.appendChild(descriptionElement);
                articlesDiv.appendChild(articleElement);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
