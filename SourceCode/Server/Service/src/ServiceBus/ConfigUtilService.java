package ServiceBus;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import Common.CommonJson;
import Common.DBOperation;
import DataBase.Category;
import DataBase.Menu;
import DataBase.Icon;
import DataBase.PeitaoObj;
import Business.CategoryBusiness;
import Business.ConfigUtil;
import Business.Map;


@Path("ConfigUtilService")
public class ConfigUtilService {
	
	@GET
	@Path("addPeitaoInfo")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String addPeitaoInfo(@QueryParam("ptl") String newptl,@QueryParam("ptt") String pttype) {
		StringBuffer strlng=new StringBuffer();
		StringBuffer strlat=new StringBuffer();
		StringBuffer strerr=new StringBuffer();
		String[] ptnamelist=newptl.split("，");
		for(int i=0;i<ptnamelist.length;i++)
		{
			try {
				strlng.setLength(0);
				strlat.setLength(0);
				strerr.setLength(0);
				Map.address2LngLat(ptnamelist[i], strlng, strlat, strerr);
				
				PeitaoObj pto=new PeitaoObj();
				pto.setLat(Double.parseDouble(strlat.toString()));
				pto.setLng(Double.parseDouble(strlng.toString()));
				pto.setName(ptnamelist[i]);
				pto.setType(pttype);
				
				if (DBOperation.add(pto)) {
		        	//return "Success";
		        }
		        else
		        {
		        	return "Failure";
		        }
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return "Success";
	}
	
	@GET
	@Path("getMenuList")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getMenuList() {
		List<Menu> MenuList = new ArrayList<Menu>();
		MenuList = ConfigUtil.getInstance().getMenuList();
		return CommonJson.list2Json(MenuList);
	}
	
	
	@GET
	@Path("getIconList")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getIconList() {
		List IconList = ConfigUtil.getInstance().getIconList();
		return CommonJson.list2Json(IconList);
	}
	
	@GET
	@Path("getIconListByIconType")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getIconListByIconType(@QueryParam("type") String strIconType) {
		List IconList = ConfigUtil.getInstance().getIconListByIconType(strIconType);
		return CommonJson.list2Json(IconList);
	}
	
}
