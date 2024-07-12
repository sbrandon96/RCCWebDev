const apiKey = 'f352efee7daf4e0280484b6b55fe5d43';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=7&apiKey=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const articles = data.articles;
        const articlesDiv = document.getElementById('articles');

        articles.forEach(article => {
            const articleElement = document.createElement('article');
            const titleElement = document.createElement('h3');
            const descriptionElement = document.createElement('p');
            const linkElement = document.createElement('a');

            titleElement.textContent = article.title;
            descriptionElement.textContent = article.description;
            linkElement.href = article.url;
            linkElement.target = '_blank';
            linkElement.textContent = 'Read more';

            articleElement.appendChild(titleElement);
            articleElement.appendChild(descriptionElement);
            articleElement.appendChild(linkElement);
            articlesDiv.appendChild(articleElement);
        });
    })
    .catch(error => console.error('Error fetching news articles:', error));
