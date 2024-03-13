import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
projectForm: FormGroup;
states = ['Stable', 'Critical', 'Finished'];
forbiddenProjectNames = ['Test', 'TEST','test'];
forbiddenProjectEmails = ['test@test.com', 'email@email.com', 'email@test.com', 'TEST@TEST.COM'];
  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(null,[Validators.required,this.checkProjectNames.bind(this)]),
      projectEmail: new FormControl(null, [Validators.required, Validators.email],this.forbiddenEmails.bind(this)),
      projectStatus: new FormControl(null, [Validators.required]),
    });      
  }
  constructor() {}
  onSubmit() {
      console.log(this.projectForm);
      //this.projectForm.reset();
    }

  checkProjectNames(control: FormControl): { [s: string]: boolean } {
      if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
        return { IsForbidden: true };
      }
      return null;
    }

    forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
          setTimeout(() => {
            if (this.forbiddenProjectEmails.indexOf(control.value) !== -1) {
              console.log("true")
              resolve({ emailIsForbidden: true });
            } else {
              console.log("false")
              resolve(null);
            }
          }, 1500);
        });
        return promise;
      }
}
