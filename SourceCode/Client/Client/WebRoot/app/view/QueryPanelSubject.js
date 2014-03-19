Ext.define('YongYou.view.QueryPanelSubject', {
    extend: 'Ext.Panel',
    config: {
        cls: 'card card1',
        id:'QueryPanelSubject',
        scrollable: true,
         height: '100%',
        items: [{
            docked: 'top',
            html: '<font size=\"12px\">行业操作说明</font></br></br>'
        }, {
           xtype: 'component',
            html:"<p>行业一般是指其按生产同类产品或具有相同工艺过程或提供同类劳动服务划分的经济活" +
            		"动类别，如饮食行业、服装行业、机械行业等。</p></br></br>"+
            		"<p>解释行业本身所处的发展阶段及其在国民经济中的地位，分析影响行业发展的各种因素以及判断对行业的影响力度，" +
            		"预测并应引导行业的未来发展趋势，判断行业投资价值，揭示行业风向，为各组织机构提供投资决策或投资依据。</p>"
        }]
    }
});