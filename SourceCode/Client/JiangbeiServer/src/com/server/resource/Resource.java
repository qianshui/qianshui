package com.server.resource;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/Resource")
public class Resource {
	@GET
    @Produces(MediaType.APPLICATION_OCTET_STREAM)
    public String getValue(){
       return "["
               +"{\"label\":\"办事指南r\",\"imgId\":\"resources/img/phone_startup.png\"},"
               +"{\"label\":\"政策法规r\",\"imgId\":\"resources/img/phone_startup.png\"},"
               +"{\"label\":\"优惠政策r\",\"imgId\":\"resources/img/phone_startup.png\"}"
               +"]";
    }
	
	@GET
    @Path("/find")
    @Produces(MediaType.APPLICATION_JSON)
    public String find(@QueryParam("key") String id) {
		String result = null;
		if("1".equals(id)){
		
			result="["
	               +"{\"label\":\"办事指南\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"bz\",\"leaf\":false},"
	               +"{\"label\":\"政策法规\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"fg\",\"leaf\":false},"
	               +"{\"label\":\"优惠政策\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"zc\",\"leaf\":false}"
	               +"]"; 
			}
		else if("bz".equals(id)||"fg".equals(id)||"zc".equals(id)){
			result="["
	               +"{\"label\":\"文化娱乐业\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"HL01\",\"leaf\":\"false\"},"
	               +"{\"label\":\"住宿餐饮业\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"HL02\",\"leaf\":\"false\"},"
	               +"{\"label\":\"金融业\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"HL03\",\"leaf\":\"false\"}"
	               +"]"; 
			}
		else if("HL01".equals(id)){
			result="["
	               +"{\"label\":\"KTV\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"HY01\",\"leaf\":\"true\"},"
	               +"{\"label\":\"文化艺术\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"HY02\",\"leaf\":\"true\"},"
	               +"{\"label\":\"博物馆\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"HY03\",\"leaf\":\"true\"}"
	               +"]"; 
			    	}
		else if("HL02".equals(id)){
			result="["
	               +"{\"label\":\"旅游饭店\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"HY04\",\"leaf\":\"true\"},"
	               +"{\"label\":\"一般旅馆\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"HY05\",\"leaf\":\"true\"},"
	               +"{\"label\":\"餐饮\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"HY06\",\"leaf\":\"true\"}"
	               +"]"; 
			    	}
		else if("HL03".equals(id)){
			result="["
	               +"{\"label\":\"证券\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"HY07\",\"leaf\":\"true\"},"
	               +"{\"label\":\"保险\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"HY08\",\"leaf\":\"true\"},"
	               +"{\"label\":\"金融租赁\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"HY09\",\"leaf\":\"true\"}"
	               +"]"; 
			    	}
		else if("HY01".equals(id)){
			result="["
	               +"{\"label\":\"证券\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"HY07\",\"leaf\":\"true\"},"
	               +"{\"label\":\"保险\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"HY08\",\"leaf\":\"true\"},"
	               +"{\"label\":\"金融租赁\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"HY09\",\"leaf\":\"true\"}"
	               +"]"; 
			    	}
		return result;
    }
	
	
	//****************************************
	//get list
	//
	//***************************************
	
