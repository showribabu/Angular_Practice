import { Component ,EventEmitter,Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from '../login';
import { SignupSeriveService } from '../signup-serive.service';
//Router
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {

  //Examples...

  @Output() messageEvent= new EventEmitter<string>();
  onsendmsg():void{
    this.messageEvent.emit('Hello from child to Parent');
  }

  imgSrc='../assets/green.jpg';

  name="showri";

  textColor='Green';
  today=Date();

  price=1275.234;
  cmdd:boolean=true;


  dataname(x:string):void{

    alert(x);

  }

  //Form...
  logindata :any;

  loginModel = new Login('', '');

  constructor(private loginService:SignupSeriveService,private router :Router, private authService:AuthService ){}
  onLogin():void{
    // alert(this.loginModel.name + ' ' + this.loginModel.password);
    this.loginService.onLogin(this.loginModel).subscribe(

      (data:any)=>{
        this.logindata=data;
        if(this.logindata.message=='LoginSuccess'){
//navigate to new template
          this.authService.isLogin();
          this.router.navigate(['/directivesExample']);
        }
      }
    );
  }

}
