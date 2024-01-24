import { Component ,OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-naviagation',
  templateUrl: './naviagation.component.html',
  styleUrls: ['./naviagation.component.css']
})
export class NaviagationComponent implements OnInit {

  // accessing the Query parameters...



  constructor(private route:ActivatedRoute){}

/*  1) Query parameters ..... */

  // in the format of : root ?name='' & password=''
  // ngOnInit(): void {

  //   this.route.queryParams.subscribe(params => {
  //     const name = params['name'];
  //     const password = params['password'];
  //     console.log('Name:', name, 'password:', password);
  //     alert('Name:'+ name + '\npassword:'+password);

  //   });

   // Accessing Fragment
  //  this.route.fragment.subscribe(fragment => {
  //   console.log('Fragment:', fragment);
  //   alert('Fragment : '+fragment);
  // });




  /* 2) routing parameters*/
    //  it can acccess the data from the Anchor tag <a [activateLink]="['/test',name,password]"></a>


    // ngOnInit(): void {
    //   this.route.paramMap.subscribe((params) => {
    //     const name = params.get('name') ||'';
    //     const password = params.get('password') || '';
    //     alert('Name:'+ name + '\npassword:'+password);
    //   });
    // }


    /*

    1)Route parameters....

        text='';
    ngOnInit(): void {
        this.route.params.subscribe((params)=>{
        const array = JSON.parse(params['arr']);
        for(let i in array){
          this.text +=' '+ array[i].name;
        }
        alert(this.text);
        }
    )}


    */

    // /* 2)Query parameters  */

    // ngOnInit(): void {
    //       this.route.queryParams.subscribe(params => {
    //   const name = params['name'];
    //   const password = Number(params['age']);
    //   console.log('Name:', name, 'password:', password);
    //   alert('Name:'+ name + '\npassword:'+password);

    // });

    // }

    ngOnInit(): void {
       this.route.paramMap.subscribe((params)=>{
        const name=params.get('name');
        const age=Number(params.get('age'));
        alert('Name:'+ name +' Age:'+ age);
       })
    }

  }


