/**
 * *************************************************************
 * @FileName:IDBOperation.java
 * @Description:抽象出数据表通用的操作接口，包括添加、删除、更新
 * @Author: wanghong
 * @Create date:   2014.03.06
 * *************************************************************
 */

package DBOperation;

public interface IDBOperation {
	public <Object> boolean add(Object obj);
	//public void alter();
	//public void delete();
}
