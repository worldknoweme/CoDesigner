package com.cx.codesigner;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;

@SpringBootApplication(scanBasePackages = {"com.cx.codesigner"})
@MapperScan(basePackages = {"com.cx.codesigner.dao"})
public class CodesignerApplication extends SpringBootServletInitializer{

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(this);
	}

	public static void main(String[] args) {
		SpringApplication.run(CodesignerApplication.class, args);
	}
}
