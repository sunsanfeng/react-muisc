function addClass(el, className){
	if(hasClass(el, className)){
		return
	}
	let newClass= el.className.split(' ')
	newClass.push(className)
	el.className = newClass.join(' ');
}

function hasClass(el, className){
	let reg = new RegExp(`(^|\\s)${className}(\\s|$)`);
	return reg.test(el.className)
}


function getData(el, name, val){
	const prefix = 'data-';
	name = prefix + name;
	if(val){
		return el.setAttribute(name, val);
	}else{
		return el.getAttribute(name)
	}
}

//autoprefixer
let elementStyle = document.createElement('div').style;
let vender = (() => {
	let transformNames = {
		webkit: 'webkitTransform',
		Moz: 'MozTransform',
		o: 'OTransform',
		ms: 'msTransform',
		standard: 'transform'
	}
	
	for(let key in transformNames){
		if(elementStyle[transformNames[key]] !== undefined) return key;
	}
	
	return false;
	
})()

function autoprefixer(style){
	if(vender === false) return false;
	if(vender === 'standard') return style;
	return vender + style.charAt(0).toUpperCase() + style.substr(1);
}

export {addClass, hasClass, getData, autoprefixer}