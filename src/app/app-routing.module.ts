import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { SignupComponent } from './signup/signup.component';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';

const routes: Routes = [
{path:'signup', component: SignupComponent},
{path:'test', component:TestComponent},
{path:'directivesExample', component:DirectivesExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
