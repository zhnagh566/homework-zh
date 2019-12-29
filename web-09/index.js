function checkUsernameValid() {
	var name = $("#txtUsername").val();
	if (/^[a-zA-Z]\w{5,17}/.test(name)) {
		return true;
	} else {
		alert("无效输入，请重新输入用户名。用户名为6~18位英文字母、数字或下划线，必须以英文字母开头。");
		return false;
	}
}
function checkStudentidValid() {
	var id = $("#txtStudentid").val();
	if (/^[1-9][0-9]{7}/.test(id)) {
		return true;
	} else {
		alert("无效输入，请重新输入学号。学号为8位数字，不能以0开头。");
		return false;
	}
}
function checkPhoneValid() {
	var phone = $("#txtPhone").val();
	if (/^[1-9][0-9]{10}/.test(phone)) {
		return true;
	} else {
		alert("无效输入，请重新输入手机号。电话为11位数字，不能以0开头。");
		return false;
	}
}
function checkEmailValid() {
	var email = $("#txtEmail").val();
	if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email)) {
		return true;
	} else {
		alert("无效输入，请重新输入邮箱。");
		return false;
	}
}

function checksubmit() {
	return checkUsernameValid()&&checkStudentidValid()&&checkPhoneValid()&&checkEmailValid();
}
