function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const fetch = require('node-fetch');

class GitHubApiClient {
	fetchUser(handle) {
		return _asyncToGenerator(function* () {
			const url = `https://api.github.com/users/${handle}`;
			const response = yield fetch(url);
			return yield response.json();
		})();
	}
}

_asyncToGenerator(function* () {
	const client = new GitHubApiClient();
	const user = yield client.fetchUser('vredondo');
	console.log('user.name', user.name);
	console.log('user.location', user.location);
})();
