package com.spiral.express;

import com.spiral.express.config.ApplicationProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.core.env.Environment;

@SpringBootApplication
@EnableConfigurationProperties({ApplicationProperties.class})
public class SpiralExpressApp {

    public static void main(String... args) {
        SpringApplication app = new SpringApplication(SpiralExpressApp.class);
        Environment env = app.run(args).getEnvironment();

        System.out.println("Application started successfully!");
    }
}
