import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { AddCandidateComponent } from './components/add-candidate/add-candidate.component';
import { EditCandidateComponent } from './components/edit-candidate/edit-candidate.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'candidates', component: CandidatesComponent, },
  { path: 'add-candidate', component: AddCandidateComponent },
  { path: 'edit-candidate/:id', component: EditCandidateComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
