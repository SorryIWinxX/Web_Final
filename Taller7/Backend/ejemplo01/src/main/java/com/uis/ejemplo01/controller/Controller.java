package com.uis.ejemplo01.controller;

import com.uis.ejemplo01.entity.Person;
import com.uis.ejemplo01.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping({"/persons"})
public class Controller {
    @Autowired
    private PersonService service;

    @GetMapping
    public List<Person>list(){
        return service.list();
    }
}
