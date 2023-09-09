const path = require('path');
const express = require('express');

const app = express();
const nonSPARouter = express.Router();

nonSPARouter.get('/', (req, res) => {
	const img = 'placeholder.png';
	res.render('share', {
		url: 'https://argo.fiat.com.br/',
		title: 'Share Test',
		descriptionText: 'This is designed to appeal to shares',
		imageUrl: `https://argo.fiat.com.br/${img}`,
		img,
	});
});

app.use((req, res, next) => {
	const ua = req.headers['user-agent'];
	if (/^(facebookexternalhit)|(Twitterbot)|(Pinterest)/gi.test(ua)) {
		console.log(ua, ' is a bot');
		nonSPARouter(req, res, next);
	} else {
		next();
	}
});

app.get('/', (req,res) => {
	res.send('Serve SPA');
});

app.use('/', express.static(path.join(__dirname, '/public')));
app.set('view engine', 'jade');

module.exports = app.listen(process.env.PORT || 9001, () => {
	console.log('Server started.');
});
