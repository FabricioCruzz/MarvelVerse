import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/request.model';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor() { }

  title: string = 'Choose A Comic To Details'
  category: Category = 'comics'
  page: string = '/comic'

  ngOnInit(): void {

  }

}
