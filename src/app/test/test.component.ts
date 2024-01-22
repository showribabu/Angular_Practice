import { Component ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

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

}
