Ext.define('YongYou.view.config.form.uploadForm', {
	extend : 'Ext.form.Panel',
	title : '上传文件',
	width : 400,
	bodyPadding : 10,
	frame : true,
	renderTo : Ext.getBody(),
	url : 'uploadController.jsp?t=' + new Date(),
	fileUpload : true,
	items : [{
				xtype : 'filefield',
				name : 'file',
				fieldLabel : '文件',
				labelWidth : 50,
				msgTarget : 'side',
				allowBlank : false,
				anchor : '100%',
				buttonText : '选择文件...'
			}],

	buttons : [{
		text : '开始上传',
		handler : function(view) {
			// 点击'开始上传'之后，将由这个function来处理。
			if (view.up('form').form.isValid()) {// 验证form， 本例略掉了
				// 显示进度条
				Ext.MessageBox.show({
							title : '正在上传文件',
							// msg: 'Processing...',
							width : 240,
							progress : true,
							closable : false,
							buttons : {
								cancel : 'Cancel'
							}
						});
				// form提交
				view.up('form').getForm().submit({
					success : function(form, action) {
						
						view.up('form').up('panel').trigger.setValue(action.result.msg);
						view.up('form').up('panel').close();
						Ext.Msg.alert('提示', '上传已成功');
					},
					failure : function(form, action) {
						Ext.Msg
								.alert('提示', '原因如下：'
												+ action.result.errors.info);
					}
				});
				// 设置一个定时器，每500毫秒向processController发送一次ajax请求
//				var i = 0;
//				var timer = setInterval(function() {
//					// 请求事例
//					Ext.Ajax.request({
//								// 下面的url的写法很关键，我为了这个调试了好半天
//								// 以后凡是在ajax的请求的url上面都要带上日期戳，
//								// 否则极有可能每次出现的数据都是一样的，
//								// 这和浏览器缓存有关
//								url : 'processController.jsp?t=' + new Date(),
//								method : 'get',
//								// 处理ajax的返回数据
//								success : function(response, options) {
//									status = response.responseText + " " + i++;
//									var obj = Ext.decode(response.responseText);
//									if (obj.success != false) {
//										if (obj.finished) {
//											clearInterval(timer);
//											// status = response.responseText;
//											Ext.MessageBox.updateProgress(1,
//													'finished', 'finished');
//											Ext.MessageBox.hide();
//
//										} else {
//											Ext.MessageBox.updateProgress(
//													obj.percentage, obj.msg);
//										}
//									}
//								},
//								failure : function() {
//									clearInterval(timer);
//									Ext.Msg.alert('错误', '发生错误了。');
//								}
//							});
//				}, 500);

			} else {
				Ext.Msg.alert("消息", "请先选择文件再上传.");
			}
		}
	}]
});