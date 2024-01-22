import { Component, OnInit,SimpleChange,OnChanges,Input, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignUp } from '../sign-up';
import { JsonPipe } from '@angular/common';


@Component({
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

onSubmit():void{

  alert(this.signupModel.name + '\n' +this.signupModel.password);
}

}
