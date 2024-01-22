import { Component } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='Angular'
  name='showri'

  onresponsed(){
    this.name="ONE";
  }

  onreresponse(){
  this.name="TWO";
}


childmsg:string ='';

fromchild(message:string):void{
this.childmsg=message;
}


// Dynamic component....

dynamicComponent: any; // The type will be the component type

  loadComponentA(): void {
    this.dynamicComponent = SignupComponent;
  }

  loadComponentB(): void {
    this.dynamicComponent = TestComponent;
  }



}
