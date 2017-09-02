import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm, FormControl, FormGroup, FormBuilder , Validators } from '@angular/forms';
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
  listPerson: any;

  name = new FormControl();
  personForm: FormGroup;
  
  createForm() {
    this.personForm = this.fb.group({
      name: ['', Validators.required ], // <--- the FormControl called "name"
      weight: ['', Validators.required ],
      height: ['', Validators.required ]
    });
  }

  constructor(private personService: PersonService, private fb: FormBuilder) {
    //this.personService;
    this.createForm();
    this.personForm.setValue({
      name: this.person.name,
      weight: this.person.weight,
      height : this.person.height,
    });
 
  }
  ngOnInit() {
  }
  addPerson() {
    this.personService.savePerson(this.person);
    this.person = {
      id: 0,
      name: '',
      weight: '',
      height: ''
    }
  }
  editPerson(person) {
    this.person = { ...person };

  }

}
