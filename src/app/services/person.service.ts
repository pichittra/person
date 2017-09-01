import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonService {
  @Input() data;
  id:any;
  persons: any = [];
  person: any;
  count = 0;
  constructor() {
  }
  getIdPerson(id){
     let person = this.persons.find(
      person => person.id === id
    )
    return person;
  }

  savePerson(data) {
    
    if(data.id == 0){
      this.person = {
        id: ++this.count,
        name: data.name,
        weight: data.weight,
        height: data.height
      }
      this.persons.push(this.person);
      //console.log(this.persons);
    }else{
      console.log("update")
    }
    
    
    // console.log(this.persons)
  }
  getPerson(){
    //console.log(this.persons);
    return this.persons;
  }
}
