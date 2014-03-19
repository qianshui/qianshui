/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50096
Source Host           : localhost:3306
Source Database       : qianshui

Target Server Type    : MYSQL
Target Server Version : 50096
File Encoding         : 65001

Date: 2014-03-17 15:28:41
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `attachment`
-- ----------------------------
DROP TABLE IF EXISTS `attachment`;
CREATE TABLE `attachment` (
  `ID` char(10) NOT NULL,
  `Title` varchar(100) default NULL,
  `Description` varchar(100) default NULL,
  `Comments` varchar(100) default NULL,
  `DownloadLink` varchar(100) default NULL,
  PRIMARY KEY  (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of attachment
-- ----------------------------

-- ----------------------------
-- Table structure for `flow`
-- ----------------------------
DROP TABLE IF EXISTS `flow`;
CREATE TABLE `flow` (
  `ID` char(10) NOT NULL,
  `SubjectID` char(100) default NULL,
  `Title` varchar(100) default NULL,
  `Description` varchar(100) default NULL,
  `AddTime` datetime default NULL,
  `Submitter` varchar(255) default NULL,
  `Type` enum('') default NULL,
  PRIMARY KEY  (`ID`),
  KEY `SubjectID` (`SubjectID`),
  CONSTRAINT `flow_ibfk_1` FOREIGN KEY (`SubjectID`) REFERENCES `subject` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of flow
-- ----------------------------

-- ----------------------------
-- Table structure for `laws`
-- ----------------------------
DROP TABLE IF EXISTS `laws`;
CREATE TABLE `laws` (
  `ID` char(10) NOT NULL,
  `Title` varchar(100) default NULL,
  `Content` varchar(255) default NULL,
  `AddTime` datetime default NULL,
  `Submitter` varchar(255) default NULL,
  `Micro` tinyint(1) default NULL,
  PRIMARY KEY  (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of laws
-- ----------------------------

-- ----------------------------
-- Table structure for `locationsite`
-- ----------------------------
DROP TABLE IF EXISTS `locationsite`;
CREATE TABLE `locationsite` (
  `ID` int(10) NOT NULL auto_increment,
  `Name` varchar(100) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `Coordinate` varchar(255) default NULL,
  `Type` char(10) default NULL,
  `Longitude` double default NULL,
  `Latitude` double default NULL,
  `SubjectID` char(10) default NULL,
  PRIMARY KEY  (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=162 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of locationsite
-- ----------------------------
INSERT INTO `locationsite` VALUES ('1', '酒店名称', '地址', null, null, null, null, null);
INSERT INTO `locationsite` VALUES ('2', '重庆布丁酒店连锁（解放碑步行街店', '渝中区解放碑八一路218号6F（好吃街，国美电器对面）', null, null, '29.561244', '106.583384', null);
INSERT INTO `locationsite` VALUES ('3', '重庆布丁酒店连锁（观音桥步行街店', '江北区观音桥步行街7号世纪新都9楼（轻轨观音桥站2号口出约90米）', null, null, '29.578846', '106.537121', null);
INSERT INTO `locationsite` VALUES ('5', '汉庭酒店（重庆解放碑店）', '渝中区民生路5号（ 解放碑 ，近解放碑步行街 ）', null, null, '29.560757', '106.580249', null);
INSERT INTO `locationsite` VALUES ('6', '汉庭酒店（重庆解放碑步行街店）', '渝中区民权路27号（新华国际大厦7楼）（ 解放碑 ，近中华路 ）', null, null, '29.561924', '106.582788', null);
INSERT INTO `locationsite` VALUES ('7', '汉庭酒店（重庆大坪店）', '渝中区大坪正街116号（ 大坪 ，重庆电信公司斜对面 ）', null, null, '29.546522', '106.521181', null);
INSERT INTO `locationsite` VALUES ('8', '汉庭酒店（重庆上清寺店）', '渝中区重庆市渝中区中山三路159号', null, null, '29.564452', '106.554906', null);
INSERT INTO `locationsite` VALUES ('9', '汉庭酒店（重庆火车北站店）', '渝北区北部新区昆仑大道50号（ 火车北站、龙头寺 ，火车北站售票厅对面 ）', null, null, '29.613097', '106.55482', null);
INSERT INTO `locationsite` VALUES ('10', '汉庭酒店（重庆观音桥店）', '江北区重庆观音桥步行街建新西路4号拓展大厦（ 观音桥 ，近观音桥步行街 ）', null, null, '29.578112', '106.53788', null);
INSERT INTO `locationsite` VALUES ('11', '汉庭酒店（重庆加州店）', '江北区松牌路81号（ 观音桥 ，近米兰天空小区 ）', null, null, '29.59414', '106.516925', null);
INSERT INTO `locationsite` VALUES ('12', '汉庭酒店（重庆杨家坪步行街店）', '九龙坡区杨家坪前进路53号（ 杨家坪 ，近重庆动物园 ）', null, null, '29.512168', '106.518876', null);
INSERT INTO `locationsite` VALUES ('13', '汉庭酒店（重庆陈家坪店）', '九龙坡区陈家坪朝田村157号（ 石桥铺、陈家坪 ，近陈家坪汽车站 ）', null, null, '29.529438', '106.496725', null);
INSERT INTO `locationsite` VALUES ('14', '汉庭酒店（重庆沙坪坝店）', '沙坪坝区沙南街43号（ 沙坪坝 ，近沙杨路 ）', null, null, '29.568535', '106.468436', null);
INSERT INTO `locationsite` VALUES ('15', '汉庭酒店（重庆南坪万达店）（原南坪步行街中心店）', '南岸区南城大道197号（南岸区政府旁）', null, null, '29.529401', '106.571233', null);
INSERT INTO `locationsite` VALUES ('16', '汉庭酒店（丹龙路店） ', '南岸区南城大道7号（南城大道与南湖路交汇处）', null, null, '29.529482', '106.575744', null);
INSERT INTO `locationsite` VALUES ('17', '汉庭酒店（重庆南坪店）', '南岸区南坪东路15号（ 南岸 ，近现代女子医院 ）', null, null, '29.535898', '106.57844', null);
INSERT INTO `locationsite` VALUES ('19', '如家快捷酒店（重庆大坪店）', '渝中区大坪长江二路101号（ 大坪 ，近迎宾大道 ）', null, null, '29.54408', '106.524363', null);
INSERT INTO `locationsite` VALUES ('20', '如家快捷酒店（重庆上清寺文化宫店）', '渝中区中山三路155号（ 上清寺、人民广场 ，近大田湾体育馆 ）', null, null, '29.563914', '106.55522', null);
INSERT INTO `locationsite` VALUES ('21', '如家快捷酒店（重庆解放碑步行街店）', '渝中区八一路218号（ 解放碑 ，近中华路 ） ', null, null, '29.562062', '106.583846', null);
INSERT INTO `locationsite` VALUES ('22', '如家快捷酒店（重庆解放碑沧白路店）', '渝中区沧白路52号（ 解放碑 ，近洪崖洞民俗风情街 ）', null, null, '29.568674', '106.587248', null);
INSERT INTO `locationsite` VALUES ('23', '如家快捷酒店（重庆上清寺牛角沱店）（原上清寺店）', '渝中区上清寺路47号（ 上清寺、人民广场 ，近牛角沱转盘 ）', null, null, '29.564138', '106.550932', null);
INSERT INTO `locationsite` VALUES ('24', '如家快捷酒店（重庆解放碑洪崖洞店）', '渝中区解放碑临江路6号（ 解放碑 ，近王府井百货商场 ）', null, null, '29.567227', '106.584106', null);
INSERT INTO `locationsite` VALUES ('25', '如家快捷酒店（重庆江北机场双凤路店）', '渝北区双凤桥街道双凤路178号（ 江北机场 ，近重庆江北机场 ） ', null, null, '29.730626', '106.637017', null);
INSERT INTO `locationsite` VALUES ('26', '如家快捷酒店（重庆火车北站龙头寺店）', '渝北区泰山大道东段98号附5号（火车站广场左对面\"商务酒店区\"内', null, null, '29.610032', '106.564246', null);
INSERT INTO `locationsite` VALUES ('27', '如家快捷酒店（泰山大道店）', '渝北区泰山大道中段华宇北城中央2号楼1单元6楼', null, null, '29.610022', '106.551949', null);
INSERT INTO `locationsite` VALUES ('28', '如家快捷酒店（重庆观音桥建新东路店）', '江北区建新东路23号附5号（ 观音桥 ，近三二四医院 ）', null, null, '29.580565', '106.54545', null);
INSERT INTO `locationsite` VALUES ('29', '如家快捷酒店（重庆观音桥北滨路店）', '江北区金源路62号附26号（ 观音桥 ，近北滨路 ', null, null, '29.56245', '106.535621', null);
INSERT INTO `locationsite` VALUES ('30', '如家快捷酒店（重庆杨家坪石坪桥店）', '九龙坡区石坪桥横街20号（石坪桥转盘）（ 杨家坪 ，近杨家坪步行街 ）', null, null, '29.521703', '106.508747', null);
INSERT INTO `locationsite` VALUES ('31', '如家快捷酒店（重庆石桥铺彩电中心店）', '九龙坡区渝州路108号（ 石桥铺、陈家坪 ，近科园四路 ）', null, null, '29.539807', '106.499798', null);
INSERT INTO `locationsite` VALUES ('32', '如家快捷酒店（重庆沙坪坝三峡广场店）', '沙坪坝区沙杨路1号（南开中学旁）（ 沙坪坝 ，近南开中学 ） ', null, null, '29.567928', '106.468605', null);
INSERT INTO `locationsite` VALUES ('33', '如家快捷酒店（重庆沙坪坝店）', '沙坪坝区小龙坎正街333-27号（ 沙坪坝 ，石碾盘蓝天医院旁 ） ', null, null, '29.554805', '106.465602', null);
INSERT INTO `locationsite` VALUES ('34', '如家快捷酒店（重庆沙坪公园店）', '沙坪坝区小龙坎正街366号（ 沙坪坝 ，近石小路 ）', null, null, '29.556351', '106.466581', null);
INSERT INTO `locationsite` VALUES ('35', '如家快捷酒店（小龙坎新街店）', '沙坪坝区小龙坎新街29号华宇广场1号世纪银河8楼', null, null, '29.562459', '106.469594', null);
INSERT INTO `locationsite` VALUES ('36', '如家快捷酒店（重庆会展中心店）', '南岸区重庆市南岸区南坪新街91号（附7号）（ 南岸 ，近重庆国际会展中心 ）', null, null, '29.539014', '106.573521', null);
INSERT INTO `locationsite` VALUES ('38', '速8酒店（重庆朝天门店）', '渝中区朝千路30号平街（ 解放碑 ，近朝天门 ', null, null, '29.569933', '106.59035', null);
INSERT INTO `locationsite` VALUES ('39', '速8酒店（重庆大礼堂店）', '渝中区人民路238号附1号（重庆市政府、大礼堂、三峡博物馆旁）', null, null, '29.571482', '106.558055', null);
INSERT INTO `locationsite` VALUES ('40', '速8酒店（重庆石桥铺店）', '九龙坡区石桥铺渝州路60号（ 石桥铺、陈家坪 ，近重庆协和医院 ）', null, null, '29.538444', '106.492379', null);
INSERT INTO `locationsite` VALUES ('42', '7天连锁酒店（重庆解放碑较场口地铁站店）', '渝中区中兴路112号（地铁较场口站5号出口旁）', null, null, '29.558907', '106.576672', null);
INSERT INTO `locationsite` VALUES ('43', '7天连锁酒店（重庆上清寺机场大巴站店）', '渝中区上清寺美专校街10号（ 上清寺、人民广场 ，重庆机场巴士始发站旁 ）', null, null, '29.565077', '106.55399', null);
INSERT INTO `locationsite` VALUES ('44', '7天连锁酒店（重庆解放碑一号桥店）', '渝中区华一路一号卡萨国际公寓（ 解放碑 ，近一号桥 ）', null, null, '29.566805', '106.575633', null);
INSERT INTO `locationsite` VALUES ('45', '7天连锁酒店（重庆解放碑中心店）', '渝中区民族路92号（ 解放碑 ，罗汉寺旁 ）', null, null, '29.566959', '106.587417', null);
INSERT INTO `locationsite` VALUES ('46', '7天连锁酒店（重庆菜园坝火车站店）', '渝中区南区路230号（ 上清寺、人民广场 ，菜园坝火车站对面 ） ', null, null, '29.557353', '106.555542', null);
INSERT INTO `locationsite` VALUES ('47', '7天连锁酒店（重庆大礼堂店）', '渝中区学田湾正街49号（ 上清寺、人民广场 ，重百超市旁 ）', null, null, '29.565515', '106.55815', null);
INSERT INTO `locationsite` VALUES ('48', '7天连锁酒店（重庆解放碑店）', '渝中区凯旋路22号（ 解放碑 ，复旦中学旁 ）', null, null, '29.557827', '106.583343', null);
INSERT INTO `locationsite` VALUES ('49', '7天连锁酒店（重庆解放碑好吃街店）', '渝中区较场口中兴路5号（ 解放碑 ，穆斯林大厦内 ）', null, null, '29.558907', '106.578418', null);
INSERT INTO `locationsite` VALUES ('50', '7天连锁酒店（重庆解放碑步行街店）', '渝中区民生路181号（ 解放碑 ，临江门重宾旁 ）', null, null, '29.563665', '106.578268', null);
INSERT INTO `locationsite` VALUES ('51', '7天连锁酒店（重庆大溪沟轻轨站店）', '渝中区大溪沟北区路67号星都大厦（ 上清寺、人民广场 解放碑，平安保险旁 ）', null, null, '29.56949', '106.566975', null);
INSERT INTO `locationsite` VALUES ('52', '7天连锁酒店（重庆上清寺中心店）', '渝中区上清寺中山三路168号中安国际大厦（ 上清寺、人民广场 ，重庆电台对面 ）', null, null, '29.56493', '106.555021', null);
INSERT INTO `locationsite` VALUES ('53', '7天连锁酒店（重庆大坪店）', '渝中区长江二路10号附3号（ 大坪 ，近肖家湾车站 ）', null, null, '29.548301', '106.532864', null);
INSERT INTO `locationsite` VALUES ('54', '7天连锁酒店（重庆江北机场空港工业园店）', '渝北区双凤桥街道碧湖路7号附3号（ 江北机场 ，渝北中学中门对面 ） ', null, null, '29.7601', '106.641376', null);
INSERT INTO `locationsite` VALUES ('55', '7天连锁酒店（重庆龙头寺火车北站店）', '渝北区北部新区泰山大道东段60号附24号华宇北城中央A区（重庆北站正对面）', null, null, '29.693158', '106.59279', null);
INSERT INTO `locationsite` VALUES ('56', '7天连锁酒店（重庆龙湖店）', '渝北区龙华大道6号（ 观音桥 ，龙湖医院旁 ）', null, null, '29.605193', '106.514747', null);
INSERT INTO `locationsite` VALUES ('57', '7天连锁酒店（重庆红旗河沟店）', '江北区红旗河沟红石路2号5F（ 观音桥 ，中百仓储超市楼上 ）', null, null, '29.589646', '106.532323', null);
INSERT INTO `locationsite` VALUES ('58', '7天连锁酒店（重庆观音桥华新街轻轨站店）', '江北区建新南路18号城市领地A座（ 观音桥 ，近华新街车站 ）', null, null, '29.572376', '106.543525', null);
INSERT INTO `locationsite` VALUES ('59', '7天连锁酒店（重庆观音桥店）', '江北区建新东路19号船舶大厦2楼（观音桥步行街朝五里店方向200m）', null, null, '29.580726', '106.54475', null);
INSERT INTO `locationsite` VALUES ('60', '7天连锁酒店（重庆观音桥步行街店）', '江北区建新东路54号白云大厦1楼（ 观音桥 ，近观音桥步行街 ） ', null, null, '29.580362', '106.544958', null);
INSERT INTO `locationsite` VALUES ('61', '7天连锁酒店（重庆杨家坪轻轨站店）', '九龙坡区杨家坪西郊路2号（ 杨家坪 ，近天宝路 ）', null, null, '29.514119', '106.520429', null);
INSERT INTO `locationsite` VALUES ('62', '7天连锁酒店（重庆石桥铺科园一路店）', '九龙坡区石桥铺科园一街25号新锐地带C座（ 石桥铺、陈家坪 ，重庆电大旁 ）', null, null, '29.53759', '106.493865', null);
INSERT INTO `locationsite` VALUES ('63', '7天连锁酒店（袁家岗奥体中心店）', '九龙坡区袁家岗路162号', null, null, '29.529583', '106.517142', null);
INSERT INTO `locationsite` VALUES ('64', '7天连锁酒店（重庆杨家坪步行街店）', '九龙坡区杨家坪兴胜路65号（ 杨家坪 ，近UME影院 ）', null, null, '29.518678', '106.522134', null);
INSERT INTO `locationsite` VALUES ('65', '7天连锁酒店（重庆石桥铺店）', '九龙坡区高新区石桥铺科园一路3号渝高大厦（ 石桥铺、陈家坪 ，赛博电脑城旁 ）', null, null, '29.537299', '106.492179', null);
INSERT INTO `locationsite` VALUES ('66', '7天连锁酒店（重庆陈家坪汽车站店）', '九龙坡区陈家坪科园三街136号6楼（ 石桥铺、陈家坪 ，近陈家坪长途汽车站 ）', null, null, '29.533104', '106.496441', null);
INSERT INTO `locationsite` VALUES ('67', '7天连锁酒店（重庆沙坪坝步行街店）', '沙坪坝区小龙坎新街74号金沙国际大厦7楼（ 沙坪坝 ，三峡广场旁 ）', null, null, '29.564788', '106.470202', null);
INSERT INTO `locationsite` VALUES ('68', '7天连锁酒店（重庆沙坪坝店）', '沙坪坝区汉渝路43号智博大厦9楼-12楼（ 沙坪坝 ，汉渝路464公交起点站正对面 ）', null, null, '29.565562', '106.47519', null);
INSERT INTO `locationsite` VALUES ('69', '7天连锁酒店（重庆沙坪坝重庆大学店）', '沙坪坝区渝碚路222附1号（ 大学城 ） ', null, null, '29.569256', '106.461337', null);
INSERT INTO `locationsite` VALUES ('70', '7天连锁酒店（重庆南坪步行街店）', '南岸区南坪二小区红绿灯路口（ 南岸 ，珊瑚大厦旁 ）', null, null, '29.530635', '106.57254', null);
INSERT INTO `locationsite` VALUES ('71', '7天连锁酒店（重庆南坪万达广场店）', '南岸区南坪东路7号（ 南岸 ，重百南坪商场旁 ）', null, null, '29.536147', '106.575578', null);
INSERT INTO `locationsite` VALUES ('72', '7天连锁酒店（重庆南坪上海城店）', '南岸区南坪开发路31号科尔大厦（ 南岸 ，上海城百联购物广场旁 ）', null, null, '29.536239', '106.569545', null);
INSERT INTO `locationsite` VALUES ('73', '7天连锁酒店（珊瑚店）', '南岸区南坪珊瑚村118号珊瑚大厦特1号', null, null, '29.530516', '106.573667', null);
INSERT INTO `locationsite` VALUES ('74', '7天连锁酒店（重庆北碚天奇广场步行街店）', '北碚区牌坊湾粮食路15号九院门诊部左行100米（红叶会所对面）', null, null, '29.831075', '106.453312', null);
INSERT INTO `locationsite` VALUES ('75', '7天连锁酒店（重庆北碚西南大学店）', '北碚区云泉路18号（国美电器四楼）', null, null, '29.830065', '106.439573', null);
INSERT INTO `locationsite` VALUES ('76', '7天连锁酒店（重庆合川汽车中心站店）', '合川区合阳办马家沟36号（新客运中心站后面）', null, null, '30.118708', '106.318029', null);
INSERT INTO `locationsite` VALUES ('77', '7天连锁酒店（重庆涪陵南门山步行街店）', '涪陵区人民西路26号友锦广场（ 涪陵区 ，宏声桥公交站正对面 ） ', null, null, '29.714024', '107.403302', null);
INSERT INTO `locationsite` VALUES ('78', '7天连锁酒店（重庆黔江交西路店）', '黔江区交通西路（山台山）路口往西100米处（ 黔江区 ，近山台山 ）', null, null, '29.529327', '108.787395', null);
INSERT INTO `locationsite` VALUES ('79', '7天连锁酒店（重庆永川客运中心站店）', '永川区内环南路611号客运中心候车厅右侧4楼（ 永川区 ，近客运中心 ）', null, null, '29.348814', '105.908462', null);
INSERT INTO `locationsite` VALUES ('81', '莫泰168（重庆上清寺牛角沱轻轨站店）', '渝中区上清寺路114号（牛角沱轻轨车站3号线出口右手边）', null, null, '29.563919', '106.54866', null);
INSERT INTO `locationsite` VALUES ('82', '莫泰168（重庆解放碑洪崖洞步行街店）', '渝中区解放碑沧白路52号（ 解放碑 ，近家乐福棉花街店 ）', null, null, '29.568674', '106.587248', null);
INSERT INTO `locationsite` VALUES ('83', '莫泰168（重庆机场空港工业园店）', '渝北区双凤桥长空路311号浩博天地（ 江北机场 ，近上品源美食休闲街 ） ', null, null, '29.75849', '106.63898', null);
INSERT INTO `locationsite` VALUES ('85', '锦江之星（重庆渝中店）', '渝中区渝中区长江一路68号（ 大坪 ，近红岭医院 ）', null, null, '29.553725', '106.537823', null);
INSERT INTO `locationsite` VALUES ('86', '锦江之星（重庆杨家坪步行街店）', '九龙坡区杨家坪兴胜路60号（ 杨家坪 ，杨家坪步行街入口 ）', null, null, '29.518645', '106.521786', null);
INSERT INTO `locationsite` VALUES ('88', '星程酒店（重庆杨家坪步行街店）', '九龙坡区杨家坪正街7号（近国美电器，商社电器）', null, null, '29.519308', '106.523259', null);
INSERT INTO `locationsite` VALUES ('89', '星程酒店（重庆南坪万达店）', '南岸区江南大道19号（ 南岸 ，近万达广场 ）', null, null, '29.532515', '106.576568', null);
INSERT INTO `locationsite` VALUES ('91', '家心怡酒店（重庆解放碑店）', '渝中区解放碑八一路39号（ 解放碑 ，近大都会广场 ）', null, null, '29.565122', '106.586045', null);
INSERT INTO `locationsite` VALUES ('92', '似家心怡酒店（重庆石桥铺店）', '九龙坡区高新区科园一路59号（ 石桥铺、陈家坪 ，近渝高中学 ） ', null, null, '29.534287', '106.492858', null);
INSERT INTO `locationsite` VALUES ('93', '似家心怡酒店（重庆石坪桥店）', '九龙坡区石坪桥正街36号（ 杨家坪 ，近石坪桥西郊医院 ）', null, null, '29.522237', '106.510245', null);
INSERT INTO `locationsite` VALUES ('94', '似家心怡酒店（杨家坪店）', '杨家坪正街13号银都大厦', null, null, '29.516635', '106.522162', null);
INSERT INTO `locationsite` VALUES ('95', '家心怡酒店（重庆大学城店）', '沙坪坝区大学城四川美术学院商业老街J栋（ 大学城 ，美院商业老街入口 ）', null, null, '29.605074', '106.304176', null);
INSERT INTO `locationsite` VALUES ('96', '似家心怡酒店（三峡广场店 ）', '沙坪坝区天陈路9号三峡广场商厦4层', null, null, '29.562152', '106.467395', null);
INSERT INTO `locationsite` VALUES ('98', '富驿商旅酒店（重庆三峡广场店）', '沙坪坝区小龙坎新街86号嘉多利广场5楼（ 沙坪坝 ，近解放碑步行街 ）', null, null, '29.565818', '106.469276', null);
INSERT INTO `locationsite` VALUES ('99', '富驿商旅酒店（重庆解放碑店）', '渝中区大同路45号4楼（ 解放碑 ，近解放碑步行街 ）', null, null, '29.563562', '106.579902', null);
INSERT INTO `locationsite` VALUES ('101', '富驿时尚酒店（重庆第三军医大学店）', '沙坪坝区都市花园西路252号（ 沙坪坝 ，西南医院高滩岩大门对面 ）', null, null, '29.546357', '106.45567', null);
INSERT INTO `locationsite` VALUES ('102', '富驿时尚酒店（重庆工商大学店）', '南岸区四公里街339号（工商大学对面）（ 南岸 ，近学府大道 ）', null, null, '29.513083', '106.5799', null);
INSERT INTO `locationsite` VALUES ('103', '富驿时尚酒店（重庆两路口店）', '渝中区体育村35号（大田湾体育场旁）', null, null, '29.5609', '106.554124', null);
INSERT INTO `locationsite` VALUES ('105', '格林豪泰（重庆谢家湾快捷酒店）', '九龙坡区谢家湾78号（谢家湾轻轨站旁）', null, null, '29.527181', '106.523333', null);
INSERT INTO `locationsite` VALUES ('106', '格林豪泰（重庆渝州路商务酒店）', '九龙坡区渝州路164号（歇台子市委党校旁）', null, null, '29.541205', '106.506735', null);
INSERT INTO `locationsite` VALUES ('107', '格林豪泰（重庆火车北站快捷酒店）', '北部新区宝华大道16号龙城国际一期一单元57号（近新溉大道）', null, null, '29.606709', '106.558755', null);
INSERT INTO `locationsite` VALUES ('108', '格林豪泰（重庆西南酒店）', '南岸区南坪北路5号西南大酒店内（近南坪新街）', null, null, '29.538439', '106.571986', null);
INSERT INTO `locationsite` VALUES ('109', '格林豪泰店（重庆江南大道店）', '江南大道7号1栋', null, null, '29.537805', '106.572078', null);
INSERT INTO `locationsite` VALUES ('111', '宜必思酒店（冉家坝店）', '渝北区龙山街道龙山一路296号（与银桦路交汇处，橄榄郡小区斜对面）', null, null, '29.604494', '106.502604', null);
INSERT INTO `locationsite` VALUES ('112', '宜必思酒店', '九龙坡区迎宾大道16号（近二郎立交桥）', null, null, '29.519603', '106.467328', null);
INSERT INTO `locationsite` VALUES ('114', '月友宾馆（解放碑八一路店）', '渝中区八一路260号', null, null, '29.560363', '106.582669', null);
INSERT INTO `locationsite` VALUES ('115', '月友宾馆（解放碑赛格尔店）', '渝中区解放碑五四路28号赛格尔大厦8楼（时代豪苑对面）', null, null, '29.565192', '106.583452', null);
INSERT INTO `locationsite` VALUES ('116', '月友宾馆（小什字店）', '渝中区小什字筷子街2号14楼', null, null, '29.565913', '106.588813', null);
INSERT INTO `locationsite` VALUES ('117', '月友宾馆（解放碑帝都广场店）', '渝中区解放碑八一路1号帝都大厦B塔13楼', null, null, '29.565256', '106.586166', null);
INSERT INTO `locationsite` VALUES ('118', '月友宾馆（解放碑店) ', '渝中区解放碑赛格尔大厦8楼(近邹容广场)', null, null, '29.565192', '106.583452', null);
INSERT INTO `locationsite` VALUES ('119', '月友宾馆（青年路）', '渝中区五四路28号赛格尔国际大厦8层', null, null, '29.565193', '106.583684', null);
INSERT INTO `locationsite` VALUES ('120', '月友宾馆（西门）', '渝中区民权路51号6楼', null, null, '29.560665', '106.582063', null);
INSERT INTO `locationsite` VALUES ('121', '月友宾馆（敬轩店）', '北部新区汽博中心汽博大厦4楼', null, null, '29.647455', '106.578471', null);
INSERT INTO `locationsite` VALUES ('122', '月友宾馆（宏福店）', '渝北四村20号宏福俊悦大厦B2楼', null, null, '29.583283', '106.540755', null);
INSERT INTO `locationsite` VALUES ('123', '月友宾馆（北辰名都店）', '江北区观音桥建新北路四支路2号北辰名都一楼大厅', null, null, '29.583002', '106.53669', null);
INSERT INTO `locationsite` VALUES ('124', '月友宾馆（北城艺术大厦店）', '江北区建新西路2号观音桥步行街北城艺术大厦3楼（近远东百货）', null, null, '29.578243', '106.538982', null);
INSERT INTO `locationsite` VALUES ('125', '月友豪派宾馆', '江北区观音桥电测村100号', null, null, '29.582719', '106.535602', null);
INSERT INTO `locationsite` VALUES ('126', '月友宾馆（天宇银座店）', '江北区观音桥建新东路10号天宇银座5楼', null, null, '29.579416', '106.5426', null);
INSERT INTO `locationsite` VALUES ('127', '月友宾馆（北城天街店）', '江北区观音桥步行街北城天街5号六楼招商银行楼上', null, null, '29.583878', '106.538907', null);
INSERT INTO `locationsite` VALUES ('128', '月友宾馆（观音桥NO.6）', '江北区观音桥步行街5号邦兴北都7楼', null, null, '29.578734', '106.537548', null);
INSERT INTO `locationsite` VALUES ('129', '月友宾馆（江北店）', '江北区观音桥赛博数码广场17楼', null, null, '29.578771', '106.538054', null);
INSERT INTO `locationsite` VALUES ('130', '月友宾馆（江北建新东路店）', '江北区观音桥建新东路10号天宇银座5楼', null, null, '29.579416', '106.5426', null);
INSERT INTO `locationsite` VALUES ('131', '月友宾馆（北城艺术大厦店) ', '江北区建新西路2号北城艺术大厦3层', null, null, '29.578243', '106.538982', null);
INSERT INTO `locationsite` VALUES ('132', '月友宾馆（石桥铺店) ', '九龙坡区渝州路27号商务公寓9层', null, null, '29.538953', '106.492878', null);
INSERT INTO `locationsite` VALUES ('133', '月友宾馆（杨家坪区府店 ）', '九龙坡区杨家坪西郊路53号A栋（近九龙坡区政府）', null, null, '29.509348', '106.518464', null);
INSERT INTO `locationsite` VALUES ('134', '月友宾馆（沙坪坝店）', '沙坪坝区渝碚路50-9-1号融信大厦9层（三峡广场新世纪凯瑞商都楼上）', null, null, '29.561949', '106.465579', null);
INSERT INTO `locationsite` VALUES ('135', '月友宾馆（三峡广场新世纪店）', '沙坪坝区渝碚路50-13融信商务公寓9楼', null, null, '29.564113', '106.468179', null);
INSERT INTO `locationsite` VALUES ('136', '月友宾馆（三峡广场华夏银座店) ', '沙坪坝区渝碚路66号华夏银座7层', null, null, '29.564415', '106.466528', null);
INSERT INTO `locationsite` VALUES ('137', '月友宾馆（重庆南坪）', '南岸区南坪南路1号6楼（南坪转盘南）', null, null, '29.535055', '106.575657', null);
INSERT INTO `locationsite` VALUES ('138', '月友宾馆（江南大道）', '江南大道13号6层', null, null, '29.533385', '106.575138', null);
INSERT INTO `locationsite` VALUES ('139', '月友宾馆（城市星座店）', '南岸区江南大道13号付3号城市星座6楼(南坪公交车站出站口)', null, null, '29.534033', '106.575177', null);
INSERT INTO `locationsite` VALUES ('141', '星豪鸿连锁酒店（重庆绿云尚都店）', '江北区建新北路12号附近', null, null, '29.582054', '106.538333', null);
INSERT INTO `locationsite` VALUES ('142', '星豪鸿连锁酒店（重庆天街2号店）', '江北区观音桥阳光城天街2号4楼', null, null, '29.582388', '106.538575', null);
INSERT INTO `locationsite` VALUES ('143', '星豪鸿连锁酒店（重庆解放碑都市广场店）（原星豪宾馆）', '渝中区五四路39号解放碑重医附二院对面（近临江门）', null, null, '29.565847', '106.581921', null);
INSERT INTO `locationsite` VALUES ('144', '星豪鸿连锁酒店（重庆解放碑小什字店）', '渝中区解放碑临江支路66号泰安大厦内（近九尺坎）', null, null, '29.56681', '106.585529', null);
INSERT INTO `locationsite` VALUES ('145', '星豪鸿连锁酒店（重庆三峡广场融汇店）（原星豪宾馆', '沙坪坝区天陈路1号三峡广场融汇新时代8F（炫地购物中心楼上，近渝碚路）', null, null, '29.563664', '106.466504', null);
INSERT INTO `locationsite` VALUES ('146', '星豪鸿连锁酒店（重庆沙坪坝火车站店）（原星豪宾馆）', '沙坪坝区站东路200号怡馨大厦平街一层', null, null, '29.560676', '106.467594', null);
INSERT INTO `locationsite` VALUES ('147', '星豪鸿连锁酒店（重庆沙坪坝融汇店 ）', '沙坪坝区天陈路1号（三峡广场融汇新时代8F）', null, null, '29.561093', '106.467512', null);
INSERT INTO `locationsite` VALUES ('148', '星豪鸿连锁酒店（重庆杨家坪四季花园店）', '九龙坡区杨家坪西郊路17号', null, null, '29.511695', '106.519843', null);
INSERT INTO `locationsite` VALUES ('150', '七加一连锁酒店（红旗河沟店）', '江北区红旗河沟汽车站旁', null, null, '29.587541', '106.532466', null);
INSERT INTO `locationsite` VALUES ('151', '七加一连锁酒店（观音桥步行街店）', '江北区观音桥步行街拓展大厦5楼（赛博数码城对面）', null, null, '29.577902', '106.538344', null);
INSERT INTO `locationsite` VALUES ('152', '七加一连锁酒店（解放碑步行街店）', '渝中区解放碑临江门第29中旁（陶然居楼上10楼）', null, null, '29.576333', '106.570232', null);
INSERT INTO `locationsite` VALUES ('153', '七加一连锁酒店（石桥铺赛博店）', '九龙坡区石桥铺赛博B馆4楼（百脑汇对面）', null, null, '29.536115', '106.490393', null);
INSERT INTO `locationsite` VALUES ('154', '七加一连锁酒店（杨家坪步行街店西门）', '前进路38号西郊大厦附近', null, null, '29.512406', '106.519698', null);
INSERT INTO `locationsite` VALUES ('155', '七加一连锁酒店（沙坪坝店）', '沙坪坝区沙坪坝正街8号附12号6楼（欣阳广场车站楼上）', null, null, '29.570071', '106.469245', null);
INSERT INTO `locationsite` VALUES ('156', '七加一连锁酒店（西南医院店 ）', '沙坪坝区都市花园中路115号农贸市场楼上（西南医院旁）', null, null, '29.544114', '106.460194', null);
INSERT INTO `locationsite` VALUES ('157', '七加一连锁酒店（大渡口店 ）', '大渡口区八桥街10号八桥镇政府旁', null, null, '29.481282', '106.489422', null);
INSERT INTO `locationsite` VALUES ('158', '七加一连锁酒店（南坪协信城店）)', '江南大道28号金信大厦6楼', null, null, '29.530047', '106.577672', null);
INSERT INTO `locationsite` VALUES ('160', '海友酒店（重庆观音桥步行街店）', '江北区建新东路11号（靠近观音桥东环路', null, null, '29.580486', '106.543594', null);
INSERT INTO `locationsite` VALUES ('161', '海友酒店（重庆沙坪坝店）', '沙坪坝区沙南街43号（南开中学大门旁边）', null, null, '29.568535', '106.468436', null);

-- ----------------------------
-- Table structure for `locationtype`
-- ----------------------------
DROP TABLE IF EXISTS `locationtype`;
CREATE TABLE `locationtype` (
  `ID` char(10) NOT NULL,
  `LocationType` char(10) default NULL,
  PRIMARY KEY  (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of locationtype
-- ----------------------------

-- ----------------------------
-- Table structure for `narelation`
-- ----------------------------
DROP TABLE IF EXISTS `narelation`;
CREATE TABLE `narelation` (
  `ID` char(10) NOT NULL,
  `NID` char(10) NOT NULL,
  `AID` char(10) NOT NULL,
  PRIMARY KEY  (`ID`),
  KEY `NID` (`NID`),
  KEY `AID` (`AID`),
  CONSTRAINT `narelation_ibfk_1` FOREIGN KEY (`NID`) REFERENCES `node` (`ID`),
  CONSTRAINT `narelation_ibfk_2` FOREIGN KEY (`AID`) REFERENCES `attachment` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of narelation
-- ----------------------------

-- ----------------------------
-- Table structure for `node`
-- ----------------------------
DROP TABLE IF EXISTS `node`;
CREATE TABLE `node` (
  `ID` char(10) NOT NULL,
  `FlowID` char(10) default NULL,
  `Title` varchar(100) default NULL,
  `Description` varchar(100) default NULL,
  `PrevNode` char(100) default NULL,
  `No` int(11) default NULL,
  PRIMARY KEY  (`ID`),
  KEY `ID` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of node
-- ----------------------------

-- ----------------------------
-- Table structure for `panel`
-- ----------------------------
DROP TABLE IF EXISTS `panel`;
CREATE TABLE `panel` (
  `ID` char(10) NOT NULL,
  `Query` varchar(10) default NULL,
  `Fields` binary(1) default NULL,
  `CSS` varchar(100) default NULL,
  `Menu` varchar(100) default NULL,
  PRIMARY KEY  (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of panel
-- ----------------------------

-- ----------------------------
-- Table structure for `permission`
-- ----------------------------
DROP TABLE IF EXISTS `permission`;
CREATE TABLE `permission` (
  `ID` char(10) NOT NULL,
  `Title` varchar(100) default NULL,
  `Description` varchar(100) default NULL,
  `PanelID` char(10) default NULL,
  PRIMARY KEY  (`ID`),
  KEY `ID` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of permission
-- ----------------------------

-- ----------------------------
-- Table structure for `policy`
-- ----------------------------
DROP TABLE IF EXISTS `policy`;
CREATE TABLE `policy` (
  `ID` char(10) NOT NULL,
  `Title` varchar(100) default NULL,
  `Content` varchar(100) default NULL,
  `AddTime` datetime default NULL,
  `Submitter` varchar(100) default NULL,
  `Type` enum('') default NULL,
  `Micro` tinyint(1) default NULL,
  PRIMARY KEY  (`ID`),
  KEY `ID` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of policy
-- ----------------------------

-- ----------------------------
-- Table structure for `prrelation`
-- ----------------------------
DROP TABLE IF EXISTS `prrelation`;
CREATE TABLE `prrelation` (
  `ID` char(10) NOT NULL,
  `PID` char(10) NOT NULL,
  `RID` char(10) NOT NULL,
  PRIMARY KEY  (`ID`),
  KEY `PID` (`PID`),
  KEY `RID` (`RID`),
  CONSTRAINT `prrelation_ibfk_1` FOREIGN KEY (`PID`) REFERENCES `permission` (`ID`),
  CONSTRAINT `prrelation_ibfk_2` FOREIGN KEY (`RID`) REFERENCES `role` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of prrelation
-- ----------------------------

-- ----------------------------
-- Table structure for `role`
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `ID` char(10) NOT NULL,
  `Title` varchar(100) default NULL,
  `Description` varchar(100) default NULL,
  PRIMARY KEY  (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role
-- ----------------------------

-- ----------------------------
-- Table structure for `slrelation`
-- ----------------------------
DROP TABLE IF EXISTS `slrelation`;
CREATE TABLE `slrelation` (
  `ID` char(10) NOT NULL,
  `SID` char(10) NOT NULL,
  `LID` char(10) NOT NULL,
  PRIMARY KEY  (`ID`),
  KEY `SID` (`SID`),
  KEY `LID` (`LID`),
  CONSTRAINT `slrelation_ibfk_1` FOREIGN KEY (`SID`) REFERENCES `subject` (`ID`),
  CONSTRAINT `slrelation_ibfk_2` FOREIGN KEY (`LID`) REFERENCES `laws` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of slrelation
-- ----------------------------

-- ----------------------------
-- Table structure for `sprelation`
-- ----------------------------
DROP TABLE IF EXISTS `sprelation`;
CREATE TABLE `sprelation` (
  `ID` char(10) NOT NULL,
  `SID` char(10) default NULL,
  `PID` char(10) default NULL,
  PRIMARY KEY  (`ID`),
  KEY `SID` (`SID`),
  KEY `PID` (`PID`),
  CONSTRAINT `sprelation_ibfk_1` FOREIGN KEY (`SID`) REFERENCES `subject` (`ID`),
  CONSTRAINT `sprelation_ibfk_2` FOREIGN KEY (`PID`) REFERENCES `policy` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sprelation
-- ----------------------------

-- ----------------------------
-- Table structure for `street`
-- ----------------------------
DROP TABLE IF EXISTS `street`;
CREATE TABLE `street` (
  `ID` char(10) NOT NULL,
  `Name` varchar(100) character set gbk NOT NULL,
  PRIMARY KEY  (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of street
-- ----------------------------
INSERT INTO `street` VALUES ('1', 'yangheryilu');
INSERT INTO `street` VALUES ('2', 'yangheerlu');
INSERT INTO `street` VALUES ('3', '洋河一路');
INSERT INTO `street` VALUES ('4', '洋河二路');

-- ----------------------------
-- Table structure for `subject`
-- ----------------------------
DROP TABLE IF EXISTS `subject`;
CREATE TABLE `subject` (
  `ID` char(10) NOT NULL,
  `Description` varchar(100) default NULL,
  `SubjectTypeID` char(10) NOT NULL,
  `CommonFlag` tinyint(1) default NULL,
  `ImgPath` varchar(255) default NULL,
  `KeyWords` varchar(100) default NULL,
  `Title` varchar(100) default NULL,
  PRIMARY KEY  (`ID`),
  KEY `SubjectTypeID` (`SubjectTypeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of subject
-- ----------------------------

-- ----------------------------
-- Table structure for `subjecttype`
-- ----------------------------
DROP TABLE IF EXISTS `subjecttype`;
CREATE TABLE `subjecttype` (
  `ID` char(10) NOT NULL,
  `Description` varchar(100) default NULL,
  `CommonFlag` tinyint(1) default NULL,
  `Title` varchar(100) default NULL,
  PRIMARY KEY  (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of subjecttype
-- ----------------------------
INSERT INTO `subjecttype` VALUES ('01', '酒店', '1', null);
INSERT INTO `subjecttype` VALUES ('02', '餐饮', '0', null);
INSERT INTO `subjecttype` VALUES ('03', '娱乐', '1', null);
INSERT INTO `subjecttype` VALUES ('04', 'yanghe', '1', null);

-- ----------------------------
-- Table structure for `urrelation`
-- ----------------------------
DROP TABLE IF EXISTS `urrelation`;
CREATE TABLE `urrelation` (
  `ID` varchar(10) NOT NULL,
  `RID` char(10) NOT NULL,
  `UID` char(10) NOT NULL,
  PRIMARY KEY  (`ID`),
  KEY `RID` (`RID`),
  KEY `UID` (`UID`),
  CONSTRAINT `urrelation_ibfk_1` FOREIGN KEY (`RID`) REFERENCES `role` (`ID`),
  CONSTRAINT `urrelation_ibfk_2` FOREIGN KEY (`UID`) REFERENCES `user` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of urrelation
-- ----------------------------

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `ID` char(10) NOT NULL,
  `UserName` varchar(10) default NULL,
  `Password` char(10) default NULL,
  `TrueName` varchar(20) default NULL,
  `Email` varchar(50) default NULL,
  `Activity` tinyint(1) default NULL,
  `UserType` char(255) default NULL,
  PRIMARY KEY  (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------

-- ----------------------------
-- Procedure structure for `getAddressListByKey`
-- ----------------------------
DROP PROCEDURE IF EXISTS `getAddressListByKey`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAddressListByKey`(IN `NameKey` varchar(100)  character set utf8)
BEGIN
	#Routine body goes here...
	select name from qianshui.street where Name like BINARY CONCAT('%',NameKey,'%');
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for `getAreaByLngLat`
-- ----------------------------
DROP PROCEDURE IF EXISTS `getAreaByLngLat`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAreaByLngLat`(IN `lng` double,IN `lat` double,IN `distance` int)
BEGIN
	#Routine body goes here...
declare r double;
declare pi double;
set r = 6378.137;
select * from qianshui.locationsite where r*acos(cos(Latitude*PI()/180)*cos(lat*PI()/180)*cos((Longitude-lng)*PI()/180)+sin(Latitude*PI()/180)*sin(lat*PI()/180))<=distance;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for `getIndustryListByKey`
-- ----------------------------
DROP PROCEDURE IF EXISTS `getIndustryListByKey`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getIndustryListByKey`(IN `industryKey` varchar(100))
BEGIN
	#Routine body goes here...
	select Description from qianshui.subjecttype where Description like CONCAT('%',industryKey,'%');
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for `getLngLat`
-- ----------------------------
DROP PROCEDURE IF EXISTS `getLngLat`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getLngLat`(IN `minLat` double,IN `maxLat` double,IN `minLng` double,IN `maxLng` double)
BEGIN
	#Routine body goes here...

	select Longitude,Latitude from locationsite where Longitude>=minLat AND Longitude<=maxLat AND Latitude>=minLng AND Latitude<=maxLng;
END
;;
DELIMITER ;
