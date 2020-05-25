require('dotenv').config();

const path = require('path');
const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();

const port = process.env.PORT || 3000;

//  render engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// middleware
app.use((req, res, next) => {
    console.log(`We've got a hit 🔨 at ${new Date().toLocaleString()}`);
    next();
});

// static files
app.use('/static', express.static('public'));

//routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Prelude',
        seo: {
            title: 'Prelude Home',
            description: 'test description',
        }
    });
});


app.listen(port, () => console.log(`Prelude app 🔥🔥🔥 on port ${port}!`));