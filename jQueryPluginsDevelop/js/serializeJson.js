/* 
       �Զ���jquery��������ɽ�form ����ת��Ϊ json��ʽ 
 */
$.fn.serializeJson = function() {
	var serializeObj = {}; // Ŀ�����
	var array = this.serializeArray(); // ת�������ʽ
	// var str=this.serialize();
	$(array).each(
			function() { // ���������ÿ��Ԫ�� {name : xx , value : xxx}
				if (serializeObj[this.name]) { // �ж϶������Ƿ��Ѿ����� name���������name
					if ($.isArray(serializeObj[this.name])) {
						serializeObj[this.name].push(this.value); // ׷��һ��ֵ
																	// hobby :
																	// ['����','����']
					} else {
						// ��Ԫ�ر�Ϊ ���� ��hobby : ['����','����']
						serializeObj[this.name] = [ serializeObj[this.name],
								this.value ];
					}
				} else {
					serializeObj[this.name] = this.value; // ���Ԫ��name�����ڣ����һ������
															// name:value
				}
			});
	return serializeObj;
};