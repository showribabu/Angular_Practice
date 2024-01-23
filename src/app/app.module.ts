import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { HighlightDirective } from './highlight.directive';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    TestComponent,
    DirectivesExampleComponent,
    HighlightDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,



  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
