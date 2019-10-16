const express = require('express');
const os = require('os');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const entreeRouter = require('./routers/entreeRouter');
const platRouter = require('./routers/platRouter');
const dessertRouter = require('./routers/dessertRouter');
const menuRouter = require('./routers/menuRouter');

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(entreeRouter);
app.use(platRouter);
app.use(dessertRouter);
app.use(menuRouter);

let server = app.listen(port, os.hostname(), () => {
    let host = server.address().address,
        port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});