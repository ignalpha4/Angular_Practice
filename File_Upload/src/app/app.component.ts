import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { UploadWidgetConfig, UploadWidgetResult } from '@bytescale/upload-widget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedFile: File | null = null;
  products: any;

  constructor(private http: HttpClient, private dataService: DataService) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  // onUpload(): void {
  //   if (this.selectedFile) {
  //     this.dataService.onUpload(this.selectedFile);
  //   } else {
  //     console.error('No file selected');
  //   }
  // }

  showData(): void {
    this.dataService.getData().subscribe((data) => {
      this.products = data;
    });
  }

  // upload code 
  options: UploadWidgetConfig = {
    apiKey: "public_kW15c8EB3qbv932yWpH5wrjfXfjP", // This is your API key.
    maxFileCount: 10
  };
  onComplete = (files: UploadWidgetResult[]) => {
    this.uploadedFileUrl = files[0]?.fileUrl;
  };
  uploadedFileUrl: string | undefined = undefined;
}
