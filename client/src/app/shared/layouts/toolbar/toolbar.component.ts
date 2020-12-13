import { Component, OnInit } from '@angular/core';

const links = [
  {
    title: 'link 1',
    path: '/'
  },
  {
    title: 'link 2',
    path: '/'
  },
  {
    title: 'applications',
    path: '/applications'
  },
  {
    title: 'link 4',
    path: '/'
  },
  {
    title: 'link 5',
    path: '/'
  },
]
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  constructor() {}

  public links = links;
  ngOnInit(): void {
  }
}
