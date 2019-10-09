import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  phone:number;
  name:string;
  dob:string;
  homeaddress:string;
  id:number;
  
  
  newBook: Book;
  constructor(private svc: DataService) { }

  ngOnInit() {
  }
  createBook() {

    this.newBook = new Book(this.id,this.name, this.dob, this.homeaddress, this.phone)
    console.log(this.newBook)
    this.svc.create(this.newBook);
  }
}
