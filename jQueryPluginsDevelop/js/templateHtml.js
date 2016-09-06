$.fn.extend({
	templateHtml : function(options) {
		var that = this;
		var defaults = {
			reg : /{{[0-9a-zA-Z\_\-]*}}/g,
			template : "",
			data : null,
			onFormat : null
		};
		var settings = $.extend(true, {}, defaults, options);
		if(settings.data) {
			if(!$.isArray(settings.data)) {
				settings.data = [settings.data];
			}
			for(var index in settings.data) {
				var data = settings.data[index];
				$(that).append(settings.template.replace(settings.reg, function(value, index, oldStr){
					var key = value.replace("{{", "").replace("}}", "");
					value = settings.onFormat ? settings.onFormat(value, data, settings.data) : data[key];
					return value;
				}));
			}
		}
	}
});