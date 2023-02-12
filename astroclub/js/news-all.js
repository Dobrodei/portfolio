const newsList = document.querySelector('.news__list');

async function fetchNewsJSON() {
  const response = await fetch('https://my-json-server.typicode.com/dobrodei/news-data/posts');
  const news = await response.json();

  newsList.innerHTML = "";

  news.forEach(data => {
    newsList.innerHTML += `
    <li class="news__item">
        <article class="news-article border-radius" id="${data.id}">
          <div class="news-article__img">
            <img src="${data.img}" alt="Фото новости ${data.title}" width="360" height="260">
          </div>
          <div class="news-article__box">
            <ul class="news-article__list">
              <li class="news-article__item">
                <span class="news-article__info news-article__info--views">
                  ${data.views}
                </span>
              </li>
              <li class="news-article__item">
                <time class="news-article__info news-article__info--time">
                  ${data.date}
                </time>
              </li>
            </ul>
            <h3 class="news-article__title">
              ${data.title}
            </h3>
            <p class="news-article__text">
              ${data.text}
            </p>
            <div class="centred">
              <a class="news-article__link" href="news.html#${data.id}">
                Подробнее
              </a>
            </div>
          </div>
        </article>
      </li>
    `
  })
}
fetchNewsJSON()