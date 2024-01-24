import { Component, OnInit,SimpleChange,OnChanges,Input, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignUp } from '../sign-up';
import { JsonPipe } from '@angular/common';
import { SignupSeriveService } from '../signup-serive.service';

import {Router} from '@angular/router'


@Component({
  // standalone:true,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnChanges {

  name="showri"

  // ngOnInit(){

  //   alert('showri');

  // }


  @Input() inputValue: string | undefined;
  previousValue: string | undefined;

// onresponsed(){
//   this.inputValue="Babu kanta";
// }

// onreresponse(){
//   this.inputValue="Showri";
// }

  ngOnChanges(changes: SimpleChanges): void {
      // Check if the 'inputValue' property changed
    if (changes['inputValue']) {
      // Access the current and previous values
      this.previousValue = changes['inputValue'].previousValue;
      // The current value is already updated in the bound property
  }

}


// Attribute Binding
textColor='red';


signupModel= new SignUp('','');

responseData:any;
isSuccess=false;


constructor(private signupService:SignupSeriveService,private router:Router){}
onSignup():void{

  // alert(this.signupModel.name + '\n' +this.signupModel.password);

  this.signupService.onSignup(this.signupModel).subscribe(
    (data:any) => {
      // console.log('Response from server:', data);
      this.responseData = data;
      if (this.responseData.message=='User already existed with the name'){
        this.isSuccess=false;
      }
      else{
        this.isSuccess=true;
        setTimeout(()=>{
          this.router.navigate(['/test']);
        },1000)
      }
    }
  );
}





}
