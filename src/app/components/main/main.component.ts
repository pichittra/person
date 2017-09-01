import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  count = 0;
  id: any;
  person = {
    id: 0,
    name: '',
    weight: '',
    height: ''
  }
  name = new FormControl();

  listPerson: any;
  constructor(private personService: PersonService) {
    this.personService;
  }

  ngOnInit() {
    this.personService;
  }
  addPerson() {
    this.personService.savePerson(this.person);
    this.person = {
      id: 0,
      name: '',
      weight: '',
      height: ''
    }
    //this.listPerson = this.personService.getPerson();
  }
  editPerson(person) {
    //console.log(person);
    this.person = { ...person };

  }

}
