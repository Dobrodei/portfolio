const hash = window.location.hash
const id = String(hash).split('')[1]


const newsBox = document.querySelector('.one-news__box');

async function fetchNewsJSON(id) {
  const response = await fetch(`https://my-json-server.typicode.com/dobrodei/news-data/posts/${id}`);
  const news = await response.json();

  console.log(news);

  newsBox.innerHTML = `
        <article class = "news-article border-radius news-article--full" id = "${news.id}">
          <div class="news-article__img">
            <img src="${news.img}" alt="Фото новости ${news.title}" width="360" height="260">
          </div>
          <div class="news-article__box">
            <ul class="news-article__list">
              <li class="news-article__item">
                <span class="news-article__info news-article__info--views">
                  ${news.views}
                </span>
              </li>
              <li class="news-article__item">
                <time class="news-article__info news-article__info--time">
                  ${news.date}
                </time>
              </li>
            </ul>
            <h3 class="news-article__title">
              ${news.title}
            </h3>
            <p class="news-article__text">
              ${news.text}
            </p>
          </div>
        </article>
    `
}
fetchNewsJSON(id)