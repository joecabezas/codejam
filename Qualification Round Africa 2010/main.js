var fs = require('fs');
var filepath = process.argv[2];
var input;

fs.readFile(filepath, 'utf8', onReadData);
function onReadData(err, data)
{
	if(err)
		console.error(err);

	input = data.split('\n');
	init();
}

function init()
{
	//console.log(input);

	var num = input.shift();

	for(var i=0; i < num; i++)
	{
		var strings = input[i].split(' ').reverse().join(' ');
		console.log('Case #'+(i+1)+': '+strings);
	}
}
