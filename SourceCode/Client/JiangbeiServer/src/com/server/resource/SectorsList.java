package com.server.resource;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/Sectorslist")
public class SectorsList {
	@GET
    @Produces(MediaType.APPLICATION_OCTET_STREAM)
    public String getValue(){
       return "["
               +"{\"label\":\"餐饮业\",\"imgId\":\"resources/img/phone_startup.png\"},"
               +"{\"label\":\"旅游业\",\"imgId\":\"resources/img/phone_startup.png\"},"
               +"{\"label\":\"新兴产业\",\"imgId\":\"resources/img/phone_startup.png\"},"
               
               +"{\"label\":\"广告业\",\"imgId\":\"resources/img/phone_startup.png\"},"
               +"{\"label\":\"物流业\",\"imgId\":\"resources/img/phone_startup.png\"},"
               +"{\"label\":\"金融业\",\"imgId\":\"resources/img/phone_startup.png\"}"
               +"]";
    }
}
