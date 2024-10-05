import { Component, OnInit, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductComponent } from '../../_Modal/product/product.component';
import { CrudService } from '../../_Services/crud.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent implements OnInit {

    dataSource = signal<any>([])

    displayColumns = signal<string[]>(['Product', 'Name', 'Price', 'Quantity', 'Actions'])

    checked = signal<boolean>(false)

  constructor(private dialog:  MatDialog, private crudSer: CrudService, private snack: MatSnackBar){}


  addProduct(){
    
    const matRef =  this.dialog.open(ProductComponent)

    matRef.afterClosed().subscribe(() => this.getAllProducts())
  }


  ngOnInit(): void {this.getAllProducts()}

  // get all products .............
   getAllProducts(){

    this.crudSer.getAllProducts().subscribe(result => {

      this.dataSource.set(result)
    })
  }

  // delete product ...........
  trash(event: any){


      this.crudSer.deleteProduct(event).subscribe(() => {

        this.getAllProducts()
        this.snack.open('one product deleted', 'Dismis', {duration: 2000})

      })
  }

  updateProduct(event: any){

   const matref =  this.dialog.open(ProductComponent, {data: event})

    matref.afterClosed().subscribe(() => this.getAllProducts())
  }


  slide(){

    this.checked.set(!this.checked())

    // console.log(this.checked())

    this.crudSer.toggle(this.checked())
  }

}
