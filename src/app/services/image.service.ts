import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Iimage } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private selectedImageDetailsSubject = new BehaviorSubject(null);
  readonly selectedImageDetails$ = this.selectedImageDetailsSubject.asObservable();

  constructor(private http: HttpClient) { }

  public getImages(): Observable<Iimage[]> {
    return this.http.get<Iimage[]>('https://picsum.photos/v2/list');
  }

  public imageDetailsSelected(selectedImage: Iimage) {
    this.selectedImageDetailsSubject.next(selectedImage);
  }
}
