function Set(){
	var items={};
	this.has=function(value){
		return items.hasOwnProperty(value);
	}
	this.add=function add(value){
		if(!this.has(value)){
			items[value]=value;
			return true;
		}
		return false;
	}
		this.remove=function add(value){
			if(this.has(value)){
				delete items[value];
				return true;
			}
			return false;
		}
	this.clear=function (){ items={};}
	this.size=function(){return Object.keys(items).length;}
	this.values=function(){return Object.keys(items);}
	}
