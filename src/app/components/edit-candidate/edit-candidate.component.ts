import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { CandidatesService } from 'src/app/services/candidates.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-candidate',
  templateUrl: './edit-candidate.component.html',
  styleUrls: ['./edit-candidate.component.css']
})
export class EditCandidateComponent implements OnInit {

  constructor(private router: Router, private candidatesService: CandidatesService, private route: ActivatedRoute) { }

  id: string = "";
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('');
  cpf = new FormControl('');
  password = new FormControl('');

  backArrow() {
    this.router.navigateByUrl('/candidates');
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'O campo do e-mail é obrigatório';
    }

    return this.email.hasError('email') ? 'E-mail inválido.' : '';
  }

  editCandidate() {
    if (this.email.value != "") {
      let data = {
        full_name: this.name.value,
        email: this.email.value,
        name: this.name.value,
        cpf: this.cpf.value,
        password: this.password.value
      }

      this.candidatesService.editCandidate(this.id, data).subscribe((response: any) => {
        Swal.fire('Sucesso!', 'O candidato foi alterado com sucesso', 'success').then(() => {
          this.router.navigateByUrl('/candidates');
        })
      }, (error: any) => {
        Swal.fire('Oops!', error.message, 'error')
      })
    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? "";

    this.candidatesService.getCandidate(this.id).subscribe((response: any) => {
      console.log(response)
      this.email.setValue(response.email)
      this.name.setValue(response.full_name)
      this.cpf.setValue(response.cpf)
      this.password.setValue(response.password)

    }, (error: any) => {
      Swal.fire('Oops!', error.message, 'error')
    })
  }

}
