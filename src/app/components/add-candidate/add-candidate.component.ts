import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { CandidatesService } from 'src/app/services/candidates.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {

  constructor(private router: Router, private candidatesService: CandidatesService) { }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  name = new FormControl('');
  cpf = new FormControl('');

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

  backArrow() {
    this.router.navigateByUrl('/candidates');
  }

  addCandidate() {
    if (this.password.value != "" && this.email.value != "") {

      let data = {
        password: this.password.value,
        last_login: null,
        is_superuser: false,
        full_name: this.name.value,
        first_name: "",
        last_name: "",
        email: this.email.value,
        is_staff: false,
        is_active: false,
        date_joined: '2022-01-24 00:00',
        username: this.email.value,
        confirm_username: false,
        is_social: false,
        phone: "",
        publisher: false,
        name: this.name.value,
        cpf: this.cpf.value,
        rg: 0,
        birth_date: "1998-10-11",
        lattes: "",
        about: "",
        groups: [],
        user_permissions: []
      }

      this.candidatesService.newCandidate(data).subscribe(() => {
        Swal.fire('Sucesso!', 'O candidato foi adicionado com sucesso', 'success').then(() => {
          this.router.navigateByUrl('/candidates');
        })
      }, (error: any) => {
        Swal.fire('Oops!', error.message, 'error')
      })
    }
  }

  ngOnInit(): void {
  }

}
