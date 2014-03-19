package com.server.resource;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/Industrylist")
public class IndustryList {
	@GET
    @Produces(MediaType.APPLICATION_OCTET_STREAM)
    public String getValue(){
       return "["
               +"{\"label\":\"KTV\",\"imgId\":\"resources/img/phone_startup.png\"},"
               +"{\"label\":\"火锅\",\"imgId\":\"resources/img/phone_startup.png\"},"
               +"{\"label\":\"电影院\",\"imgId\":\"resources/img/phone_startup.png\"},"
               +"{\"label\":\"蛋糕店\",\"imgId\":\"resources/img/phone_startup.png\"},"
               +"{\"label\":\"五星酒店\",\"imgId\":\"resources/img/phone_startup.png\"},"
               +"{\"label\":\"互联网公司\",\"imgId\":\"resources/img/phone_startup.png\"}"
               +"]";
    }
}
