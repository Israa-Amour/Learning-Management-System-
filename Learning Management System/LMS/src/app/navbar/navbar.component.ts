import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  w3_close() {
    let x = document.getElementById("mySidebar") || document.createElement("div");
    console.log
    x.style.display = "none";

  }
  w3_open(){
    let x = document.getElementById("mySidebar")|| document.createElement("div");
    x.style.width = "100%";
    x.style.fontSize = "40px";
    x.style.paddingTop = "10%";
    x.style.display = "block";
  }
}
