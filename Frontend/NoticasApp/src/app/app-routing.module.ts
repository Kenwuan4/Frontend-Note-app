import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { NoteComponent } from './components/note/note.component';

const routes: Routes = [
  {path: 'notes', component: ListComponent},
  {path: 'notes/note/:id?', component: NoteComponent},
  {path: '', redirectTo:'/notes', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
