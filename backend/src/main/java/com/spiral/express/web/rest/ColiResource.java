package com.spiral.express.web.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/spiral-express")
public class ColiResource {
    private Logger log = LoggerFactory.getLogger(getClass());

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello world!";
    }
}
