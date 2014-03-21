package ServiceBus;

import java.util.HashSet;
import java.util.Set;
import javax.ws.rs.core.Application;

public class MyRunApplication extends Application {
	private Set<Object> singletons = new HashSet<Object>();
	private Set<Class<?>> empty = new HashSet<Class<?>>();

	public MyRunApplication() {
		singletons.add(new IndustryService());
		singletons.add(new MapService());
		singletons.add(new CategoryService());
	}

	@Override
	public Set<Class<?>> getClasses() {
		return empty;
	}

	@Override
	public Set<Object> getSingletons() {
		return singletons;
	}
}
