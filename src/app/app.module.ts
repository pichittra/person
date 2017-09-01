import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule, ReactiveFormsModule , FormControl  } from '@angular/forms';
import { PersonService } from './services/person.service';
import { ListPersonComponent } from './components/list-person/list-person.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EditPersonComponent } from './components/edit-person/edit-person.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListPersonComponent,
    EditPersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
