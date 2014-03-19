package Business;

import java.net.URL;
import java.net.URLEncoder;
import org.dom4j.Document;
import org.dom4j.io.SAXReader;
import org.dom4j.Element;  
import org.hibernate.HibernateException;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import java.util.Iterator;
import java.util.List;
import Common.AreaInfo;
import DataBase.Locationsite;



public class Map {
	private static final String HibernateSessionFactory = null;
	private static String strUrlpre = "http://api.map.baidu.com/geocoder?address=";
	private static String strUrlnext = "&output=xml&key=UB30QfDn5Gp7Pu7kHfHIagLH&city=";
	/**
	 * *************************************************************
	 * FunName : getAddressListByKey
	 * Description： 根据关键字查询符合条件的地址
	 * @param strAddress  (输入)： 查询关键字
	 * @param addressList (输出)： 地址列表
	 * *************************************************************
	 */
	public static void getAddressListByKey(String strKey,List<String> addressList) {
		//String keyUTF8 = URLEncoder.encode(strKey, "UTF-8");
		
		try {
			SessionFactory sf = new Configuration().configure()
					.buildSessionFactory();
			Session session = sf.openSession();
			Transaction tx = session.beginTransaction();
			List<String> list = null;
			String sql = "{call getAddressListByKey(?)}";
			SQLQuery query= session.createSQLQuery(sql);
			String parame = "%" + strKey + "%";
			query.setString(0,parame);
			list = query.list();
			if (list.size() != 0) {
				Iterator it = list.iterator();
				while (it.hasNext()) {
					/*此处将获取到的list重新添加到了IndustryList中，应该可以直接对IndustryList赋值返回的*/
					addressList.add((String) it.next());
				}
			}
			else {
				System.out.println("list is null");
			}
			
			tx.commit();
			session.clear();
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
	
	/**
	 * *************************************************************
	 * FunName : address2LatLng
	 * Description： 根据地址获取对应的经纬度
	 * @param strAddress  (输入)：具体地址
	 * @param strLng      (输出)：经度
	 * @param strLat      (输出)：纬度
	 * @param strError    (输出)：错误码
	 * @throws Exception
	 * *************************************************************
	 */
	public static void address2LngLat(String strAddress,StringBuffer strLng,StringBuffer strLat,StringBuffer strError)throws Exception
	{
		String addrUTF8 = URLEncoder.encode(strAddress, "UTF-8");//将地址转化为UTF-8格式
		String strUrl = strUrlpre + addrUTF8 + strUrlnext + "重庆市";
	    URL baiduURL = new URL(strUrl);
	    SAXReader saxReader = new SAXReader();
        Document doc = saxReader.read(baiduURL.openStream());
        Element root = doc.getRootElement();
        if ((root.elementTextTrim("status")).equals("OK"))
        {
        	Element elementResult = root.element("result");
            Element elementLct = elementResult.element("location");
            strLng.append(elementLct.elementTextTrim("lng"));
            strLat.append(elementLct.elementTextTrim("lat"));
            strError.append("OK");
        }
        else
        {
        	/*对错误信息的处理*/
        	strError.append("ERROR");
        }
	}
	
	/**
	 * *************************************************************
	 * FunName : getAreaByLngLat
	 * Description： 根据经纬度获取附近3公里区域内的经纬度
	 * @param Lng  (输入)： 经度
	 * @param Lat  (输入)： 纬度
	 * @param areaInfo (输出)： 地址列表
	 * *************************************************************
	 */
	public static void getAreaByLngLat(double Lng,double Lat,List<AreaInfo> areaInfo) /*throws Exception*/{
		
		try {
			SessionFactory sf = new Configuration().configure().buildSessionFactory();
			Session session = sf.openSession();
			Transaction tx = session.beginTransaction();
			int distance = 1;//暂为1公里的范围，没有设置参数传递
			List<Locationsite> list = null;
			/*这里是先获取Locationsite实体内容再取其经纬度，直接获取经纬度属性应该也是可以的，没有找到相关方法*/
			list = session.getNamedQuery("getAreaByLngLat(?,?,?)")
			       .setDouble(0, Lng).setDouble(1, Lat).setInteger(2,distance).list();
			if (list.size() != 0) {
				for (int iPos = 0;iPos< list.size();++iPos){
					AreaInfo obj = new AreaInfo(list.get(iPos).getLongitude(),list.get(iPos).getLatitude(),list.get(iPos).getName());
					areaInfo.add(obj);
				}
			}
			
			tx.commit();
			session.clear();
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
}
