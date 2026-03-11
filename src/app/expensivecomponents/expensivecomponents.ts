import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ImageService } from '../image.service';
import { createGlobalPositionStrategy } from '@angular/cdk/overlay';
import { MatCardModule } from '@angular/material/card'
import { Router, RouterLink } from '@angular/router';
import { catchError, map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';


interface FoodNode {
  name: string;
  children?: FoodNode[];
}

@Component({
  selector: 'app-expensivecomponents',
  imports: [MatTreeModule, MatButtonModule, MatIconModule, MatTableModule, MatCardModule, AsyncPipe],
  templateUrl: './expensivecomponents.html',
  styleUrl: './expensivecomponents.css',
})
export class Expensivecomponents implements OnInit {

  dataSource$!: Observable<any>;

  imageService = inject(ImageService);
  private ctr = inject(ChangeDetectorRef);
  private router = inject(Router);

  products = [];


  displayedColumns: string[] = ['Code', 'Name', 'Category', 'Quantity'];

  childrenAccessor = (node: FoodNode) => node.children ?? [];

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  async ngOnInit() {
    // this.imageService.getImages().then((images: any) => this.imageService.set(images));
    //     this.imageService.getFilesystem().then((files) => (this.files = files));
    // (this.products as any) = await this.imageService.getProductsMini();
    this.dataSource$ = this.imageService.getTreeData(1)
      .pipe(
        //map does - It doesn't "assign" anything to dataSource$. Instead, it says: "Whenever data flows through this stream, transform it into response.data before it reaches the end."
        (map((response: any) => response.data)),
        catchError((error: Error) => {
          console.log("error in admin register", error.message);
          throw error;
        }));

    // .subscribe((response: any) => {
    //   console.log("tree response", response.data);
    //   // this.dataSource = response?.data
    //   this.ctr.detectChanges();
    // });

    (this.products as any) = await this.imageService.getProductsMini();

    this.ctr.detectChanges();
  }

  getImageDetails(node: any) {
    console.log(node);
  }

  viewDetails(nodeData: any) {
    console.log("router", nodeData);
    this.router.navigate(['/auditor-details', nodeData.empId]);
  }

}
