import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonService {
  @Input() data;
  persons: any = [];
  person: any;
  count = 0;
  constructor() {
  }

  savePerson(data) {
    this.person = {
      id: this.count++,
      name: data.name,
      weight: data.weight,
      height: data.height
    }
    this.persons.push(this.person);
    console.log(this.persons)
  }
}
