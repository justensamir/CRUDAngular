import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent  implements OnInit{
  products: any
  title: string = 'Dashboard'
  constructor(private activatedRoute:ActivatedRoute, private service: ProductService){}
  ngOnInit(): void {
    this.service.getAllProducts().subscribe({
      next: (response) => {
        this.products = response
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  viewProduct(productId: any){
    this.activatedRoute.snapshot.paramMap.get(`/products/${productId}`)
  }

  removeProduct(productId: any, e:Event){
    e.preventDefault()
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteProduct(productId).subscribe(
          {
            next: ()=> {
              this.products = this.products.filter((item: any)=> item.id != productId)
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            },
            error: (err)=>{
              console.error(err);
            }
          }
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

}
