import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Products } from '../Model/Products.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addForm: FormGroup
  userFile:any
  message?:String
  imgURL:any
  imagePath:any
  constructor(
     private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private toast:NgToastService) { 

      let formControls = {
        image: new FormControl('', [
          Validators.required,
  
        ]),
        name: new FormControl('', [
          Validators.required,
  
        ]),
        categorie: new FormControl('', [
          Validators.required,
  
        ]),
        price: new FormControl('', [
          Validators.required,
  
        ]),
        product_detail: new FormControl('', [
          Validators.required,
  
        ]),
      
      }
      this.addForm = this.fb.group(formControls)
  
    }
    get image() { return this.addForm.get('image') }
    get name() { return this.addForm.get('name') }
    get price() { return this.addForm.get('price') }
    get product_detail() { return this.addForm.get('product_detail') }
    get categorie() { return this.addForm.get('categorie') }
    
    
    onSelectFile(event: any) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.userFile = file;
    
  
        var mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
          this.message = 'Sauf les images sont acceptés.';
          return;
        }
  
        var reader = new FileReader();
  
        this.imagePath = file;
        reader.readAsDataURL(file);
        reader.onload = (_event) => {
          this.imgURL = reader.result;
        };
      }
    }
    AddProduct() {
      let data = this.addForm.value;
      console.log(data);
      let prod = new Products(
         undefined ,data.name,data.price,this.imgURL, data.product_detail,data.categorie);
         console.log(prod);
      if(data.name==0||data.price==0||data.product_detail==0||this.imgURL==0||data.categorie==0)
      {this.toast.info({
        detail:'error msg !!',
        summary:'remplir votre champs'
      });}else{
        
      this.service.addProd(prod).subscribe(

  
        res => {
          console.log(res);
          this.toast.success({
            detail:'success msg',
            summary:'Ajout avec Succés'
          });
          this.router.navigate(['/listProd']);
        },
        err => {
          console.log(err);
          this.toast.error({
            detail:'error msg',
            summary:'verifier votre formulaire !'
          });
  
        }
  
      )
    }
  
    }
  
    ngOnInit(): void {
    }
  
  }

