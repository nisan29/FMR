import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectedImageMetadataComponent } from './components/selected-image-metadata/selected-image-metadata.component';
import { ImagesListComponent } from './components/images-list/images-list.component';
import { ImageViewComponent } from './components/image-view/image-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ScrollingModule } from '@angular/cdk/scrolling';
// import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
// import { initializeKeycloak } from './utility/app.init';

@NgModule({
  declarations: [
    AppComponent,
    SelectedImageMetadataComponent,
    ImagesListComponent,
    ImageViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    ScrollingModule,
    // KeycloakAngularModule
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializeKeycloak,
    //   multi: true,
    //   deps: [KeycloakService]
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
