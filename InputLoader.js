exports.InputLoader = function(callback)
{
	var fs = require('fs');
	var filepath = process.argv[2];

	//console.log("filepath",filepath);

	this.input = [];

	fs.readFile(filepath, 'utf8', onReadData);
	function onReadData(err, data)
	{
		if(err)
			console.error(err);

		this.input = data.split('\n');
		callback(this.input);
	}
}
