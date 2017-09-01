import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '././app.component'
import { MainComponent } from './components/main/main.component'
import { EditPersonComponent } from './components/edit-person/edit-person.component'

const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'editPerson',
        component: EditPersonComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }