import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*').
        append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE').
        append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/api/auth', (req, res) => res.send('Apple pie auth server!')); // test
app.get('/', (req, res) => res.send('Apple pie auth server! Basic route')); // test

export default app;
