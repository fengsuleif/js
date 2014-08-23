
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

//改进的顺序查找方法，把查找的值前提一个位置
function seqSearch_adv(arr, item) {
   for (var i = 0; i < arr.length; ++i) {
      if (arr[i] == item) {
         if (i > 0) {
            swap(arr,i,i-1);
         }
         return true;
      }
  }
  return false;
}
//改进的顺序查找方法2，按20/80原则交换查找数据
function seqSearch_adv_20(arr,item){
	for (var i=0;i<arr.length;++i){
		if(arr[i]==item && i>(arr.length*0.2)){
			swap(arr,i,0);
			return true;
		}else if(arr[i]==item){
			return true;
		}
	}
	return false;

}

//二分查找
function bin_Search(arr,item){
var up=arr.length-1;
var low=0;
while(up>=low){
	var mid=Math.floor((up+low)/2);
	if(arr[mid]<item){
		low=mid+1;
	}else if(arr[mid]>item){
		up=mid-1;
	}else{
		return mid
	}
}
	return -1;
}