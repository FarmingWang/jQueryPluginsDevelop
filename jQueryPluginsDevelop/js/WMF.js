/*
 * 基于jQuery的自定义插件
 */
(function(){
	//判断是否引入jQuery
	if(typeof jQuery === "undefined"){
		var url = 'http://libs.useso.com/js/jquery/2.1.1-rc2/jquery.min.js'.replace(/\//g, "\/");
		document.write('<script type="text\/javascript" src="' + url + '"><\/script>');
	}
	//判断是否引入is.js
	if(typeof is === "undefined"){
		var url = 'https://rawgit.com/arasatasaygin/is.js/master/is.min.js'.replace(/\//g, "\/");
		document.write('<script type="text\/javascript" src="' + url + '"><\/script>');
	}
	
	//定义命名空间及模块
	window.WMF = {
		/*
		 * 表单验证
		 */
		validate:function(options){
			var defaults = {
				target:"",
				required:false,//必须输入的字段
				remote:"",//使用 ajax 方法调用，验证输入值
				email:false,//必须输入正确格式的电子邮件
				url:false,//必须输入正确格式的网址
				date:false,//必须输入正确格式的日期
				dateISO:false,//必须输入正确格式的日期（ISO），例如：2009-06-23，1998/01/22。只验证格式，不验证有效性
				number:false,//必须输入合法的数字（负数，小数）
				digits:false,//必须输入整数
				creditcard:false,//必须输入合法的信用卡号
				equalTo:"",//选择器、dom对象、jQuery对象，输入值必须和 其相同
				accept:"",//输入拥有合法后缀名的字符串（上传文件的后缀）
				maxlength:undefined,//正整数，允许输入的最大长度（汉字算一个字符），如10
				minlength:undefined,//正整数，允许输入的最小长度（汉字算一个字符），如5
				rangelength:undefined,//数组，输入长度必须介于 两个数 之间的字符串（汉字算一个字符），如[5, 10]
				range:undefined,//数组，输入的值必须介于 两个数 之间的字符串，如[100, 200]
				max:undefined,//最大值
				min:undefined,//最小值
				//检验不合格时显示的消息
				messages: {
					required: "This field is required.",
					remote: "Please fix this field.",
					email: "Please enter a valid email address.",
					url: "Please enter a valid URL.",
					date: "Please enter a valid date.",
					dateISO: "Please enter a valid date ( ISO ).",
					number: "Please enter a valid number.",
					digits: "Please enter only digits.",
					creditcard: "Please enter a valid credit card number.",
					equalTo: "Please enter the same value again.",
					maxlength: $.validator.format( "Please enter no more than {0} characters." ),
					minlength: $.validator.format( "Please enter at least {0} characters." ),
					rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
					range: $.validator.format( "Please enter a value between {0} and {1}." ),
					max: $.validator.format( "Please enter a value less than or equal to {0}." ),
					min: $.validator.format( "Please enter a value greater than or equal to {0}." )
				}
			};
		},
		/*
		 * 表单
		 */
		form:function(){
			//TODO
		},
		/*
		 * 数据表单
		 */
		dataForm:function(){
			//TODO
		}
	};
	
	//定义模版
	
})();