	@GET
    @Path("/getZCList")
    @Produces(MediaType.APPLICATION_JSON)
    public String getZCList(@QueryParam("HYID") String id) {
		String result="";
		if("HY01".equals(id)){
		result="["
            +"{\"title\":\"娱乐场所审批制度\",\"subtitle\":\"娱乐场所审批相关制度\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"ZC01\"},"
            +"{\"title\":\"放映MTV作品法律法规\",\"subtitle\":\"关于卡拉OK场所放映MTV等作品法律法规\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"ZC02\"},"
            +"{\"title\":\"娱乐场所安全指标\",\"subtitle\":\"娱乐场所消防安全技术标准\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"ZC03\"}"
            +"]"; 
		 }
		else if("HY02".equals(id)){
			result="["
	               +"{\"title\":\"重庆市非物质文化遗产条例\",\"subtitle\":\"重庆市非物质文化遗产条例\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"ZC04\"},"
	               +"{\"title\":\"电影艺术档案管理规定\",\"subtitle\":\"电影艺术档案管理规定\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"ZC05\"},"
	               +"{\"title\":\"电影企业经营资格准入暂行规定\",\"subtitle\":\"电影企业经营资格准入暂行规定\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"ZC06\"}"
	               +"]"; 
		}
		else{
			result="["
	               +"{\"title\":\"关于加强博物馆陈列展览工作的意见\",\"subtitle\":\"关于加强博物馆陈列展览工作的意见(国家文物局)\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"ZC07\"},"
	               +"{\"title\":\"加强博物馆安全工作的通知\",\"subtitle\":\"公安部、国家文物局关于进一步加强博物馆安全工作的通知\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"ZC08\"},"
	               +"{\"title\":\"关于促进生态（社区）博物馆发展的通知\",\"subtitle\":\"关于促进生态（社区）博物馆发展的通知\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"ZC09\"}"
	               +"]"; 
		}
		return result;
	}
	
	@GET
    @Path("/getFGList")
    @Produces(MediaType.APPLICATION_JSON)
    public String getFGList(@QueryParam("HYID") String id) {
		String result="";
		if("HY01".equals(id)){
			result="["
	            +"{\"title\":\"娱乐场所审批制度\",\"subtitle\":\"娱乐场所审批相关制度\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"FG01\"},"
	            +"{\"title\":\"放映MTV作品法律法规\",\"subtitle\":\"关于卡拉OK场所放映MTV等作品法律法规\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"FG02\"},"
	            +"{\"title\":\"娱乐场所安全指标\",\"subtitle\":\"娱乐场所消防安全技术标准\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"FG03\"}"
	            +"]"; 
			 }
		else if("HY02".equals(id)){
			result="["
	               +"{\"title\":\"重庆市非物质文化遗产条例\",\"subtitle\":\"重庆市非物质文化遗产条例\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"FG04\"},"
	               +"{\"title\":\"电影艺术档案管理规定\",\"subtitle\":\"电影艺术档案管理规定\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"FG05\"},"
	               +"{\"title\":\"电影企业经营资格准入暂行规定\",\"subtitle\":\"电影企业经营资格准入暂行规定\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"FG06\"}"
	               +"]"; 
		}
		else{
			result="["
	               +"{\"title\":\"关于加强博物馆陈列展览工作的意见\",\"subtitle\":\"关于加强博物馆陈列展览工作的意见(国家文物局)\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"FG07\"},"
	               +"{\"title\":\"加强博物馆安全工作的通知\",\"subtitle\":\"公安部、国家文物局关于进一步加强博物馆安全工作的通知\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"FG08\"},"
	               +"{\"title\":\"关于促进生态（社区）博物馆发展的通知\",\"subtitle\":\"关于促进生态（社区）博物馆发展的通知\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"FG09\"}"
	               +"]"; 
		}
		return result;
	}
	
	@GET
    @Path("/getBZList")
    @Produces(MediaType.APPLICATION_JSON)
    public String getBZList(@QueryParam("HYID") String id) {
		String result="";
		if("HY01".equals(id)){
			result="["
	            +"{\"title\":\"娱乐场所审批制度\",\"subtitle\":\"娱乐场所审批相关制度\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"BZ01\"},"
	            +"{\"title\":\"放映MTV作品法律法规\",\"subtitle\":\"关于卡拉OK场所放映MTV等作品法律法规\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"BZ02\"},"
	            +"{\"title\":\"娱乐场所安全指标\",\"subtitle\":\"娱乐场所消防安全技术标准\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"BZ03\"}"
	            +"]"; 
			 }
		else if("HY02".equals(id)){
			result="["
	               +"{\"title\":\"重庆市非物质文化遗产条例\",\"subtitle\":\"重庆市非物质文化遗产条例\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"BZ04\"},"
	               +"{\"title\":\"电影艺术档案管理规定\",\"subtitle\":\"电影艺术档案管理规定\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"BZ05\"},"
	               +"{\"title\":\"电影企业经营资格准入暂行规定\",\"subtitle\":\"电影企业经营资格准入暂行规定\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"BZ06\"}"
	               +"]"; 
		}
		else{
			result="["
	               +"{\"title\":\"关于加强博物馆陈列展览工作的意见\",\"subtitle\":\"关于加强博物馆陈列展览工作的意见(国家文物局)\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"BZ07\"},"
	               +"{\"title\":\"加强博物馆安全工作的通知\",\"subtitle\":\"公安部、国家文物局关于进一步加强博物馆安全工作的通知\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"BZ08\"},"
	               +"{\"title\":\"关于促进生态（社区）博物馆发展的通知\",\"subtitle\":\"关于促进生态（社区）博物馆发展的通知\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"BZ09\"}"
	               +"]"; 
		}
		return result;
	}
	
	
	
