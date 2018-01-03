package com.cx.codesigner.common;


import java.sql.Connection;
import java.util.Properties;

import org.apache.ibatis.executor.Executor;
import org.apache.ibatis.executor.statement.RoutingStatementHandler;
import org.apache.ibatis.executor.statement.StatementHandler;
import org.apache.ibatis.mapping.MappedStatement;
import org.apache.ibatis.plugin.Interceptor;
import org.apache.ibatis.plugin.Intercepts;
import org.apache.ibatis.plugin.Invocation;
import org.apache.ibatis.plugin.Plugin;
import org.apache.ibatis.plugin.Signature;
import org.apache.ibatis.reflection.MetaObject;
import org.apache.ibatis.reflection.SystemMetaObject;
import org.apache.ibatis.session.ResultHandler;
import org.apache.ibatis.session.RowBounds;

@Intercepts({ @Signature(method = "prepare", type = StatementHandler.class, args = { Connection.class,Integer.class}),
		@Signature(method = "query", type = Executor.class, args = { MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class }) })
public class MybatisSpringPageInterceptor implements Interceptor {
	
	@Override
	public Object plugin(Object target) {
		return Plugin.wrap(target, this);
	}
	
	@Override
	public Object intercept(Invocation invocation) throws Throwable {
		if (invocation.getTarget() instanceof StatementHandler) {
			RoutingStatementHandler handler = (RoutingStatementHandler) invocation.getTarget();
	        MetaObject metaStatementHandler = SystemMetaObject.forObject(handler);    

	        RowBounds rowBounds = (RowBounds)metaStatementHandler.getValue("delegate.rowBounds");    
	        if(rowBounds == null || rowBounds == RowBounds.DEFAULT){
	            return invocation.proceed();    
	        }
	        String originalSql = (String)metaStatementHandler.getValue("delegate.boundSql.sql");    
	            
	        String sql="";
	        if(rowBounds.getOffset()>0){
	        	sql=originalSql+ " limit " + rowBounds.getOffset() + "," + rowBounds.getLimit();
	        }else{
	        	sql = originalSql + " limit " + rowBounds.getLimit();
	        }
	        metaStatementHandler.setValue("delegate.boundSql.sql", sql);
	        metaStatementHandler.setValue("delegate.rowBounds.offset", RowBounds.NO_ROW_OFFSET);
	        metaStatementHandler.setValue("delegate.rowBounds.limit", RowBounds.NO_ROW_LIMIT);
			return invocation.proceed();
		}
		return invocation.proceed();

	}

	@Override
	public void setProperties(Properties properties) {
	}

}