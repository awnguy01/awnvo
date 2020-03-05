import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { BioComponent } from './components/views/bio/bio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bio', component: BioComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
