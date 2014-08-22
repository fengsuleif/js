function seqSearch(arr,item){
	for(var i=0;i<arr.length;++i){
	if(arr[i]==item){
		return true;
	}
	}
	return false;
}


function seqSearch_index(arr,item){
	for(var i=0;i<arr.length;++i){
		if(arr[i]==item){
			return i;
		}
	}
		return -1;
}