package com.uis.ejemplo01.respository;

import com.uis.ejemplo01.entity.Person;
import jdk.dynalink.linker.LinkerServices;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonRepository extends JpaRepository<Person,Integer> {
    

}
