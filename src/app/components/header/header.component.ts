import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { setToken } from 'src/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  sair() {
    setToken("")
    this.router.navigateByUrl('/login');
  }

  ngOnInit(): void {
  }

}
