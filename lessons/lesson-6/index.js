const fetch = require('node-fetch');

async function fetchFromGitHub(endpoint) {
	const url = `https://api.github.com/${endpoint}`;
	const response = await fetch(url);
	const body = await response.json();

	if (response.status !== 200) {
		throw Error(body.message);
	}

	return body;
}

async function showGitUserAndRepos(handle) {
	try {
		const [user, repos] = await Promise.all([
			fetchFromGitHub(`users/${handle}`),
			fetchFromGitHub(`users/${handle}/repos`),
		]);

		console.log('user.name', user.name);
		console.log('user.repos', repos.length);
	} catch (err) {
		console.error(`Error: ${err.message}`);
	}
}

showGitUserAndRepos('vredondo');
