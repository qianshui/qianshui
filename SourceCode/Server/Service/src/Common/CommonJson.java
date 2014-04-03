/**
 * *************************************************************
 * @FileName:CommonJson.java
 * @ClassName:CommonJson
 * @Author: wanghong
 * @Create date: 2014.02.27
 * @Description: CommonJson类,处理对象等与JSON的相互转换
 * *************************************************************
 */
package Common;
import net.sf.json.*;
import java.util.List;

/**
 * *************************************************************
 * CommonJson类提供对JSON的通用操作，全部为静态方法，对外提供统一接口；
 * 处理list，Object到JSON的转换。
 * @Author: wanghong
 * @Create date: 2014.02.27
 * @Description: CommonJson类,处理对象等与JSON的相互转换
 * *************************************************************
 */

public class CommonJson {
	
	/**
	 * *************************************************************
	 * FunName : list2Json
     * Description： 将list对象转化为JSON
     * Input: @param list
     * Output:String
     * *************************************************************
	 */
	public static String list2Json(List<?> list) {
		JSONArray json = JSONArray.fromObject(list);
		return json.toString();
	}
	
	/**
	 * *************************************************************
	 * FunName : object2Json
     * Description： 将对象转化为JSON
     * Input: @param obj
     * Output:String
     * *************************************************************
	 */
	public static <Object> String object2Json(Object obj) {
	    JSONObject json = JSONObject.fromObject(obj);
	    return json.toString();
	}
}
