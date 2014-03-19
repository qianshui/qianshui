Ext.define('YongYou.view.QueryPanelCategory', {
    extend: 'Ext.Panel',
    config: {
        cls: 'card card1',
        id:'QueryPanelCategory',
        scrollable: true,
         height: '100%',
        items: [{
            docked: 'top',
            html: '<font size=\"12px\">行业分类操作说明</font></br></br>'
        }, {
           xtype: 'component',
            html:"<p>保险业、采矿、能源、餐饮、宾馆、电讯业、房地产、" +
            		"服务、服装业、公益组织、广告业、航空航天、化学、健康、" +
            		"保健、建筑业、教育、培训、计算机、金属冶炼、警察、消防、军人、" +
            		"会计、美容、媒体、出版、木材、造纸、零售、批发、农业、旅游业、" +
            		"司法、律师、司机、体育运动、学术研究、演艺、医疗服务、艺术、设计、" +
            		"银行、金融、因特网、音乐舞蹈、邮政快递、运输业、政府机关、机械制造、咨询、服务。" +
            		"通俗的讲，行业分类就是有规则的按照一定的科学依据，" +
            		"对从事国民经济生产和经营的单位或者个体的组织结构体系的详细划分，如林业，汽车业，银行业等。</p>"
        }]
    }
});