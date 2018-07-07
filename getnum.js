var isEqual=require("./isequal");
module.exports=function(index,n,c1,c2,c3,numbers){
	var a,b,c,d,e,f,g,h,ij;
	for(var row=index;row<n;row++){
		
		var row1=row;
		
		var tempu=[];
		if(text[row][c1]==='\r' || text[row][c1]===undefined){
			a=' ';	
		}else{
			a=text[row][c1];
		}

		if(text[row][c2]==='\r' || text[row][c2]===undefined){
			b=' ';	
		}else{
			b=text[row][c2];
		}

		if(text[row][c3]==='\r' || text[row][c3]===undefined){
			c=' ';	
		}else{
			c=text[row][c3];
		}

		row=++row;

		if(text[row][c1]==='\r' || text[row][c1]===undefined){
			d=' ';	
		}else{
			d=text[row][c1];
		}

		if(text[row][c2]==='\r' || text[row][c2]===undefined){
			e=' ';	
		}else{
			e=text[row][c2];
		}

		if(text[row][c3]==='\r' || text[row][c3]===undefined){
			f=' ';	
		}else{
			f=text[row][c3];
		}

		row=++row;

		if(text[row][c1]	==='\r' || text[row][c1]===undefined){
			g=' ';	
		}else{
			g=text[row][c1];
		}

		if(text[row][c2]==='\r' || text[row][c2]===undefined){
			h=' ';	
		}else{
			h=text[row][c2];

		}

		if(text[row][c3]==='\r' || text[row][c3]===undefined){
			ij=' ';	
		}else{
			ij=text[row][c3];
		}

		tempu.push(a,b,c,d,e,f,g,h,ij);
		
		
	}
	var tempa=[a,b,c,d,e,f,g,h,ij];
	tempa.map(function(temp){
		if(temp==='\r'){
			temp=' ';
		}
	});
	
	// 7 Segment representation
	var proto=[b,f,ij,h,g,d,e];

	
	// convert ascii to binary 0 and 1
	for(pi=0;pi<proto.length;pi++){
		if(proto[pi]==" "){
			proto[pi]=0;
		}else{
			proto[pi]=1;
		}	
	}
	
	var num=null;

	// checking is target matches and assign decimal number
	for(numi=0;numi<10;numi++){
		if(isEqual(proto,numbers[numi])){
			num=numi;
			break;
		}
		// console.log(numbers[numi]);
	}

	return num;
};