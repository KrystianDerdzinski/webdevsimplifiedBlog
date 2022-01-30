const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles')
const app = express();

mongoose.connect('mongodb://localhost/blog', {
	useNewUrlParser : true,
	useUnifiedTopology: true,
})

app.set('view engine', 'ejs');

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use(express.urlencoded({ extended : false }));

app.get('/', (req, res) => {
	if (res.statusCode === 200) {
		const articles = [{
			title: 'Test article',
			createdAt: new Date(),
			description: 'Test description'
		},
		{
			title: 'Test article 2',
			createdAt: new Date(),
			description: 'Test description 2'
		}]
		res.render("articles/index", { articles: articles })
	} else {
		console.log('something went wrong...')
	}
});

app.use('/articles', articleRouter);

app.listen(5000);