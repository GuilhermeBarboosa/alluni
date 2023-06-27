import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnunciarService } from './anunciar.service';
import { LocalStorageService } from 'src/shared/services/local-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-anunciar',
  templateUrl: './anunciar.component.html',
  styleUrls: ['./anunciar.component.css']
})
export class AnunciarComponent {
  photoUploadForm: FormGroup;
  selectedFile: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.photoUploadForm = this.formBuilder.group({
      description: '',
      file: null
    });
  }

  onSubmit() {console.log('aaaaaaaa')
    const formData = new FormData();
    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }
    formData.append('description', this.photoUploadForm.value.description);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    this.http.post('http://localhost:8080/api/photos', formData, { headers: headers }).subscribe(
      (res) => console.log(res),
      (err) => console.error(err)
    );
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

}
