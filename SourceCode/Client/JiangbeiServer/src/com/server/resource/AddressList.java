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
               +"{\"label\":\"观音桥商圈\",\"imgId\":\"resources/img/phone_startup.png\"},"
               +"{\"label\":\"五里店\",\"imgId\":\"resources/img/phone_startup.png\"},"
               +"{\"label\":\"港城工业园区\",\"imgId\":\"resources/img/phone_startup.png\"},"
               +"{\"label\":\"寸滩街道\",\"imgId\":\"resources/img/phone_startup.png\"},"
               +"{\"label\":\"华新街\",\"imgId\":\"resources/img/phone_startup.png\"},"
               +"{\"label\":\"黄泥磅\",\"imgId\":\"resources/img/phone_startup.png\"}"
               +"]";
    }
}
