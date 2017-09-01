import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonService {
  @Input() data;
  id: any;
  persons: any = [];
  person: any;
  count = 0;
  constructor() {
  }
  getIdPerson(id) {
    let person = this.persons.find(
      person => person.id === id
    )
    return person;
  }

  savePerson(data) {

    if (data.id == 0) {
      this.person = {
        id: ++this.count,
        name: data.name,
        weight: data.weight,
        height: data.height
      }
      this.persons.push(this.person);
      console.log("if")
      //console.log(this.persons);
    } else {
      for (let i = 0; i < this.persons.length; i++) {
          if(this.persons[i].id == data.id){
            this.persons[i] = data
          }
      }
    }

  }
  //console.log("update")
  //   console.log(this.person);
  //  let newPerson = this.persons.map(function (personItem) {


  //     if (data.id == personItem.id) {
  //       console.log(data)
  //       return data;
  //     }
  //     console.log(personItem)
  //     return personItem
  //     })
  //     this.persons = newPerson;
  // }

  // console.log(this.persons)

getPerson() {
  console.log(this.persons);
  return this.persons;
}
}
