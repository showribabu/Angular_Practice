import { NgModule } from '@angular/core';
import { RouterModule, Routes,  } from '@angular/router';
import { TestComponent } from './test/test.component';
import { SignupComponent } from './signup/signup.component';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { NaviagationComponent } from './naviagation/naviagation.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
{path:'signup', component: SignupComponent},
{path:'test', component:TestComponent ,canActivate: [authGuard]},
{path:'directivesExample', component:DirectivesExampleComponent},
{path:'open',redirectTo:'/signup',pathMatch:'full'},


{path:'navigation', component:NaviagationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
