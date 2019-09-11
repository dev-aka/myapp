import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
    res.send('WORKING PERFECT');
});

import router from './routes'
app.use('/v1', router);

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});

export default app;