(function() {

	var options = {
		id: 'iframe',
		//通信域名框架地址
		callIframeURL: 'http://a.com:8158/cross/cross-frame.html' 
	}

	//创建通信域
	function createFrame() {
		var frame = document.createElement('iframe')
		frame.id = options.id
		frame.src = options.callIframeURL
		frame.style.cssText = 'display:none;'
		document.body.append(frame)
		return frame
	}

	//添加通信iframe
	var callIframe = document.getElementById('#callIframe') || createFrame()

	//调用父框架方法
	window.crossCall = function(fnName, params) {
		if(!fnName) return

		var paramsStr = '', str = '#crossCall:'
		
		//遍历参数
		if(params instanceof Object) {
			for(key in params) {
				paramsStr += '"' + key + '"' + ':' + '"' + params[key] + '"' + ','		
			}
		} 

		str += '{"fnName":' + '"' + fnName + '"' + ',' +  paramsStr.replace(/,$/, '') + '}'

		callIframe.setAttribute('src',  options.callIframeURL + str)
	}
	
})()