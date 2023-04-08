import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalProds:number=0;
  // totalFournisseur:number=0;
  // totalEntreprise:number=0;
  // totalOffre:number=0
  constructor(
    private service:CrudService,
  ) { 
    
  }

  ngOnInit(): void {
    this.service.getProd().subscribe(prod =>{
      this.totalProds=prod.length})
    // this.service.getFour().subscribe(four =>{
    // this.totalFournisseur=four.length})
                     
  }

}
