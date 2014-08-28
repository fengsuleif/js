
function Node(data,left,right){
	this.data=data;
	this.left=left;
	this.right=right;
	this.show=show;
}

function show(){
	return this.data;
}

function  BST(){
	this.root=null;
	this.find=find;
	this.insert=insert;
	this.remove=remove;
	this.update=update;
	
	this.getMax=getMax;
	this.getMin=getMin;
	
	this.inOrder=inOrder;     //中序遍历    左根右
	this.preOrder=preOrder;   //前序遍历    根左右
	this.postOrder=postOrder; //后序遍历    左右根
	
	
}

function insert(data){
	var n=new Node(data,null,null);
	if(this.root==null){
		this.root=n;
	}else{
		var current=this.root;
		var parent;
		while(true){
		parent=current;
		if(data<current.data){
			current=current.left;
			if(current==null){
				parent.left=n;
				break;
			}
		}else{
		current=current.right;
		if(current==null){
		parent.right=n;
		break;
		}
		}
		}
	}


}

function preOrder(node){
	if(node!=null){		
		console.log(node.show()+" ");
		preOrder(node.left);
		preOrder(node.right);
	}
}

function inOrder(node){
	if(node!=null){
		inOrder(node.left);
		console.log(node.show()+" ");
		inOrder(node.right);
	}
}

function  postOrder(node){
	if(node!=null){			
		preOrder(node.left);
		preOrder(node.right);
		console.log(node.show()+" ");
	}
}

function getMin() {
    var current = this.root;
    while (!(current.left == null)) {
        current = current.left;
    }
    return current.data;
}

function getMax() {
    var current = this.root;
    while (!(current.right == null)) {
        current = current.right;
    }
    return current.data;
}


function find(data) {
    var current = this.root;
    while (current != null) {
        if (current.data == data) {
           return current;
        }
        else if (data < current.data) {
            current = current.left;
        }
        else {
            current = current.right;
        }
    }
    return null;
}

function remove(data) {
    root = removeNode(this.root, data);
}

function removeNode(node, data) {
    if (node == null) {
        return null;
    }

    if (data == node.data) {
        //没有子节点的节点
        if (node.left == null && node.right == null) {
            return null;
        }
        //没有左子节点的节点
        if (node.left == null) {
            return node.right;
        }
        //没有右子节点的节点
        if (node.right == null) {
            return node.left;
        }
        //有两个子节点的节点
        var tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    }
    else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    }
    else {
        node.right = removeNode(node.right, data);
        return node;
    }
}

function update(data) {
    var grade = this.find(data);
    grade.count++;
    return grade;
}
