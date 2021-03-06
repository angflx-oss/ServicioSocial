import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BrigadistasService } from '../service/brigadistas.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-mail-brigadista',
  templateUrl: './mail-brigadista.component.html',
  styleUrls: ['./mail-brigadista.component.css']
})
export class MailBrigadistaComponent implements OnInit {
  
  @Input() id:any;  
  
  constructor(public _MessageService: BrigadistasService,  private builder: FormBuilder, private activeRoute:ActivatedRoute) {
    this.formData=this.builder.group({
      subject:[''],
      message:[''],
      email:[''],      
    
});
  }
  tags:any=[];
  Selectedtags:string[]=[];
  dropdownSettings = {};
   formData!: FormGroup;
   nuevo = '';
   submitted = false;
   ngOnInit(): void {
    this.getData();  
    this.loadData();  

   }

   sendData():any{
    console.log(this.formData.value);
    this._MessageService.sendMessage(this.formData.value).subscribe(res=>{
      
    });
    alert("Enviado Correctamente");
 
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tags, event.previousIndex, event.currentIndex);
  }

  
  getData(){
    this._MessageService.getBrigadista(this.id).subscribe(
      res=>{
         
        this.formData.setValue({  
          subject:[''],
          message:[''],
          email:res['correo'],

        });          
      }        
    );    
}
  loadData(){
    this._MessageService.getTag().subscribe(x => {
      console.log(x);
      this.tags = x;        
    });
}


public options = {
  readonly: undefined,
  placeholder: '+ Tag'
};


}
