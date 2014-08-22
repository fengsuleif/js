
//找到要查询的值是返回true否则返回false
function seqSearch(arr,item){
	for(var i=0;i<arr.length;++i){
	if(arr[i]==item){
		return true;
	}
	}
	return false;
}

//找到返回值的索引

function seqSearch_index(arr,item){
	for(var i=0;i<arr.length;++i){
		if(arr[i]==item){
			return i;
		}
	}
		return -1;
}
