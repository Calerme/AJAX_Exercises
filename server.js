const path = require('path');
const fs = require('fs');
const express = require('express');

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'www')));

app.get('/:path', (req, res) => {
    const rs = fs.createReadStream(
        path.join(__dirname, 'www', 'views', req.url)
    );
    rs.pipe(res);
});

const server = app.listen(9527, () => {
    const addr = server.address().address;
    const port = server.address().port;
    console.info(`服务已经运行在 ${addr}:${port}`);
    console.info('可访问在 www 文件夹内的资源');
});