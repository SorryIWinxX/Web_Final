package com.uis.ejemplo01.service;

import com.uis.ejemplo01.entity.Person;


import java.util.List;

public interface PersonService {
    List<Person>list();

    Person listId(int id);

    public  Person add(Person p);

    public Person edit(Person p);

    public void delete(int id);

}
