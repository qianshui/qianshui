package ServiceBus;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import Common.CommonJson;
import DataBase.Category;
import DataBase.Menu;
import Business.CategoryBusiness;
import Business.ConfigUtil;



@Path("ConfigUtilService")
public class ConfigUtilService {
	
	
	@GET
	@Path("getMenuList")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getMenuList() {
		List<Menu> MenuList = new ArrayList<Menu>();
		MenuList = ConfigUtil.getInstance().getMenuList();
		return CommonJson.list2Json(MenuList);
	}
	
}