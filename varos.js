magas = ['e','é','i','í','ö','ő','ü','ű'];
mely = ['a','á','o','ó','u','ú'];

var varosok = [
	["Budapest",226,99],
	["Sopron",84,76],
	["Pécs",174,222],
	["Szeged",289,208],
	["Debrecen",376,94],
	["Miskolc",325,45]
];

function tavolsag( varosindex, masikindex ) {
	
	var a = varosok[varosindex] [1] - varosok[masikindex] [1];
	var b = varosok[varosindex] [2] - varosok[masikindex] [2];
	var a2 = a*a;
	var b2 = b*b;
	var tav = Math.sqrt( a2 + b2 );

	console.log(tav);
	return tav;
}

console.log( tavolsag (0, 3) );
sopronDebrecenTav = tavolsag(1,4);
if (tavolsag(2,4) > tavolsag(2,5)){
	//console.log(varosok[2][0]+" messzebb van "+varosok[4][0]+"től mint "+varosok[5][0]+"től.");
	
	let varos1 = varosok[2][0];
	let varos2 = varosok[4][0];
	let varos3 = varosok[0][0];
	if (varos3.substring(varos3.length - 3).includes("a")
		|| varos3.substring(varos3.length - 3).includes("á")
		|| varos3.substring(varos3.length - 3).includes("o")
		|| varos3.substring(varos3.length - 3).includes("ó")
		|| varos3.substring(varos3.length - 3).includes("u")
		|| varos3.substring(varos3.length - 3).includes("ú"))
		
	{
		console.log(varos1+" messzebb van "+varos2+"től mint "+varos3+"tól.");
	} else {
		console.log(varos1+" messzebb van "+varos2+"től mint "+varos3+"től.")
	}
}


