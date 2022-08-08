import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Iimage } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss']
})
export class ImageViewComponent implements OnInit {
  selectedImage$: Observable<Iimage>;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.selectedImage$ = this.imageService.selectedImageDetails$;
  }

}
