import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Note } from 'src/app/models/note';
import { isEqual } from 'lodash';
import { NoteService } from 'src/app/services/note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateListService } from 'src/app/services/update-list.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent implements OnInit, OnChanges{

  constructor(private noteService: NoteService, private router: Router, private activateRote: ActivatedRoute, private notify: UpdateListService){}

  note: Note = new Note(undefined,'','',false);
  noteCopie: Note = Object.assign({},this.note);
  changes:boolean = false;
  
  ngOnInit(): void {
    console.log("hola")
    console.log(this.activateRote.snapshot.paramMap.get("id"));
      
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.activateRote.params.subscribe(params => {
      console.log("hola 2")
    })
  }

  inputCambiado(){
    this.changes  = !isEqual(this.note,this.noteCopie);
  }

  onButtonClick(){
    console.log("crear")
    this.noteService.createNote(this.note).subscribe( data => {
      console.log(data);
      this.router.navigate(['/notes']);
      this.notify.notifyUpdateUserList();
      
    });
  }

}