	//****************************************
	//get content
	//
	//***************************************
	@GET
    @Path("/getZC")
    @Produces(MediaType.APPLICATION_JSON)
    public String getZC(@QueryParam("ID") String id) {
		String result="";
		if("ZC01".equals(id)){
			result="["
	            +"{\"title\":\"娱乐场所审批制度\",\"subtitle\":\"娱乐场所审批相关制度\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"BZ01\"},"
	            +"{\"title\":\"放映MTV作品法律法规\",\"subtitle\":\"关于卡拉OK场所放映MTV等作品法律法规\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"BZ02\"},"
	            +"{\"title\":\"娱乐场所安全指标\",\"subtitle\":\"娱乐场所消防安全技术标准\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"BZ03\"}"
	            +"]"; 
			 }
		else if("ZC02".equals(id)){
			result="["
	               +"{\"title\":\"重庆市非物质文化遗产条例\",\"subtitle\":\"重庆市非物质文化遗产条例\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"BZ04\"},"
	               +"{\"title\":\"电影艺术档案管理规定\",\"subtitle\":\"电影艺术档案管理规定\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"BZ05\"},"
	               +"{\"title\":\"电影企业经营资格准入暂行规定\",\"subtitle\":\"电影企业经营资格准入暂行规定\",\"imgId\":\"resources/img/phone_startup.png\",\"id\":\"BZ06\"}"
	               +"]"; 
		}
		return result;
	}
	
