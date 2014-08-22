
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

function  swap(arr,i,j){
	temp=arr[i];
	arr[i]=arr[j];
	arr[j]=temp;

}

//改进的顺序排序方法，把查找的值前提一个位置
function seqSearch_adv(arr, data) {
   for (var i = 0; i < arr.length; ++i) {
      if (arr[i] == data) {
         if (i > 0) {
            swap(arr,i,i-1);
         }
         return true;
      }
  }
  return false;
}

