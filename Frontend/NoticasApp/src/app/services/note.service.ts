import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../models/note';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  constructor(private httpClient: HttpClient) { }

  apiURL = 'http://localhost:8080/api/';

  getAllNotes(): Observable<Note[]>{
    return this.httpClient.get<Note[]>(this.apiURL+"notes");
  }

  getNoteById(id: Number): Observable<Note>{
    return this.httpClient.get<Note>(this.apiURL +  'note/' + id.toString())
  }

  createNote(note:Note): Observable<Note>{
    return this.httpClient.post<Note>(this.apiURL+'note', note, this.httpOptions);
  }

  updateNote(note:Note): Observable<Note>{
    return this.httpClient.put<Note>(this.apiURL+'update/note', note, this.httpOptions);
  }

  deleteNote(id:Number){
    return this.httpClient.delete(this.apiURL +  'note/' + id.toString());
  }


}
