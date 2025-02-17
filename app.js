const express = require ('express');
const app = express();
const port = 2000;
const postRouter = require ('./routers/posts');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/api/posts', postRouter);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});


