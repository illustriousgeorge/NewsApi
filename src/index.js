import {generateNewsBox} from "./components";

const articles = [
    {
        title: 'Article 1',
        description: 'Lorem ipsum'
    },
    {
        title: 'Article 2',
        description: 'Lorem ipsum'
    },
    {
        title: 'Article 3',
        description: 'Lorem ipsum'
    },
    {
        title: 'Article 4',
        description: 'Lorem ipsum'
    },
    {
        title: 'Article 5',
        description: 'Lorem ipsum'
    },
    {
        title: 'Article 6',
        description: 'Lorem ipsum'
    },
    {
        title: 'Article 7',
        description: 'Lorem ipsum'
    },
    {
        title: 'Article 8',
        description: 'Lorem ipsum'
    },
];

window.onload = function() {
    const header = document.createElement('h1'); // <h1>Welcome</h1>
    header.innerText = "Welcome";
    document.body.appendChild(header);

    const news = generateNewsBox("My first news", "Hello blablabla");
    document.body.appendChild(news);

    let a;
    let b;
    for(let i=0; i<articles.length; i++) {
        a = generateNewsBox(articles[i].title, articles[i].description);
        b = document.getElementById("a");
        b.appendChild(a);
    }
}