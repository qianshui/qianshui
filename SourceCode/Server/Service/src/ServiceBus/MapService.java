/**
 * *************************************************************
 * @FileName:MapService.java
 * @Description:地图地址查询等web服务接口文件
 * @Author: wanghong
 * @Create date:   2014.03.06
 * *************************************************************
 */
package ServiceBus;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import java.util.List;
import java.util.ArrayList;
import Business.Map;
import Common.*;
/**
 * *************************************************************
 * MapService地图地址查询webservice接口，为客户端提供地址查询、行业分析
 * 接口。
 * @ClassName:MapService
 * @Author: wanghong
 * @Create date:   2014.03.06
 * *************************************************************
 */
@Path("MapService")
public class MapService {
	
	/**
	 * *************************************************************
	 * FunName : getAddressListByKey
     * Description： 根据关键字获取匹配的街道地址
     * Input: 关键字
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/MapService/getAddressListByKey?key=
     * *************************************************************
	 */
	@GET
	@Path("getAddressListByKey")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getAddressListByKey(@QueryParam("key") String strKey) {
		List<String> addressList = new ArrayList<String>();	
		Map.getAddressListByKey(strKey,addressList);
		return CommonJson.list2Json(addressList);
	}
	/**
	 * *************************************************************
	 * FunName : MapService
     * Description： 根据地址获取对应的经纬度
     * Input: 地址
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/MapService/getLngLatByAddress?address=
     * *************************************************************
	 */
	@GET
	@Path("getLngLatByAddress")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getLngLatByAddress(@QueryParam("address") String strAddress) {
		StringBuffer strLng = new StringBuffer();
		StringBuffer strLat = new StringBuffer();
		StringBuffer strError = new StringBuffer();
		LngLatInfo objLatLng = new LngLatInfo();
		
		try {
			Map.address2LngLat(strAddress, strLng, strLat, strError);
			if (strError.equals("OK")) {
				objLatLng.setLng(strLng.toString());
				objLatLng.setLat(strLat.toString());
				objLatLng.setResult("true");
			}
			else {
				objLatLng.setResult("false");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return CommonJson.object2Json(objLatLng);
	}
	
	/**
	 * *************************************************************
	 * FunName : MapService
     * Description： 根据经纬度获取附近区域的经纬度
     * Input: 地址
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/MapService/getAreaByLngLat?lng=29.582719&lat=106.535602
     * *************************************************************
	 */
	@GET
	@Path("getAreaByLngLat")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getAreaByLngLat(@QueryParam("lng") double lng,@QueryParam("lat") double lat) {
		List<AreaInfo> areaInfo = new ArrayList<AreaInfo>();
		try {
			Map.getAreaByLngLat(lng, lat,areaInfo);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return CommonJson.list2Json(areaInfo);
	}
	/**
	 * *************************************************************
	 * FunName : MapService
     * Description： 根据经纬度获取附近区域的周边配套经纬度
     * Input: 经纬度
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/MapService/getZbptByLngLat?lng=29.582719&lat=106.535602
     * *************************************************************
	 */
	@GET
	@Path("getAreaByLngLat")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getZbptByLngLat(@QueryParam("lng") double lng,@QueryParam("lat") double lat) {
		List<AreaInfo> areaInfo = new ArrayList<AreaInfo>();
		try {
			//Map.getAreaByLngLat(lng, lat,areaInfo);
			areaInfo.add(new AreaInfo(lng+0.000032,lat+0.000032,"幼儿园"));
			areaInfo.add(new AreaInfo(lng-0.000032,lat-0.000032,"医院"));
			areaInfo.add(new AreaInfo(lng+0.000032,lat-0.000032,"学校"));
			areaInfo.add(new AreaInfo(lng-0.000032,lat+0.000032,"小面馆"));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return CommonJson.list2Json(areaInfo);
	}
}
