import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _api:ApiService) { }

  formLoading: boolean = false
  buttonSendDisabled: boolean = false

  loginData = {
    email: "",
    password: ""
  }


  ngOnInit(): void {
  }

  async login(){
    this.formLoading = true
    this.buttonSendDisabled = true
    const response = await this._api.login_service(this.loginData)
    this.formLoading = false
    if(response){
      console.log(response)
      localStorage.setItem("token", response.token)
      location.reload()
    }

  }



}
