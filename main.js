import http from 'node:http';
import fs from 'node:fs/promises';
import { title } from 'node:process';

const config = {
    port: 8000
}


const server = http.createServer(async (req, res) => {
    const { url } = req;



    if (url === '/') {
        const file = await fs.readFile('./client/index.html', 'utf-8');

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(file);

    } else if (url === '/main.js') {
        const file = await fs.readFile('./client/main.js');

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        res.end(file);

    } else if (url === '/json') {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        const article = {
            titleText: 'Title Of Article',
            articleText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }

        const json = JSON.stringify(article);

        res.end(json);

    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end("No content");
    }



})

server.listen(config.port);