	@GET
    @Path("/getFG")
    @Produces(MediaType.APPLICATION_JSON)
    public String getFG(@QueryParam("ID") String id) {
		String result="";
		if("FG01".equals(id)){
			result="<div><h1 align=\"center\"><font size=\"12px\">娱乐场所审批制度</font></h1></div>"
+"<div> <p>一&nbsp;&nbsp; 申办营业性舞厅, 除符合基本条件外, 还应当具备下列条件:<br />&nbsp;&nbsp;&nbsp; " +
"1、舞池面积占营业场地面积的比例: 交谊舞厅为40%以上, 迪斯科舞厅和歌舞厅为30%以上。<br />&nbsp;&nbsp;&nbsp; 2、" +
"舞池和休息座分开设置。<br />&nbsp;&nbsp;&nbsp; 3、有演出活动的舞厅, 应设置固定的演出舞台。<br />&nbsp;&nbsp;&nbsp; " +
"4、开办卡拉OK歌舞厅的,同时应具备卡拉OK厅的开办条件。<br />&nbsp;&nbsp;&nbsp; 5、有衣物寄放室。<br /><br />&nbsp;二、" +
"办事内容:<br />&nbsp;&nbsp;&nbsp; 1、受理开办舞厅、卡拉OK厅、音乐茶座、音乐餐厅、游戏机房、游艺机房、游乐场、台球室及其" +
"他新兴文化娱乐项目的申请。<br />&nbsp;&nbsp;&nbsp; 2、对符合规定的营业性文化娱乐场所发给《文化经营许可证》并进行年度验证。" +
"<br />&nbsp;&nbsp;&nbsp; 二、办事程序: <br />&nbsp;&nbsp;&nbsp; (一)申领《文化经营许可证》<br />&nbsp;&nbsp;&nbsp; " +
"1、星级宾馆<br />&nbsp;&nbsp;&nbsp; （1）在星级宾馆开办文化娱乐场所的，向市社文处提交申请材料(见附录)；对符合要求的，" +
"当日登记、发给申请表。<br />&nbsp;&nbsp;&nbsp; （2）对手续完备、材料齐全的, 在接到申请材料之日起二十日内对经营场所进行审核并作出审批决定。<br />&nbsp;&nbsp;&nbsp; （3）获批准的, 发给《文化经营许可证》；未获批准的，通知申请单位并说明理。 <br />&nbsp;&nbsp;&nbsp; 2、其他单位<br />&nbsp;&nbsp;&nbsp; （1）在星级宾馆之外的地方开办文化娱乐场所的，向所在地的区、县文化管理部门提出申请（申请材料见附录）。<br />&nbsp;&nbsp;&nbsp; （2）区、县文化管理部门接到申请材料后之日起十天内对经营场所进行审核，合格的报市社文处核准。<br />&nbsp;&nbsp;&nbsp; （3）市社文处对提请的材料进行审核。凡符合规定的，在十天内对经营场所进行审核；对符合条件的，发给《文化经营许可证》。<br />&nbsp;&nbsp;&nbsp; 3、临时申请<br />&nbsp;&nbsp;&nbsp; （1）需临时举办营业性文化娱乐活动的单位, 应当提前二十天向文化管理部门提出申请。在星级宾馆举办的向市社文处提出申请，在其他地方举办的向所在区、县文化管理部门提出申请。<br />&nbsp;&nbsp;&nbsp; （2）市社文处在接到申请书或者区、县文化管理部门初审意见之日起十天内, 会同有关部门对申办单位的营业场所进行审核并作出审批决定。<br />&nbsp;&nbsp;&nbsp; （3）经批准后，发给《临时文化经营许可证》。<br />&nbsp;&nbsp;&nbsp; (二) 变更或者注销<br />&nbsp;&nbsp;&nbsp; （1）开办营业性文化娱乐场所的单位和个人变更经营方式、经营范围、经营地址、法定代表人或者终止经营时, 必须向有关行政管理部门办理变更或者注销手续。<br />&nbsp;&nbsp;&nbsp; （2）市社文处自接到变更或注销申请材料后，在十天内办理完毕。<br />&nbsp;&nbsp;&nbsp; (三) 年检验证<br />&nbsp;&nbsp;&nbsp; （1）营业性文化娱乐场所应在每年3月按市社文处年检要求进行自查, 并填写“年检报告书”，连同《文化经营许可证》(正、副本)按管理分工分别报社文处或区、县文化管理部门。<br />&nbsp;&nbsp;&nbsp; （2）区、县文化管理部门对所管辖的单位进行核查，汇总后报市社文处。<br />&nbsp;&nbsp;&nbsp; （3）对年检合格的单位, 在《文化经营许可证》上加贴“年检合格”标志，对不合格的单位限期整改直至注销“许可证”。 <br />&nbsp;&nbsp;&nbsp; 附录一：申办条件<br />&nbsp;&nbsp;&nbsp; 一、基本条件<br />&nbsp;&nbsp;&nbsp; 1、场所负责人和有关工作人员已经取得市社会文化管理处颁发的《上岗合格证》。 <br />&nbsp;&nbsp;&nbsp; 2、舞厅、游戏机房营业场地面积在200平方米以上; 音乐茶座、音乐餐厅、卡拉 OK厅、 台球室营业场地面积在40平方米以上; 卡拉OK包房的营业场地面积在8平方米以上; 游艺机房营业场地面积在500平方米以上。<br />　&nbsp; 音乐茶座、音乐餐厅如要举办时装表演、歌舞表演和其他大型活动, 营业场地面积不得少于150平方米, 并设置固定的演出舞台。<br />&nbsp;&nbsp;&nbsp; 3、有固定的营业场所，并具有营业场所的房地产权证书和房屋租赁合同。<br />&nbsp;&nbsp;&nbsp; 4、场所的建筑结构安全合理, 消防设施齐全有效, 出入口设置明显的指示牌, 门向外开启; 营业场所面积在120平方米以上的, 须设置两个以上的出入通道; 取得消防合格证明。<br />&nbsp;&nbsp;&nbsp; 5、有必要的照明设备和停电应急措施。<br />&nbsp;&nbsp;&nbsp; 6、卫生、通风、防噪声等设施符合标准。<br />&nbsp;&nbsp;&nbsp; 7、有必要的管理制度。 <br />&nbsp;&nbsp;&nbsp; 8、在公共图书馆、博物馆、美术馆、医院、陵园、公墓、中小学校、幼儿园、少儿活动场所等场所内不得开办营业性文化娱乐场所。</p>"
+"<p>&nbsp;&nbsp;&nbsp; 三、申办营业性游戏(艺)机房、台球室, 除符合基本条件外, 还应当具备下列条件:<br />&nbsp;&nbsp;&nbsp; 1、游戏(艺)机房内通道宽在2米以上, 台球室球台间间距在1．5米以上。<br />&nbsp;&nbsp;&nbsp; 2、游戏(艺)机的机种、型号、照片、游艺方法文字说明以及台球型号等应报市社文处审核。<br />&nbsp;&nbsp;&nbsp; 3、游艺机房设置的有奖游艺机机种应当具有知识性、技巧性、趣味性、娱乐性，其数量不超过游艺机总数的50%。游艺机房设置的模拟机应当适合少年儿童，其数量不得超过游艺机总数的20%。<br />&nbsp;&nbsp;&nbsp; 4、使用游艺机进行有奖经营活动的，提供的奖品应当是适合少年儿童的学习用品或玩具，奖品目录应当报市社文处备案。<br />&nbsp;&nbsp;&nbsp; 5、在道路、弄堂、绿化地带、集市等露天场所和中小学校200米范围内不得设置营业性游戏(艺)机房.<br />&nbsp;&nbsp;&nbsp; 四、申办营业性卡拉OK厅, 除符合基本条件外, 还应当具备下列条件:<br />&nbsp;&nbsp;&nbsp; 1、营业性卡拉OK厅至少须有包含1000首以上歌曲的经国家批准的音像出版单位出版、发行的音像制品。<br />&nbsp;&nbsp;&nbsp; 郊县营业性餐饮卡拉OK厅至少须有包含250首以上歌曲的经国家批准的音像出版单位出版、发行的音像制品。<br />&nbsp;&nbsp;&nbsp; 2、市区开办营业性卡拉OK包房需十间以上, 郊县需五间以上。 市区营业性餐饮卡拉OK包房需有二间以上, 郊县不作限制。<br />&nbsp;&nbsp;&nbsp; 3、包房的照明设备由室外控制, 房内不得设置内锁门装置、洗手间和其他辅助用房。<br />&nbsp;&nbsp;&nbsp; 4、房门或者沿过道一侧的隔离墙离地1．2米起安装透明材料。透明材料面积应在0.4平方米以上, 透视清晰。<br />&nbsp;&nbsp;&nbsp; 5、餐饮场所附设卡拉OK设备只供顾客观赏的，按音乐餐厅开办条件申请。</p>"
+"<p><br />&nbsp;&nbsp;&nbsp; 五、申办营业性游乐场, 除符合基本条件外, 还应当具备下列条件:<br />&nbsp;&nbsp;&nbsp; 1、有与游乐内容相适应的营业场地和配套设施。<br />&nbsp;&nbsp;&nbsp; 2、游乐器具的安装和使用符合国家有关部门规定的技术标准。<br />&nbsp;&nbsp;&nbsp; 3、在营业性文化游乐场内开办舞厅、音乐茶座、音乐餐厅、卡拉OK厅、游戏(艺)机房、台球室等文化娱乐项目以及举办其他文化娱乐经营活动的, 应当按照有关规定另行办理.</p><br />"
+"</div>"; 
			 }
		else if("FG02".equals(id)){
			result="<div><h1 align=\"center\"><font size=\"12px\">关于卡拉OK场所放映MTV等作品法律法规</font></h1></div>"+
"<div> &nbsp;&nbsp;&nbsp; 关于卡拉OK场所放映MTV等作品法律的相关规定是怎样的呢？我们简单的从以下几个方面来看看。<br />"+
"&nbsp;&nbsp;&nbsp; 首先看看法律是怎样保护音乐电视/MTV、音乐录影/MV和卡拉OK 作品的呢？<br />"+
"&nbsp;&nbsp;&nbsp; 这一方面是有著作权法 来保护的。著作权法第十条第十项规定，著作权人对其作品享有放映权，“即通过放映机、幻灯机等技术设备公开再现美术、摄影、电影和以类似摄制电影的方法创作的作品等的权利”。著作权法第十五条规定：“电影作品和以类似摄制电影的方法创作的作品的著作权由制片者享有”。唱片公司（或者音像公司）作为这些音乐电视/MTV、音乐录影/MV和卡拉OK 作品的权利人，对其享有放映权等著作权的各项权利，未经许可，他人不得使用，否则即构成对著作权人合法权利的侵害。 <br />"+
"&nbsp;&nbsp;&nbsp; 其次我们在看看音乐电视/MTV、音乐录影/MV和卡拉OK 是如何创作出来的呢？<br />"+
"&nbsp;&nbsp;&nbsp; 音乐电视/MTV、音乐录影/MV和卡拉OK 作品是一种与制作技术密切相关的艺术，有些作品还包含有许多新技术的特技运用，如电脑绘画、特技合成、视觉特效、视觉超时空运动等等。它完全符合摄制电影作品的特点，是以类似摄制电影的方法创作的作品。 <br />"+
"&nbsp;&nbsp;&nbsp; 如果有些人士侵犯了别人的权利，应当受到怎样的法律制裁呢？<br />"+
"&nbsp;&nbsp;&nbsp; 著作权法对音乐电视/MTV、音乐录影/MV和卡拉OK 作品著作权人的权利规定清晰而明确，权利人的合法权利一定要得到尊重和维护，卡拉OK经营者必须要合法使用音乐电视/MTV、音乐录影/MV和卡拉OK 作品。受托律师事务所接受广大中外音乐电视/MTV、音乐录影/MV和卡拉OK 作品的著作权人的授权委托，代表中外音乐电视/MTV、音乐录影/MV和卡拉OK 作品的著作权人要求卡拉OK营业场所的经营者尊重和维护著作权人的合法权益，在经著作权人许可使用后，合法使用音乐电视/MTV、音乐录影/MV和卡拉OK 作品。<br />"+
"&nbsp;&nbsp;&nbsp; 现在很多的娱乐场所存在侵权行为，为了让这些侵权的做出赔偿法律已经做出了相应的措施。一些娱乐场所的相关人士应当多了解这方面的法律法规。<br />"; 
		}
		return result;
	}
	
