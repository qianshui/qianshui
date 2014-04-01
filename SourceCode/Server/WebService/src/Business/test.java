/** 
 * *************************************************************
 * @ClassName:test
 * @Author: wanghong
 * @Create date: 2014.02.25
 * @Description: 自己测试用的文件
 * *************************************************************
 */
package Business;
import java.util.Iterator;
import java.util.List;
import java.util.ArrayList;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration; 

import DBOperation.ContactOperation;
import DBOperation.DataOperation;
import DBOperation.LawsOperation;
import DBOperation.SubjectOperation;
import DataBase.Contact;
import DataBase.Laws;
import DataBase.Slrelation;
import DataBase.Subject;
import DataBase.Subjecttype;
import Common.*;

public class test {
	Session session = null;
	Transaction tx = null;
	public static void getDataList(List<Subjecttype> IndustryList) {
		//IndustryList = new ArrayList<Person>();
    	try {
			SessionFactory sf = new Configuration().configure()
					.buildSessionFactory();
			Session session = sf.openSession();
			List list = null;
			list = session.createQuery("from Subjecttype").list();
			
			Transaction tx = session.beginTransaction();
			if (list != null) {
				Iterator it = list.iterator();
				while (it.hasNext()) {
					IndustryList.add((Subjecttype) it.next());
					//String str = CommonJson.List2Json(IndustryList);
					//System.out.println(str);
					//Person person = (Person) it.next();
					//System.out.println("姓名:" + person.getName() + "性别:"
							//+ person.getSex() + "\n");
				}
			}
			List<String> list1 = new ArrayList<String>();
			list1.add("abc");
			list1.add("123");
			System.out.println(CommonJson.list2Json(IndustryList));
			tx.commit();
			session.clear();
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
    }
	public static void main(String[] args) {
//			List<Subjecttype> IndustryList = new ArrayList<Subjecttype>();
//			getDataList(IndustryList);
//			if (IndustryList != null) {
//				Iterator<?> it = IndustryList.iterator();
//				while (it.hasNext()) {
//					Subjecttype person = (Subjecttype) it.next();
//					System.out.println("姓名:" + person.getId() + "性别:"
//							+ person.getDescription() + "\n");
//				}
//			}
			//Subjecttype obj= new Subjecttype("0001");
//		    LngLatInfo obj = new LngLatInfo();
//		    obj.setLng("111");
//		    obj.setLat("111");
//		    obj.setResult("");
//			System.out.println(CommonJson.object2Json(obj));
//			List<String> addressList = new ArrayList<String>();	
//			try {
//				Map.getAddressListByKey(URLEncoder.encode("洋河", "UTF-8"),addressList);
//				System.out.println(CommonJson.list2Json(addressList));
//			} catch (Exception e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
			
//			List<AreaInfo> areaInfo = new ArrayList<AreaInfo>();
//			Map.getAreaByLngLat(29.627476,106.645922, areaInfo);
//			System.out.println(CommonJson.list2Json(areaInfo));
		//System.out.println(IDOperation.getClassID("subject"));
		Laws law = new Laws(IDOperation.getClassID("Laws"));
		LawsOperation obj = new LawsOperation(law);
		DataOperation.add(obj);
//		Contact cont = new Contact(IDOperation.getClassID("Contact"));
//		ContactOperation ct = new ContactOperation(cont);
//		DataOperation.add(ct);
		Subject sj = new Subject(IDOperation.getClassID("Subject"),"ST0001");
		SubjectOperation so = new SubjectOperation(sj);
		DataOperation.add(so);
	}
}
