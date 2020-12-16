'use strict';

const topics = require.main.require('./src/topics');
const socketHelpers = require.main.require('./src/socket.io/helpers');
const meta = require.main.require('./src/meta');
const plg = require('./plugin.json');
const plugin = module.exports;

plugin.Name = plg.name;
plugin.name = plg.name.toLowerCase();
plugin.settings = {
	botUsername: '',
	botUid: 1
};

plugin.init = async function (data) {
	let settings = await meta.settings.get(plugin.name);
	plugin.settings = {
		botUsername: settings.botUsername || '',
		botUid: settings.botUid || 1
	};
	data.router.get(`/admin/plugins/${plugin.name}`, data.middleware.admin.buildHeader, plugin.renderAdminPage);
	data.router.get(`/api/admin/plugins/${plugin.name}`, plugin.renderAdminPage);
};

plugin.addAdminNavigation = async function (header) {
	header.plugins.push({
		route: `/plugins/${plugin.name}`,
		icon: 'fa-edit',
		name: plugin.Name
	});
	return header;
};

plugin.cmdtest = /^\/ping/i;

plugin.replyWithAutoResponse = async function (data) {
	let { uid, tid, content } = data.post;

	let cmds = (content || '').replace(/(\r\n|\n|\r)/gm, '\n').split('\n')
		.filter(line => {
			return line && plugin.cmdtest.test(line.trim())
		})
		.map(line => {
			let input = line.trim().replace(plugin.cmdtest, '').trim();
			return "Ping pong!!"
		});

	if (!cmds.length) {
		return;
	}

	const postData = await topics.reply({
		tid: tid,
		uid: plugin.settings.botUid,
		content: `${cmds.join('\n')}`
	});

	socketHelpers.notifyNew(postData.uid, 'newPost', {
		posts: [ postData ],
		'reputation:disabled': meta.config['reputation:disabled'] === 1,
		'downvote:disabled': meta.config['downvote:disabled'] === 1
	});
};

plugin.renderAdminPage = function (req, res) {
	res.render(`admin/plugins/${plugin.name}`, {});
};

