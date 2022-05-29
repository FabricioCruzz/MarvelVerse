import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/request.model';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css',]
})
export class SeriesComponent implements OnInit {

  constructor() { }

  title: string = 'Choose A Serie To Details'
  category: Category = 'series'
  page: string = '/serie'

  ngOnInit(): void {
  }

}
