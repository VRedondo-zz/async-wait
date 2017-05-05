const fetch = require('node-fetch');

function showGitUser(handle) {
	const url = `https://api.github.com/users/${handle}`;
	fetch(url)
		.then( response => response.json())
		.then( user => {
			console.log('user.name', user.name);
			console.log('user.location', user.location);
		});
}

showGitUser('vredondo');
