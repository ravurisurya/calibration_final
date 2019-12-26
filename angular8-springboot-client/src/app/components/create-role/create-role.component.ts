import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/classes/role';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  role: Role = new Role();
  submitted = false;

  constructor(private roleService : RoleService,
    private router : Router){

    }
  ngOnInit(): void {
    
  }
  
  newRole() : void{
    this.submitted = false;
    this.role = new Role();
  }

  onSubmit(){

    this.submitted = true;
    this.save();

  }
  save() {
     this.roleService.createRole(this.role)
     .subscribe(data => console.log(data), error => console.log(error));
     this.role = new Role();
     this.goToList();
  }
  goToList() {
    this.router.navigate(['/roles']);
  }
}
