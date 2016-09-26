<h1>Front End Challenge</h1>

<article class="markdown-body entry-content" itemprop="text"><h1><a id="user-content-front-end-challenge" class="anchor" href="#front-end-challenge" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Front-End Challenge</h1>
    <p>You'll need to create Videos front-page web app. It's pretty simple - one page with list of videos. Videos are preview images of videos fetched through Vimeo's API.</p>
    <p>For implementation you can use any framework on your choice. Recommended to use React + Redux and it will be a plus. JavaScript ES6 (Babel + Webpack) is also preferable. Styles pre/post processors are welcome.</p>
    <h3><a id="user-content-markup" class="anchor" href="#markup" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Markup</h3>
    <p>Page markup could be implemented in any style you want: div, floats, flexbox, bootstrap etc. Responsive design for page will be great, but not necessary.</p>
    <p>Page design in PSD: <a href="https://www.dropbox.com/s/b6hcz5sj28bozuo/markup.psd?dl=0">source</a>
        Page design in JPG: <a href="https://www.dropbox.com/s/dfunc6smm8zucyp/markup.jpg?dl=0">source</a></p>
    <p>Try to implement everything in clean way as independent components, style name convention etc.</p>
    <h3><a id="user-content-videos" class="anchor" href="#videos" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Videos</h3>
    <p>To load videos list use Vimeo API.</p>
    <p>Here example query for videos search: (query)[<a href="https://api.vimeo.com/videos?query=workouts&amp;access_token=fe948072bce7119dd30809a4d39ce2ff">https://api.vimeo.com/videos?query=workouts&amp;access_token=fe948072bce7119dd30809a4d39ce2ff</a>]</p>
    <p>Response contains all necessary data: Video name, preview image and link to video.
        When you press on video in list, just open link of this video in a new browser tab.</p>
    <h3><a id="user-content-review" class="anchor" href="#review" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Review</h3>
    <p>Most important to show good code style, clear business logic separation and good UX.
        Usage of jQuery and similar tools not restricted, but React ecosystem tools way more valuable.</p>
</article>


<h3>Задания и детали реализации:</h3>
<ol>
    <li><strong>авторизация пользователя</strong><br></li>
    <li><strong>показ аватара пользователя</strong><br></li>
    <li><strong>показ списка видео(с учётом приватности)</strong><br> </li>
</ol>

<h3>Описание и детали реализации:</h3>
<ol>
    <li>Данное приложение было реализовано с помощью ES6, Webpack, React, Redux с серверным рендерингом.
    </li>
    <li><strong>Изначально, я хотел сделать SPA с помощью React, Redux которое делало бы GET запрос к API Vimeo как в примере,
                полученные данные рендерило бы на сервере и отправляло новый экземпляр store в клиент. Но ознакомившись с дизом
                стало понятно что обычным GET запросом здесь не обойдёться и судя по фото, имени пользователя в левой колонке, и ограничением на просмотр
                всех видео кроме первого из макета здесь необходима авторизация. Авторизация API Vimeo реализована следующим образом,
        1. Клиента необходимо направить на их сайт, указав в url данные вашего App, после чего клиента перенаправляют на адрес редиректа(твоего сайта) c двумя аргументами в url.
        2. На основании этих аттрибутов формируется следующий уже POST запрос на Vimeo при котором тебе необходимо обменять эти аттрибуты на acces_token;
        3. Сделать запрос уже на основании этого токена на необходимые данные;
        На этом этапе возник вопрос о целесообразности использования для этого клиентской части, т.к. никаких активных элементов которые могли
        бы взаимодействовать с пользователем нет, а данные полученные на клиенте всё равно необходимо было бы отправлять на сервер для рендеринга, я решил проводить авторизацию
        и запрашивать данные на сервере, после их получения отправлять на клиент вместе со store(так же меня к этому сподвиг хорошо спроектированный, но во многих местах плохо документированный Vimeo API).
        Данный подход имеет минус в ввиде статичности, но ничего не мешает передавть вместе с данными токен на клиент и уже оттуда
        запрашиать новые данные и рендерить state через определённый адрес нашего сервера. Но в реализации данного задания я не увидел в этом потребности.
        </li></strong>

            <li>P.S. (баг при перезагрузке должен пропасть после деплоя на хост).<br>
    </li>
</ol>

