import { Component, Inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../_Services/crud.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  CRUD!:FormGroup

  checked = signal<boolean>(false)

  constructor(private fb: FormBuilder, private crudSer: CrudService, private matRef: MatDialogRef<ProductComponent>, 
    
    private snach: MatSnackBar, @Inject(MAT_DIALOG_DATA) public  data: any){}

  ngOnInit(): void {
    
    this.CRUD = this.fb.group({

      name: ['', Validators.required],
      image: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required]
    })

    this.CRUD.patchValue(this.data)

    this.crudSer.getValueOfToggle().subscribe(res => this.checked.set(res) )

  }


  Submit(){

    if(this.CRUD.valid){

      if(this.data){

        this.crudSer.updateProduct(this.data._id, this.CRUD.value).subscribe({

          next: (val: any) => {

            this.matRef.close()

            this.snach.open('product upddated successfuly', 'OK', {duration: 2000})

          }
        })


      }else{

        this.crudSer.pushProduct(this.CRUD.value).subscribe({

          next: (val: any) => {
  
            console.log(val)
            this.matRef.close(true)
            this.snach.open('one product added', 'Undo', {duration: 2000})
          },
  
          error: (err: any) => console.error(err)
  
        })

      }

    }

  }

}
