import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { Product } from '../../models/product';


@Component({
  selector: 'app-manage-products',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.css'
})
export class ManageProductsComponent {
  title = 'Kitchen Story';
  public products: Product[] | null = null;
  public editProduct: Product | null = null;
  public deleteProduct: Product | null = null;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(): void {
    this.adminService.getProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
        console.log(this.products);
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  public onAddProduct(addForm: NgForm): void {
    const addProductFormButton = document.getElementById('add-product-btn');
    if (addProductFormButton) {
      addProductFormButton.click();
    } else {
      console.error('Element with id "add-product-btn" not found.');
    }
    addForm.value.isStocked = true;
    this.adminService.addProduct(addForm.value).subscribe(
      (response: Product) => {
        console.log(response);
        this.getProducts();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateProduct(product: Product): void {
    this.adminService.updateProduct(product).subscribe(
      (response: Product) => {
        console.log(response);
        this.getProducts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteProduct(productId: number | undefined): void {
    if (productId) {
      this.adminService.deleteProduct(productId).subscribe(
        (response: void) => {
          console.log(response);
          this.getProducts();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  }

  public searchProducts(key: string): void {
    console.log(key);
    const results: Product[] = [];
    for (const product of this.products || []) {
      if (product.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || product.brand.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || product.description.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(product);
      }
    }
    this.products = results;
    if (results.length === 0 || !key) {
      this.getProducts();
    }
  }

  public onOpenModal(product: Product | null, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addProductModal');
    }
    if (mode === 'edit') {
      this.editProduct = product;
      button.setAttribute('data-target', '#updateProductModal');
    }
    if (mode === 'delete') {
      this.deleteProduct = product;
      button.setAttribute('data-target', '#deleteProductModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
