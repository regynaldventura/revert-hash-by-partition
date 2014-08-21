
var revertHashByPartition = function revertHashByPartition( parameterList, callback ){

	var parameterList = parameterList.trim( );
	var parameterListSet = parameterList.split( /[,]|[" "]/ );
	var parameterListSetLength = parameterListSet.length;

	var parameters = [ ];

	parameterListSet[0]= removeLeadingZero( parameterListSet[0] );

	for( var i=0; i<parameterListSetLength; i++ ){

		if ( parameterListSet[i] != "" )
			parameters.push( parameterListSet[i].trim( ) );	
	}

	console.log(parameters.join( " " ).trim() );
	var revertHashByPartitionCommand = "java revertHashByPartition.revertHashByPartition " + parameters.join( " " ).trim();

	work( revertHashByPartitionCommand,
		function onResult( error, isValid, result ){
			if( error ){
				console.error( error );
				callback( error );

			}else if( isValid ){
				var stringValue = result;

				console.log( stringValue );
				callback(  stringValue );

			}else{
				var error = new Error( "invalid result" );
				console.error( error );
				callback( error );
			}
		} );
};	

var work = require( "./work/work.js" );

module.exports = revertHashByPartition;

// remove leading zero at the beginning of hash
var removeLeadingZero = function removeLeadingZero( hash ){
	var hashValue = hash.trim( );
	hashValue = hashValue.split( "" );
	var j = true;
	var i = 0;

	while( j == true ){
		if ( hashValue[i] == "0" )
		{
			i++;
		}else{
			j = false;
		}
	}
	hashValue = hashValue.slice(i).join("");
	return hashValue;
};
module.exports = removeLeadingZero;


//

revertHashByPartition("06d80eb0c50b49a509b49f2424e8c805 ,abcdefghijklmnopqrstuvwxyz,  3 . 2 md5",function(){});
