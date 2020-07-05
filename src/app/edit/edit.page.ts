import { Component } from '@angular/core';
import { Camera} from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage {

  imgURL;

  constructor(
    private camera: Camera

  ) { }

  getCamera(){
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI
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
