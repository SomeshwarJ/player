const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/videos', express.static('videos'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { 
        video: {
            src: '/videos/sample.mp4',
            title: 'Thaya Thaya Song Video',
            description: 'A R Rahman | Shah Rukh Khan | Manirathanam',
            promoTime: 240
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
