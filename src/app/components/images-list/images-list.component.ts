import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Iimage } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
})
export class ImagesListComponent implements OnInit {
  images: Observable<Iimage[]>;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.images = this.imageService.getImages();
  }

  onClick(selectedImage: Iimage) {
    this.imageService.imageDetailsSelected(selectedImage);
  }
}
