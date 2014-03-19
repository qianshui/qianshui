package com.server.resource;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/Addresslist")
public class AddressList {
	@GET
    @Produces(MediaType.APPLICATION_OCTET_STREAM)
    public String getValue(){
       return "["
               +"{\"label\":\"三峡广场\",\"imgId\":\"resources/img/phone_startup.png\"},"
               +"{\"label\":\"信阳广场\",\"imgId\":\"resources/img/phone_startup.png\"},"
               +"{\"label\":\"磁器口\",\"imgId\":\"resources/img/phone_startup.png\"},"
               +"{\"label\":\"朝天门\",\"imgId\":\"resources/img/phone_startup.png\"},"
               +"{\"label\":\"菁英公寓\",\"imgId\":\"resources/img/phone_startup.png\"},"
               +"{\"label\":\"重庆大学\",\"imgId\":\"resources/img/phone_startup.png\"}"
               +"]";
    }
}
