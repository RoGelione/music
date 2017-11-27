export function addClass(el, className) {
	if(hasClass(el,className)){
		return
	}
	let newClass = el.className.split(' ')
	newClass.push(className)
	el.className = newClass.join(' ')
}

export function hasClass(el, className) {//是否有class
	let reg = new RegExp('(^|\\s)'+className+'(\\s|$)')
	return reg.test(el.className)
}

export function getData(el,name,val){//val用来表示是set还是get，有值set，没值get
	const prefix = 'data-'
	name = prefix + name
	if (val) {
		return el.setAttribute(name,val)
	} else{
		return el.getAttribute(name)
	}
}
