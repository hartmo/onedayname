window.onload = function() {
	function IsPC() {
		var userAgentInfo = navigator.userAgent;
		var Agents = new Array('Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod');
		var flag = true;
		for (var v = 0; v < Agents.length; v++) {
			if (userAgentInfo.indexOf(Agents[v]) > 0) {
				flag = false;
				break;
			}
		}
		return flag;
	}
	if (!IsPC()) {
		var clientwidth = document.documentElement.clientWidth / 6.4;
		clientwidth = clientwidth > 180 ? 70 : clientwidth;
		document.documentElement.style.fontSize = clientwidth + 'px';
	}
};
