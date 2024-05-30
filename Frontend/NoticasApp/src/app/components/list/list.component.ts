import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/services/note.service';
import { UpdateListService } from 'src/app/services/update-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  constructor(private noteService: NoteService, private route: Router, private updateList: UpdateListService){ }
  notes: Note[] = [];
  noteList: Note[] = [];
  

  ngOnInit(): void {
    this.loadNotes();

    this.updateList.updateListService$.subscribe(()=>{
      this.loadNotes();
    })
  }
  loadNotes ():void{
    this.noteService.getAllNotes().subscribe(data =>{
      this.notes = data;
      this.noteList = this.notes.filter(x => x.state = true);
    })
  }
  onButtonClick(){
    this.route.navigate(['/notes/note/0']);

  }

  

  
}
