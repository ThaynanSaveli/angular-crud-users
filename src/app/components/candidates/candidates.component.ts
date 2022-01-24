import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CandidatesService } from 'src/app/services/candidates.service';
import Swal from 'sweetalert2';

export interface User {
  id: number
  name: string;
  email: string;
  cpf: string;
}
@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  constructor(private candidatesService: CandidatesService, private router: Router) { }

  displayedColumns: string[] = ['name', 'email', 'cpf', 'acoes'];
  dataSource = new MatTableDataSource<User>([]);

  goToAddCandidates() {
    this.router.navigateByUrl('/add-candidate');
  }

  editCandidate(id: number) {
    this.router.navigateByUrl(`/edit-candidate/${id}`);
  }

  removeCandidate(id: number) {
    Swal.fire({
      title: 'Tem certeza que deseja remover este candidato?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, remover',
      cancelButtonText: 'Não, cancelar'
    }).then((result) => {
      if (result.value) {
        this.candidatesService.deleteCandidate(id).subscribe((response: any) => {
          Swal.fire('Sucesso!', 'O candidato foi removido com sucesso', 'success')
        }, (error: any) => {
          Swal.fire('Oops!', error.message, 'error')
        })
      }
    })
  }

  ngOnInit(): void {
    let arr: User[] = [];

    this.candidatesService.getAllCandidates().subscribe((response: any) => {
      response.map((candidate: any) => {
        let obj = {
          id: candidate.id,
          name: candidate.full_name != "" ? candidate.full_name : "Não Informado",
          email: candidate.email,
          cpf: candidate.cpf ?? "Não Informado"
        }
        arr.push(obj);
      })
      this.dataSource.data = arr;
    }, (error: any) => {
      console.log(error);
    });
  }

}
