import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Int32 } from 'mongodb';

@Component({
  selector: 'app-directives-example',
  templateUrl: './directives-example.component.html',
  styleUrls: ['./directives-example.component.css']
})
export class DirectivesExampleComponent {
// ngIF

isvalid:boolean = true;

notvalid(){
  this.isvalid = false;
}

data=['a', 'b', 'c', 'd', 'e', 'f']

value='c';

// attribute Directives
isSpecial=true;
isSpecial1=false;

name:string='showri'




constructor(private authService: AuthService,private router:Router){};
logout():void{
  this.authService.isLogout();
  this.router.navigate(['/test']);
}
}
