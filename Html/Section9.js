function reverse(x)
{
	for( var i = x.length - 1 ; i >= 0 ; i-- )
		console.log(x[i])
}
function isUniform(x)
{
	var temp = x[0]
	var flag = 1
	for( var i = 1 ; i < x.length ; i ++ )
		if( x[i] != temp )
			flag = 0
	if( flag == 0 )
		return false
	else
		return true
}
function sumArray(x)
{
	var sum = 0;
	for( var i = 0 ; i < x.length ; i++ )
		sum = sum + x[i];
	return sum;
}
function max(x)
{
	max = x[0]
	for( var i = 1 ; i < x.length ; i ++ )
		if( x[i] >= max )
			max = x[i]
	return max;
}

