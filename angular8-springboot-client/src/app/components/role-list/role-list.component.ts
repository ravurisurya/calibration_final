import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from 'src/app/classes/role';
import { RoleService } from 'src/app/services/role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  role: Observable<Role[]>;

  constructor(
    private roleService:RoleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.reLoad();
  }
  reLoad() {
    this.role = this.roleService.getEmployeesRoleList();
  }

}
