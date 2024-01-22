import { Component } from '@angular/core';

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

name :string='showri';

}
