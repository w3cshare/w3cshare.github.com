package com.example.javamicroservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
@EnableDiscoveryClient
@RestController
public class JavaMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(JavaMicroserviceApplication.class, args);
	}

	@GetMapping("/")
	public Map<String, String> index() {
		Map<String, String> response = new HashMap<>();
		response.put("service", "java-microservice");
		response.put("status", "running");
		return response;
	}

	@GetMapping("/health")
	public Map<String, String> health() {
		Map<String, String> response = new HashMap<>();
		response.put("status", "UP");
		return response;
	}
}
