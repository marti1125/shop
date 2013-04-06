module.exports.adapters = {

	'default': 'disk',
	
	memory: {
		module: 'sails-dirty',
		inMemory: true
	},

	disk: {
		module: 'sails-dirty',
		filePath: './.tmp/dirty.db',
		inMemory: false
	},

	mysql: {
		module		: 'sails-mysql',
		host		: 'localhost',
		user		: 'root',
		password	: 'mysql',
		database	: 'shop'
	}
};
