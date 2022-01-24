import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { setToken } from 'src/utils';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'O campo do e-mail é obrigatório';
    }

    return this.email.hasError('email') ? 'E-mail inválido.' : '';
  }

  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'O campo de senha é obrigatório';
    }
    return this.email.hasError('password') ? 'Valor digitado é inválido' : '';
  }

  submit() {
    if (this.password.value != "" && this.email.value != "") {
      this.loginService.login(this.email.value, this.password.value).subscribe(
        (response: any) => {
          setToken(response.access_token)
          this.router.navigateByUrl('/candidates');
        }, (error: any) => {
          if (error.status === 401) {
            Swal.fire('Oops!', "Usuário não autorizado", 'error')
          } else {
            Swal.fire('Oops!', error.message, 'error')
          }
        });
    }
  }

  ngOnInit(): void {
  }

}
