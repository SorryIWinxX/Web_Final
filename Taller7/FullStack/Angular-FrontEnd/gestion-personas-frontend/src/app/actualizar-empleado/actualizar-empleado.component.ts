
import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {

  id:number;
  empleado:Empleado = new Empleado();
  constructor(private empleadoService:EmpleadoService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleadoService.obtenerEmpleadoPorId(this.id).subscribe(dato =>{
      this.empleado=dato;

    },error => console.log(error));
  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['/empleados']);
    swal.update({
      title: "Empleado actualizado",
      text: `El empleado ${this.empleado.nombre} se ha atualizado correctamente`,
      showCancelButton: false,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Ok",
    });
  }
  
  onSubmit(){
    this.empleadoService.actualizarEmpleado(this.id,this.empleado).subscribe(dato =>{
      this.irAlaListaDeEmpleados();
    },error => console.log(error));
  }
  

}

