import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from "@angular/router";

import {GalleryItemComponent} from "./gallery/gallery-item/gallery-item.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {GalleryAddComponent} from './gallery/gallery-add/gallery-add.component';


const galleryRoutes: Routes = [
  {path: 'gallery', component: GalleryComponent},
  {path: 'gallery-add', component: GalleryAddComponent},
  {path: 'galleryItem/:id', component: GalleryItemComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(galleryRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class GalleryRoutingModule { }