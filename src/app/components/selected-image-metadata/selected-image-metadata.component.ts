import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Iimage } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-selected-image-metadata',
  templateUrl: './selected-image-metadata.component.html',
  styleUrls: ['./selected-image-metadata.component.scss']
})
export class SelectedImageMetadataComponent implements OnInit {
  selectedImage: Observable<Iimage>;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.selectedImage = this.imageService.selectedImageDetails$;
  }

}
