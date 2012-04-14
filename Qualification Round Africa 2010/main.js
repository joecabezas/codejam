require('../InputLoader').InputLoader(init.bind(this));

function init(imput)
{
	//console.log(input);

	var num = input.shift();

	for(var i=0; i < num; i++)
	{
		var strings = input[i].split(' ').reverse().join(' ');
		console.log('Case #'+(i+1)+': '+strings);
	}
}
