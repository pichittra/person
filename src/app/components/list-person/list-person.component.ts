import { Component, OnInit , Output ,EventEmitter} from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {
  listPerson:any;
  person: any;
  @Output() editData = new EventEmitter();
  constructor(private personService:PersonService,
    public router: Router) { 
    this.listPerson = this.personService.getPerson();
  }
  ngOnInit() {
   
  }

  editPerson(listPerson){
   // console.log(data)
    this.editData.emit(listPerson);
   // this.personService.getIdPerson(this.editData);
  }
}
