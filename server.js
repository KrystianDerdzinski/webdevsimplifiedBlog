const express = require('express');
const articleRouter = require('./routes/articles')
const app = express();

app.set('view engine', 'ejs');

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use('/articles', articleRouter);

app.get('/', (req, res) => {
	if (res.statusCode === 200) {
		const articles = [{
			title: 'Test article',
			createdAt: Date.now(),
			description: 'Test description'
		}]
		res.render("index", { articles: 'Hello' })
	} else {
		console.log('something went wrong...')
	}
});

app.listen(5000);