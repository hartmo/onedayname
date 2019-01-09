$(document).ready(function() {
	var $loginBtn = $('.login_btn');
	var $registerBtn = $('.register_btn');
	$loginBtn.click(function() {
		var emall = $('.login_btn .emall').val();
		var pwd = $('.login_btn .pwd').val();
		if (!emall || !pwd) {
			alert('请输入完整的信息');
			return;
		}
	});
	$registerBtn.click(function() {
		var emall = $('.login_btn .emall').val();
		var pwd = $('.login_btn .pwd').val();
		var pwdagin = $('.login_btn .pwdagin').val();
		if (!emall || !pwd) {
			alert('请输入完整的信息');
			return;
		}
		if (pwd !== pwdagin) {
			alert('两次密码不一致');
			return;
		}
	});
});
