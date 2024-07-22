
const run = async () => {
    const root = document.querySelector('.out');
    const title = root.querySelector('.title');
    const article = root.querySelector('.article');
    const btn = root.querySelector('.btn');

    btn.addEventListener('click', async () => {
        const { data } = await axios.get('/json');
        console.log(data);
        title.innerHTML = data.titleText;
        article.innerHTML = data.articleText;
    })
}

run();