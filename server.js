const express = require('express');
const articleRouter = require('./routes/articles')
const app = express();

app.set('view engine', 'ejs');

app.use('/articles', articleRouter);

app.get('/', (req, res) => {
	if (res.statusCode === 200) {
		res.render("index")
	} else {
		console.log('something went wrong...')
	}
});

app.listen(5000);