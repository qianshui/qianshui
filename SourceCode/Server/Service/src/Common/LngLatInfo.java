/**
 * *************************************************************
 * @FileName:LngLatInfo.java
 * @Description:地图经纬度类
 * @Author: wanghong
 * @Create date:   2014.03.06
 * *************************************************************
 */
package Common;

public class LngLatInfo {
	private String strLng = "";
	private String strLat = "";
	private String strResult = "";
	
	public LngLatInfo() {
	}
	
//	public LngLatInfo(String strLng,String strLat,String strResult) {
//		this.strLng = strLng;
//		this.strLat = strLat;
//		this.strResult = strResult;
//	}
	
	public void setLng(String strLng) {
		this.strLng = strLng;
	}
	
	public void setLat(String strLat) {
		this.strLat = strLat;
	}
	
	public void setResult(String strResult) {
		this.strResult = strResult;
	}
	
	public String getLng() {
		return this.strLng;
	}
	
	public String getLat() {
		return this.strLat;
	}
	
	public String getResult() {
		return this.strResult;
	}
}