	@GET
    @Path("/getBZ")
    @Produces(MediaType.APPLICATION_JSON)
    public String getBZ(@QueryParam("ID") String id) {
		String result="";
		
		return result;
	}
	
	@GET
    @Path("/getFlowChart")
    @Produces(MediaType.APPLICATION_JSON)
    public String getFlowChart(@QueryParam("ID") String id) {
		String result="";
		if("HY01".equals(id)){
		result="["
            +"{\"name\":\"工商分局\",\"title\":\"企业名称预先核准\",\"imgId\":\"gongshang.jpg\",\"id\":\"ACT01\",\"rowid\":\"01\"},"
            +"{\"name\":\"消防支队\",\"title\":\"消防验收合格意见书\",\"imgId\":\"xiaofang.jpg\",\"id\":\"ACT02\",\"rowid\":\"02\"},"
            +"{\"name\":\"环保局\",\"title\":\"建设项目竣工环境保护验收意见书\",\"imgId\":\"huanbao.jpg\",\"id\":\"ACT03\",\"rowid\":\"02\"},"
            +"{\"name\":\"卫生局\",\"title\":\"卫生许可证\",\"imgId\":\"weisheng.jpg\",\"id\":\"ACT04\",\"rowid\":\"03\"},"
            +"{\"name\":\"文广新局\",\"title\":\"娱乐经营许可证\",\"imgId\":\"wenguang.jpg\",\"id\":\"ACT05\",\"rowid\":\"04\"},"
            +"{\"name\":\"工商分局\",\"title\":\"食品流通许可证\",\"imgId\":\"gongshang.jpg\",\"id\":\"ACT06\",\"rowid\":\"04\"},"
            +"{\"name\":\"工商分局\",\"title\":\"工商营业执照\",\"imgId\":\"gongshang.jpg\",\"id\":\"ACT07\",\"rowid\":\"04\"},"
            +"{\"name\":\"卫生局\",\"title\":\"卫生许可证\",\"imgId\":\"weisheng.jpg\",\"id\":\"ACT08\",\"rowid\":\"05\"},"
            +"{\"name\":\"卫生局\",\"title\":\"卫生许可证\",\"imgId\":\"weisheng.jpg\",\"id\":\"ACT09\",\"rowid\":\"06\"},"
            +"{\"name\":\"卫生局\",\"title\":\"卫生许可证\",\"imgId\":\"weisheng.jpg\",\"id\":\"ACT10\",\"rowid\":\"06\"},"
            +"{\"name\":\"地税局\",\"title\":\"税务登记证\",\"imgId\":\"dishui.jpg\",\"id\":\"ACT11\",\"rowid\":\"07\"}"
            +"]"; 
		}
		else{
			result="["
	            +"{\"name\":\"工商分局\",\"title\":\"企业名称预先核准\",\"imgId\":\"gongshang.jpg\",\"id\":\"ACT01\",\"rowid\":\"01\"},"
	            +"{\"name\":\"消防支队\",\"title\":\"消防验收合格意见书\",\"imgId\":\"xiaofang.jpg\",\"id\":\"ACT02\",\"rowid\":\"02\"},"
	            +"{\"name\":\"环保局\",\"title\":\"建设项目竣工环境保护验收意见书\",\"imgId\":\"huanbao.jpg\",\"id\":\"ACT03\",\"rowid\":\"03\"},"
	            +"{\"name\":\"卫生局\",\"title\":\"卫生许可证\",\"imgId\":\"weisheng.jpg\",\"id\":\"ACT04\",\"rowid\":\"03\"},"
	            +"{\"name\":\"文广新局\",\"title\":\"娱乐经营许可证\",\"imgId\":\"wenguang.jpg\",\"id\":\"ACT05\",\"rowid\":\"04\"},"
	            +"{\"name\":\"工商分局\",\"title\":\"食品流通许可证\",\"imgId\":\"gongshang.jpg\",\"id\":\"ACT06\",\"rowid\":\"04\"},"
	            +"{\"name\":\"工商分局\",\"title\":\"工商营业执照\",\"imgId\":\"gongshang.jpg\",\"id\":\"ACT07\",\"rowid\":\"04\"},"
	            +"{\"name\":\"卫生局\",\"title\":\"卫生许可证\",\"imgId\":\"weisheng.jpg\",\"id\":\"ACT08\",\"rowid\":\"04\"},"
	            +"{\"name\":\"卫生局\",\"title\":\"卫生许可证\",\"imgId\":\"weisheng.jpg\",\"id\":\"ACT09\",\"rowid\":\"04\"},"
	            +"{\"name\":\"卫生局\",\"title\":\"卫生许可证\",\"imgId\":\"weisheng.jpg\",\"id\":\"ACT10\",\"rowid\":\"05\"},"
	            +"{\"name\":\"地税局\",\"title\":\"税务登记证\",\"imgId\":\"dishui.jpg\",\"id\":\"ACT11\",\"rowid\":\"06\"}"
	            +"]"; 
			
		}
		return result;
		
	}
	
