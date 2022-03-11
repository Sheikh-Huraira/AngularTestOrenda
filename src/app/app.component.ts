import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Model } from './Model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Orenda Test';

  sum :number = 0
  
  data: Model[] = [];


  /*  name_array = ["Huraira","Talha"];
    subject_array = [1,2,3];
    obtained_Marks_array = [1,2,3];
    total_marks_array = [1,2,3];
  
    name = new FormControl('');
    obtain_marks = new FormControl('');
    total_marks = new FormControl('');
    subject =""
    
    name :string = "";
    
    getname(val: string){
      console.log(val)
    }
  
    Subjects = ["English","Urdu","Maths"];
  
    subjects(event:any){
      //console.log("subject changed")
      this.subject = event;
    }
    myclickfunction(event:any){
  
    }
  */

  subjects = ['Urdu', 'Science', 'English', 'Math'];

  model = new Model('Huraira', 25,100,this.subjects[0]);

  submitted = false;

  onSubmit(formdata: any) {
    this.submitted = true;
    console.log(formdata);
    let newStudent: Model = {
      name : formdata.name,
      Obtained_Marks : formdata.Obtained_Marks,
      total_Marks : formdata.total_Marks,
      subject : formdata.subject
      
    }
    formdata.name = '';
    formdata.subject = '';
    formdata.Obtained_Marks = 0;
    formdata.total_Marks = 0;
    console.log(newStudent);
    this.sum += newStudent.Obtained_Marks;

    this.data?.splice(0,0,newStudent);

    console.log(this.data);
  }

}
