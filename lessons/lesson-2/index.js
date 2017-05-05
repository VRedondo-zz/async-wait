const fetch = require('node-fetch');

async function showGitUser(handle) {
	const url = `https://api.github.com/users/${handle}`;
	const response = await fetch(url);
	return await response.json();
}

showGitUser('vredondo')
	.then( user => {
		console.log('user.name', user.name);
		console.log('user.location', user.location);
	});