	@GET
    @Path("/getFlowItemContent")
    @Produces(MediaType.APPLICATION_JSON)
    public String getFlowItemContent(@QueryParam("ID") String id) {
		String result="";
		if("ACT01".equals(id)){
		result="{\"name\":\"工商分局\",\"title\":\"企业名称登记\"" +
            		",\"content\":\"1、全体投资人签署的《企业名称预先核准申请书》;" +
            		" 2、全体投资人签署的《指定代表或者共同委托代理人的证明》及指定代表或者共同委托代理人的身份"
            		+"证复印件（本人签字）；应标明具体委托事项、被委托人的权限、委托期限。"
            		+" 3、申请名称冠以“中国”、“中华”、“国家”、“全国”、“国际”字词的，提交国务院的批准文件复印件;"
            		+"4、特殊的申请名称，名称登记机关可以要求投资人提交相关的说明或者证明材料。"
            		+"注：　  以上需投资人签署的，投资人为自然人的由本人签字；自然人以外的投资人加盖公章。\"," +
            		"\"contact\":{\"name\":\"测试人员\",\"seat\":\"行政服务大厅二楼003号\",\"tel\":\"023-111000\"},"+
            				"\"files\":[{\"file\":\"企业（字号）名称预先核准通知书1.rar\",\"name\":\"《企业名称预先核准申请书》\"}," +
            				"{\"file\":\"指定代表或者共同委托代理人的证明1.rar\",\"name\":\"《指定代表或者共同委托代理人的证明》\"}]," +
            				"\"rowid\":\"01\"}"; 
		}
		else if("ACT02".equals(id)){
			
			result="{\"name\":\"工商分局\",\"title\":\"企业集团核准登记\"" +
	            		",\"content\":\"《企业法人登记管理条例》（国务院令第1号，1988年6月3日公布）" +
	            		"第五条：“经国务院或者国务院授权部门批准的全国性公司、" +
	            		"企业集团、经营进出口业务的公司，由国家工商行政管理局核准登记注册。" +
	            		"中外合资经营企业、中外合作经营企业、外资企业由国家工商行政管理局或者国家" +
	            		"工商行政管理局授权的地方工商行政管理局核准登记注册。”\"," +
	            		"\"contact\":{\"name\":\"测试人员2\",\"seat\":\"行政服务大厅一楼012号\",\"tel\":\"023-13341000\"},"+
        				"\"files\":[{\"file\":\"建设工程消防设计审核申报表.rar\",\"name\":\"《建设工程消防设计审核申报表》\"}," +
        				"{\"file\":\"建设工程消防验收申报表3.rar\",\"name\":\"《建设工程消防验收申报表》\"}," +
        				"{\"file\":\"消防安全检查申报表4.rar\",\"name\":\"《消防安全检查申报表》\"}]," +
        				"\"rowid\":\"01\"}"; 
		}
		else{
			
			result="{\"name\":\"工商分局\",\"title\":\"商标注册\"" +
	            		",\"content\":\"《中华人民共和国商标法》（2013年8月30日第十二届全国人民代表大会常务委员会第四次会议修订）" +
	            		"第二条：“国务院工商行政管理部门商标局主管全国商标注册和管理的工作。”第四条：“自然人、" +
	            		"法人或者其他组织在生产经营活动中，对其商品或者服务需要取得商标专用权的，应当向商标局申请商标注册。" +
	            		"本法有关商品商标的规定，适用于服务商标。”\"," +
	            		"\"contact\":{\"name\":\"测试人员3\",\"seat\":\"行政服务大厅二楼032号\",\"tel\":\"023-166341000\"},"+
        				"\"files\":[{\"file\":\"建设工程消防设计审核申报表.rar\",\"name\":\"《书面申请书》\"}," +
        				"{\"file\":\"建设工程消防验收申报表3.rar\",\"name\":\"《审核登记表》\"}," +
        				"{\"file\":\"消防安全检查申报表4.rar\",\"name\":\"《指定代表或者共同委托代理人的证明》\"}]," +
        				"\"rowid\":\"01\"}"; 
		}
		return result;
	}
}
