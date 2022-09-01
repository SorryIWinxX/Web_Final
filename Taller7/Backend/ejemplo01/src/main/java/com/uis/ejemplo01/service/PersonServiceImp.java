package com.uis.ejemplo01.service;


import com.uis.ejemplo01.entity.Person;
import com.uis.ejemplo01.respository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PersonServiceImp implements PersonService{

    @Autowired
    private PersonRepository repository;


    @Override
    public List<Person> list() {
        return repository.findAll();
    }

    @Override
    public Person listId(int id) {
        return null;
    }

    @Override
    public Person add(Person p) {
        return null;
    }

    @Override
    public Person edit(Person p) {
        return null;
    }

    @Override
    public void delete(int id) {

    }
}
