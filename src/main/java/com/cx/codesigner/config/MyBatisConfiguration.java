package com.cx.codesigner.config;

import javax.sql.DataSource;

import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;


@Configuration
@MapperScan({"com.cx.codesigner.dao"})
public class MyBatisConfiguration {
	
	@Autowired
	private DataSource dataSource;
	
	@Bean
    public PlatformTransactionManager txManager() {
        return new DataSourceTransactionManager(this.dataSource);
    }
	
	@Bean
    public SqlSessionTemplate sqlSessionTemplateBean() throws Exception {
		
		//VFS.addImplClass(SpringBootVFS.class);
		
		SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
        sqlSessionFactoryBean.setDataSource(this.dataSource);
        PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
//        sqlSessionFactoryBean.setMapperLocations(resolver.getResources("classpath:mapper/*Mapper.xml"));
      //  Resource[] resources = resolver.getResources("classpath:mapper/*Mapper.xml");
//        Resource[] resources1 = resolver.getResources("classpath*:mapper/*Mapper.xml");
// System.out.println("resources.length=-===>"+resources.length);
//        System.out.println("resources1.length=-===>"+resources1.length);
//        
//        for(Resource r:resources1) {
//        	System.out.println("Mapper.file name===>"+r.getFilename());
//        }
        sqlSessionFactoryBean.setMapperLocations(resolver.getResources("classpath*:mapper/*Mapper.xml"));
        sqlSessionFactoryBean.setConfigLocation(resolver.getResource("classpath:mybatis-config.xml"));
        return new SqlSessionTemplate(sqlSessionFactoryBean.getObject());
    }
	
}
