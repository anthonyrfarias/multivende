
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLoggedIn: boolean 
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn()
  }

}
