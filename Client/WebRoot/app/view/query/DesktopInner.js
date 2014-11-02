Ext.define('YongYou.view.query.DesktopInner', {
	extend : 'Ext.Container',
	requires : ['Ext.data.Store'],
	config : {
		height : '100%',
		width : '100%',
		dock : 'top',
		cls:'x-fullscreen',
		items : [
			{
			    xtype: 'searchfield',
			    name: 'inner_query',
			    docked:'top',
			    left: '80%',
			    listeners : {
				    keyup: function(mythis, newValue, oldValue, eOpts) {
                    	//var mystore=mythis.parent.items.items[1].getStore();
                    	var myarray=mythis.parent.initData;
                    	var myvalue=mythis.getValue();
                    	var myNewArray=[]
                    	
                    	if(myvalue!="")
                    	{
                    		for(var i=0;i<myarray.length;i++)
                        	{
                        		if(myarray[i].title.indexOf(myvalue)>=0)
                        		{
                        			myNewArray.push(myarray[i])
                        		}
                        	}
                    	}
                    	else
                    	{
                    		myNewArray=mythis.parent.initData;
                    	}
                    	var store=Ext.create("Ext.data.Store", {
        					//storeId : "usersStore",
        					fields : [{
        								name : 'title',
        								type : 'string'
        							}, {
        								name : 'icon',
        								type : 'string'
        							}, {
        								name : 'parentid',
        								type : 'string'
        							}, {
        								name : 'id',
        								type : 'string'
        							},{
        								name : 'flowId',
        								type : 'string'
        							},{
        								name : 'leaf',
        								type : 'string'
        							}],
        					data : myNewArray
        				});
                    	mythis.parent.items.items[1].setStore(store);
					}
				}
			},
		    {
			xtype : 'dataview',
			store : 'QueryRoot',
			flex : 1,
			top:'6%',
			width : '100%',
			height : '100%',
			scrollable : true,
			baseCls : 'desktop-list',
			layout: {
			    type: 'hbox',
			    align: 'middle ',
			    pack: 'center'
			},
			itemTpl : [
					'<div class="image" style="background-image:url(\'resources/img/desktop/{icon}\')"></div>',
					'<div class="name">{title}</div>'

			].join(''),
			listeners : {
				itemtap : function(container, target, index, e) {

					var me = this, store = me.getStore();
					if (store.data.items[target]) {
						record = store.data.items[target].data;
						YongYou.util.ClientEventHandle.events.onCatrgotyItemTap(this.parent.parent, index,
								target, record, e)
					}
				}
			}
		}]
	},
	initialPanel : function(res) {
		red = Ext.decode(res);
		store=Ext.create("Ext.data.Store", {
					//storeId : "usersStore",
					fields : [{
								name : 'title',
								type : 'string'
							}, {
								name : 'icon',
								type : 'string'
							}, {
								name : 'parentid',
								type : 'string'
							}, {
								name : 'id',
								type : 'string'
							},{
								name : 'flowId',
								type : 'string'
							},{
								name : 'leaf',
								type : 'string'
							}],
					data : red
				});
		this.items.items[1].setStore(store);
		this.initData=red;
	}

});
