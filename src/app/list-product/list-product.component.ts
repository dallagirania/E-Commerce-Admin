import { Component, OnInit } from '@angular/core';
import { Products } from '../Model/Products.model';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  nbrProd:number=0
  page:number=1
  liste : Products[]=[]
  constructor(
    private service:CrudService,
    private route:Router
  ) { }
  supprimerProd(prod:Products){
    if (confirm("voulez-vous supprimer cet Administrateur ?"))
    {
      this.service.deleteProd(prod.id).subscribe(()=>{
        this.route.navigate(["/listProd"]).then(()=>{
          window.location.reload()
        })
      })
    }
  }
  ngOnInit(): void {
    this.service.getProd().subscribe(prod=>{
      this.liste=prod
      this.nbrProd=prod.length
    })
  }
}
