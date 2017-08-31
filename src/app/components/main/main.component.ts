import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonService } from '../../services/person.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  person: any=[];
  constructor(private personService:PersonService) {       
  }
  ngOnInit() {
  }
  addPerson(){
    this.personService.savePerson(this.person);
  }

}
