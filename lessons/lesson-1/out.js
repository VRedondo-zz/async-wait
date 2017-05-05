let showGitUser = (() => {
	var _ref = _asyncToGenerator(function* (handle) {
		const url = `https://api.github.com/users/${handle}`;
		const response = yield fetch(url);
		const user = yield response.json();
		console.log('user.name', user.name);
		console.log('user.location', user.location);
	});

	return function showGitUser(_x) {
		return _ref.apply(this, arguments);
	};
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const fetch = require('node-fetch');

showGitUser('vredondo');
