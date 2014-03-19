/** 
 * *************************************************************
 * @FileName:RelatedLaws.java
 * @Description: 法规模块处理文件
 * @Author: wanghong
 * @Create date: 2014.02.27
 * *************************************************************
 */
package Business;

public class RelatedLaws {
	private static RelatedLaws m_Instance = null;
	 
    private RelatedLaws() {
    	
    }
    
    public static RelatedLaws getInstance() {
        if (m_Instance == null) {
        	m_Instance = new RelatedLaws();
        }
        
        return m_Instance;
    }
}
