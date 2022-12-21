package com.FinalYearProject.New2Town.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Hello {

    @GetMapping("/hi")
    public String hi() {
        return "Hey, the server is up and running";
    }

    @GetMapping("/match")
    public void match() {
        //This function shall match Individual based
        //on their preferences.
    }
}
