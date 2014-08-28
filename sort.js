
 function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
	
	this.bubbleSort=bubbleSort;
	this.selectionSort=selectionSort;
	this.insertionSort=insertionSort;
	this.shellSort=shellSort;
	this.mergeSort=mergeSort;
    for ( var i = 0; i < numElements; ++i ) {
        this.dataStore[i] = i;
    }
}

function setData() {
    for ( var i = 0; i < this.numElements; ++i ) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
}

function clear() {
    for ( var i = 0; i < this.dataStore.length; ++i ) {
        this.dataStore[i] = 0;
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element;
}

function toString() {
    var restr = "";
    for ( var i = 0; i < this.dataStore.length; ++i ) {
        restr += this.dataStore[i] + " ";
        if (i > 0 & i % 10 == 0) {
            restr += "\n";
        }
    }
    return restr;
}

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

//冒泡：它是一种较简单的排序算法。它会遍历若干次要排序的数列，每次遍历时，它都会从前往后依次的比较相邻两个数的大小；如果前者比后者大，则交换它们的位置。
//这样，一次遍历之后，最大的元素就在数列的末尾！ 采用相同的方法再次遍历时，第二大的元素就被排列在最大元素之前。重复此操作，直到整个数列都有序为止！
function bubbleSort() {
    var numElements = this.dataStore.length;
    var temp;
    for ( var outer = numElements; outer >= 2; --outer) {
        for ( var inner = 0; inner <= outer - 1; ++inner ) {
            if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                swap(this.dataStore, inner, inner + 1);
            }
        }
    }
}



//选择：首先在未排序的数列中找到最小(or最大)元素，然后将其存放到数列的起始位置；
//接着，再从剩余未排序的元素中继续寻找最小(or最大)元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕
function selectionSort() {
    var min, temp;
    for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
        min = outer;
        for (var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
            if (this.dataStore[inner] < this.dataStore[min]) {
                min = inner;
            }
            swap(this.dataStore, outer, min);
        }
    }
}



//插入：把n个待排序的元素看成为一个有序表和一个无序表。开始时有序表中只包含1个元素，
//无序表中包含有n-1个元素，排序过程中每次从无序表中取出第一个元素，将它插入到有序表中的适当位置，使之成为新的有序表，重复n-1次可完成排序过程。
function insertionSort() {
    var temp, inner;
    for (var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
        temp = this.dataStore[outer];
        inner = outer;
        while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
            this.dataStore[inner] = this.dataStore[inner - 1];
            --inner;
        }
        this.dataStore[inner] = temp;
    }
}


//快排：选择一个基准数，通过一趟排序将要排序的数据分割成独立的两部分；其中一部分的所有数据都比另外一部分的所有数据都要小。
//然后，再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列。
function qSort(list) {
    if (list.length == 0) {
        return []; 
    }
    var lesser = [];
    var greater = []; 
    var pivot = list[0];
    for (var i = 1; i < list.length; i++) { 
        if (list[i] < pivot) {
            lesser.push(list[i]); 
        } else {
            greater.push(list[i]);
        }
    }
    return qSort(lesser).concat(pivot, qSort(greater)); 
}
//希尔排序
function shellSort() {
    var N = this.dataStore.length;
    var h = 1;
    while (h < N/3) {
        h = 3 * h + 1;
    }        
    while (h >= 1) {
        for (var i = h; i < N; i++) {
            for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j-h];j -= h) { 
                swap(this.dataStore, j, j-h);
            }
        }
        h = (h-1)/3; 
    }    
}

//归并排序
function mergeSort() { 
    if (this.numElements.length < 2) {
        return; 
    }
    var step = 1;
    var left, right;
    while (step < this.numElements.length) {
        left = 0;
        right = step;
        while (right + step <= this.numElements.length) {
            mergeArrays(this.numElements, left, left+step, right, right+step);
            left = right + step;
            right = left + step;
        }
        if (right < this.numElements.length) {
            mergeArrays(this.numElements, left, left+step, right, this.numElements.length);
        }
        step *= 2; 
    }
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) { 
    var rightArr = new Array(stopRight - startRight + 1);
    var leftArr = new Array(stopLeft - startLeft + 1);
    k = startRight;
    for (var i = 0; i < (rightArr.length-1); ++i) { 
        rightArr[i] = arr[k];
        ++k;
    }
    k = startLeft;    
    for (var i = 0; i < (leftArr.length-1); ++i) {
        leftArr[i] = arr[k];
        ++k; 
    }
    rightArr[rightArr.length-1] = Infinity; // 哨兵值    
    leftArr[leftArr.length-1] = Infinity; // 哨兵值 
    var m = 0;
    var n = 0;
    for (var k = startLeft; k < stopRight; ++k) { 
        if (leftArr[m] <= rightArr[n]) {
            arr[k] = leftArr[m];
            m++; 
        } else {
            arr[k] = rightArr[n]; 
            n++;
        } 
    }    
}





