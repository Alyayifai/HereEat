import { Component, OnInit } from '@angular/core';
import { Camera, DestinationType } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-ulasan',
  templateUrl: './ulasan.page.html',
  styleUrls: ['./ulasan.page.scss'],
})
export class UlasanPage  {
  imgURL;

  constructor(
    private camera: Camera

  ) { }

  getCamera(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL

    }).then ((res) =>{
      this.imgURL = res;

    }).catch(e =>{
      console.log(e);
    })
  }

  getGallery(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL

    }).then ((res) =>{
      this.imgURL = 'data:image/jpeg;base64,' + res;

    }).catch(e =>{
      console.log(e);
    })

  }
}
