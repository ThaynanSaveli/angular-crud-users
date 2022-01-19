import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'O campo do e-mail é obrigatório';
    }

    return this.email.hasError('email') ? 'E-mail inválido.' : '';
  }

  listaDePokemons() {
    this.router.navigateByUrl('/candidates');
  }

  ngOnInit(): void {
  }

}
