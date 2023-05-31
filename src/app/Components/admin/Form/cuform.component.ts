import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cuform',
  templateUrl: './cuform.component.html',
  styleUrls: ['./cuform.component.css'],
})
export class CUFormComponent implements OnInit {
  addFlag: boolean = true;
  productId: any;
  product: any;
  productForm = new FormGroup({
    src: new FormControl("",[Validators.required]),
    price: new FormControl("",[Validators.required, Validators.min(10)]),
    quantity: new FormControl("",[Validators.required, Validators.min(1)]),
    name: new FormControl("",[Validators.required, Validators.minLength(5)]),
    desc: new FormControl("",[Validators.required, Validators.maxLength(500)]),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProductService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.productId != 0) {
      this.service.getProductByID(this.productId).subscribe({
        next: (response) => {
          this.product = response;
          this.productForm.controls.name.setValue(this.product.name);
          this.productForm.controls.price.setValue(this.product.price);
          this.productForm.controls.quantity.setValue(this.product.quantity);
          this.productForm.controls.src.setValue(this.product.src);
          this.productForm.controls.desc.setValue(this.product.desc);
          // console.log(this.productForm.value);
        },
        error: (err) => {
          console.error(err.statusText);
        },
      });
      this.addFlag = false
    }
  }

  get getProductName(){
    return this.productForm.controls['name'];
  }

  get getProductPrice(){
    return this.productForm.controls['price'];
  }

  get getProductQuantity(){
    return this.productForm.controls['quantity'];
  }

  get getProductImageSrc(){
    return this.productForm.controls['src'];
  }

  get getProductDesc(){
    return this.productForm.controls['desc'];
  }

  formOperation(e:Event){
    e.preventDefault()
    if(this.productForm.status == "VALID"){
      if(this.productId == 0){
        this.addProduct()
      }
      else{
        this.editProduct()
      }
    }
    else{
      console.error('Error')
    }
  }

  addProduct(){
    this.service.addProduct(this.productForm.value).subscribe({
      next: () => {
        Swal.fire(
          'Good job!',
          `Product ${this.getProductName.value} added Successfully`,
          'success'
        )
        this.productForm.controls.name.setValue("");
        this.productForm.controls.price.setValue("");
        this.productForm.controls.quantity.setValue("");
        this.productForm.controls.src.setValue("");
        this.productForm.controls.desc.setValue("");
      },
      error: (err) => console.error(err)
    })
  }

  editProduct(){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.editProduct(this.productId,this.productForm.value).subscribe({
          next: () => {
            Swal.fire('Saved!', `Product ${this.getProductName.value} updated Successfully`, 'success')
            .then((result) => {
              if (result.isConfirmed){
                this.router.navigate(['/admin_dashboard'])
              }
              else{
                this.router.navigate(['/admin_dashboard'])
              }
            })
          },
          error: (err) => console.error(err)
        })
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
}
