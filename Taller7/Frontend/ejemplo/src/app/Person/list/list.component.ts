import { Component, OnInit } from '@angular/core';
import { Router } from 'express';
import { Person } from 'src/app/Model/Person';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  persons:Person[];
  constructor(private service:ServiceService ,private router:Router) { }

  ngOnInit(): void {
    this.service.getPersons()
    .subscribe(data=>{
      this.persons=data;
    })

  }

}
