package com.sagar.SpringSecurityAndReact.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String helle() {
        return "Hello World";
    }
}
