import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router, private service: EmployeeService) { }
  employee: any;

  ngOnInit(): void {
    this.service.getAllEmployee().subscribe((data: any) => {
      this.employee = data.data;
    });
  }

  onAddUser(){
    this.router.navigate(["form"]);
  }

  updateById(id: number){
    this.router.navigate(['update',id])
  }

  deleteById(id: number) {
    console.log(id);  
    this.service.deleteEmployeeById(id).subscribe((data)  =>{
    this.ngOnInit();
     this.router.navigate(["dashboard"]);
    });
  }
}
