import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../image.service';
import { catchError, map, Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { createGlobalPositionStrategy } from '@angular/cdk/overlay';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from '@angular/cdk/dialog';
import { FormDialog } from '../form-dialog/form-dialog';

@Component({
  selector: 'app-auditorprofile',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    DialogModule,
    NgIf,
    AsyncPipe,
  ],
  templateUrl: './auditorprofile.html',
  styleUrl: './auditorprofile.css',
})
export class Auditorprofile implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  private imageService = inject(ImageService);
  private cdr = inject(ChangeDetectorRef);

  private readonly dialog = inject(MatDialog);

  auditorInfo$!: Observable<any>;
  auditorData: any;

  private employeeId = this.activatedRoute.snapshot.paramMap.get('id');

  async ngOnInit() {

    console.log(this.employeeId);
    await this.imageService.getAuthorById(this.employeeId!)
      .pipe(
        (map((response: any) => { return response?.data })),
        catchError((error: Error) => {
          console.log("error in admin register", error.message);
          throw error;
        })
      )
      .subscribe(auditorData => {
        this.auditorData = auditorData;
        this.cdr.detectChanges();
      }
      );

    console.log(this.auditorData);
  }



  auditor = {
    name: "Alice Johnson",
    type: "Lead Auditor",
    empId: "AU1001",
    dept: "IT",
    contact: "alice.johnson@company.com",
    image: "https://kahedu.edu.in/n/wp-content/uploads/2023/10/Auditing-Excellence_-The-art-of-Assurance-in-B-Com-Professional-accounting-1024x683.jpg",
    description: "Alice Johnson is a Lead IT Auditor with over 10 years of experience in cybersecurity assessments, system controls evaluation, and regulatory compliance. She specializes in enterprise risk management and leads complex audit engagements across technology platforms."
  };

  onSendRequest(email: string) {
    console.log(email);
    window.location.href = `mailto:${email}`;
  }

  openRequest(auditor: any) {
    const dialogRef = this.dialog.open(FormDialog, {
      data: auditor,
      width: '800px',
      height: '300px'
    },
    );
  }

}
