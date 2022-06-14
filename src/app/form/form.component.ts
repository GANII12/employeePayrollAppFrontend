import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EmployeeModel } from '../EmployeeModel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  employee: EmployeeModel = new EmployeeModel("","","",new Date,"",0,"","")
  Id: any = this.route.snapshot.paramMap.get("Id")

  constructor(private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onCancel(){
    this.router.navigate(["dashboard"]);
  }

  onSubmit(){
    console.log(this.employee);
  }

  getVal(value: String){
    console.log(value);
    this.employee.department = value.toString();
  }
}
