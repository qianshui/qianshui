
Ext.define('YongYou.view.QueryPanelNestedList', {
    extend: 'Ext.dataview.NestedList',
     config: {
     	id:'QueryList',
		height: '100%',
		title : '选择查询模块', 
		setUseTitleAsBackText:true,
        left: 0,
        width: '18%',
        itemHeight: 50
//   		listeners: {
//                itemtap: function(me, list, index, item, e) {
//               
//               }
//        }
     },
     itemDetail:function(){
      var store = list.getStore();
      record  = store.getAt(index);
     },
     leafDetail:function(){
     
     }
     });