package Business;
/** 
 * *************************************************************
 * @ClassName:test
 * @Author: wanghong
 * @Create date: 2014.02.25
 * @Description: 自己测试用的文件
 * *************************************************************
 */
//package Business;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Iterator;
import java.util.List;
import java.util.ArrayList;
//import org.hibernate.HibernateException;
//import org.hibernate.Session;
//import org.hibernate.Transaction;
//import org.hibernate.SessionFactory;
//import org.hibernate.cfg.Configuration; 
//
//import DataBase.Attachment;
//import DataBase.Contact;
//import DataBase.Laws;
//import DataBase.Narelation;
//import DataBase.Node;
//import DataBase.Slrelation;
//import DataBase.Subject;
//import DataBase.Subjecttype;
//import Common.*;

public class test {
//	Session session = null;
//	Transaction tx = null;
//	public static void getDataList(List<Subjecttype> IndustryList) {
//		//IndustryList = new ArrayList<Person>();
//    	try {
//			SessionFactory sf = new Configuration().configure()
//					.buildSessionFactory();
//			Session session = sf.openSession();
//			List list = null;
//			list = session.createQuery("from Subjecttype").list();
//			
//			Transaction tx = session.beginTransaction();
//			if (list != null) {
//				Iterator it = list.iterator();
//				while (it.hasNext()) {
//					IndustryList.add((Subjecttype) it.next());
//					//String str = CommonJson.List2Json(IndustryList);
//					//System.out.println(str);
//					//Person person = (Person) it.next();
//					//System.out.println("姓名:" + person.getName() + "性别:"
//							//+ person.getSex() + "\n");
//				}
//			}
//			List<String> list1 = new ArrayList<String>();
//			list1.add("abc");
//			list1.add("123");
//			System.out.println(CommonJson.list2Json(IndustryList));
//			tx.commit();
//			session.clear();
//		} catch (HibernateException e) {
//			// TODO: handle exception
//			e.printStackTrace();
//		}
//    }
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
//		Laws law = new Laws(IDOperation.getClassID("Laws"));
//		LawsOperation obj = new LawsOperation(law);
//		DataOperation.add(obj);
//		Contact cont = new Contact(IDOperation.getClassID("Contact"));
//		ContactOperation ct = new ContactOperation(cont);
//		DataOperation.add(ct);
//		Subject sj = new Subject(IDOperation.getClassID("Subject"),"ST0001");
//		SubjectOperation so = new SubjectOperation(sj);
//		DataOperation.add(so);
//		Attachment att = new Attachment(IDOperation.getClassID("attachment"));
//		AttachmentOperation atto = new AttachmentOperation(att);
//		DataOperation.add(atto);
//		Node node = new Node(IDOperation.getClassID("node"),"111",11);
//		DBOperation.add(node);
		
		try {
	        URL url = new URL(  
	                "http://localhost:8080/WebService/IndustryService/createSubject");  
	        HttpURLConnection conn = (HttpURLConnection) url.openConnection();  
	        conn.setDoOutput(true);
	        conn.setRequestMethod("POST");
	        conn.setRequestProperty("Content-Type", "application/json");  
	  
	        String input = "{\"id\":\" \",\"description\":\"bar\"}";

	        OutputStream os = conn.getOutputStream();
	        os.write(input.getBytes());
	        os.flush();  
	  
	        if (conn.getResponseCode() != HttpURLConnection.HTTP_CREATED) {  
	            throw new RuntimeException("Failed : HTTP error code : "  
	                    + conn.getResponseCode());  
	        }  
	  
	        BufferedReader br = new BufferedReader(new InputStreamReader(  
	                (conn.getInputStream())));  
	  
	        String output;  
	        System.out.println("Output from Server .... \n");  
	        while ((output = br.readLine()) != null) {  
	  
	            System.out.println(output);  
	        }
	  
	        conn.disconnect();  
	  
	    } catch (MalformedURLException e) {  
	  
	        e.printStackTrace();  
	    } catch (IOException e) {
	        e.printStackTrace();  
	    }
	}
}