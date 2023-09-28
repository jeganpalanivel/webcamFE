import { Component } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-webcom',
  templateUrl: './webcom.component.html',
  styleUrls: ['./webcom.component.css']
})
export class WebcomComponent {
stream:any=null;
status:any=null;
trigger:Subject<void>=new Subject();
previewImage:string='';
  btnLabel: string='Capture image';

get $trigger():Observable<void>{
  return this.trigger.asObservable();
}

snapshot(event:WebcamImage){
console.log(event)
this.previewImage=event.imageAsDataUrl;
this.btnLabel="Re Capture image"
}

checkPermission(){
    navigator.mediaDevices.getUserMedia({
        video:{
        width:500,
        height:500
        }
    }).then((res)=>{
    this.stream=res;
    this.status='My camera is accessing'
    this.btnLabel='Capture image'
    }).catch(err=>{
      if(err?.message==='permission denied'){
        this.status='Permission denied please try again by approving the access'
      }else{
        this.status='You may not having camera system,Please try again..,'
      }
    })
}

captureImage(){
this.trigger.next()
}

proceed(){
  console.log(this.previewImage)
}

}
