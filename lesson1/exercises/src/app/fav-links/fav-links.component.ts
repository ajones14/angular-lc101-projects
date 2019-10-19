import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks: string[];
  constructor() {
    this.favLinks = ["https://www.facebook.com", "https://www.pinterest.com"];
  }
  ngOnInit() {
  }

}
