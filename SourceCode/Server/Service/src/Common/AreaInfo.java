/**
 * *************************************************************
 * @FileName:AreaInfo.java
 * @Description:为返回区域信息而定义的类，没有直接使用LngLatInfo类
 * @Author: wanghong
 * @Create date:   2014.03.06
 * *************************************************************
 */
package Common;

public class AreaInfo {
	private double strLng;
	private double strLat;
	private String strName;
	private String strType;
	
	public AreaInfo() {
	}
	
	public AreaInfo(double strLng,double strLat,String strName) {
		this.strLng = strLng;
		this.strLat = strLat;
		this.strName = strName;
	}
	
	public void setLng(double strLng) {
		this.strLng = strLng;
	}
	
	public void setLat(double strLat) {
		this.strLat = strLat;
	}
	
	public void setName(String strName) {
		this.strName = strName;
	}
	
	public double getLng() {
		return this.strLng;
	}
	
	public double getLat() {
		return this.strLat;
	}
	
	public String getName() {
		return this.strName;
	}

	public void setStrType(String strType) {
		this.strType = strType;
	}

	public String getStrType() {
		return strType;
	}
}
