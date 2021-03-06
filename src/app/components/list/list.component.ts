import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  title: string = ''

  @Input()
  items: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
