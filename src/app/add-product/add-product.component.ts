import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

const URL = 'http://localhost:8080/api/products';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  addProductForm = this.fb.group({
    productName: ['', Validators.required],
    productType: ['', Validators.required],
    productBrand: ['', Validators.required],
    productComments: ['', Validators.required],
    userContact: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private toastr: ToastrService) {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.toastr.success('Add product submit method called');
    console.log('@@@@', this.addProductForm.value);
  }

  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'image',
  });

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, status: any) => {
      console.log('Uploaded File Details:', item);
      this.toastr.success('File successfully uploaded!');
    };
  }
}
