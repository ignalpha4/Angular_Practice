import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // private apiUrl = `http://freeimage.host/api/1/upload/?key=6d207e02198a847aa98d0a2a901485a5&source=https://img.freepik.com/premium-photo/trees-growing-forest_1048944-30368869.jpg?w=1380&format=json`; // Use the proxy path

  // onUpload(image: File): void {
  //   const formData = new FormData();
  //   formData.append('key', '6d207e02198a847aa98d0a2a901485a5');
  //   formData.append('action', 'upload');
  //   formData.append('source', image);
  //   formData.append('format', 'json');

  //   this.http.post(this.apiUrl,formData).subscribe(
  //     (response) => {
  //       console.log('Upload success:', response);
  //     },
  //     (error) => {
  //       console.error('Upload error:', error);
  //     }
  //   );
  // }

  getData() {
    return this.http.get('https://fakestoreapi.com/products');
  }
}
