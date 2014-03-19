package com.server.resource;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/Judge_address")
public class JudgeAddr {
	@GET
    @Produces(MediaType.APPLICATION_OCTET_STREAM)
    public String getValue(){
       return "true or false";
    }
}
