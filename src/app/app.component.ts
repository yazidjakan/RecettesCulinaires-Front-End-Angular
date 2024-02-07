import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecettesCulinaires';
  isAuthenticated : boolean = false


  constructor(public authService:AuthService, private router:Router){}
 ngOnInit() {
  this.isAuthenticated = this.authService.getIsAuthenticated();
  console.log(this.isAuthenticated);
  
}
  logout():void{
    localStorage.removeItem('token');
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
