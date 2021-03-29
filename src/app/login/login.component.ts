import { GetApiService } from './../get-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APP_ID, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private GetApiService: GetApiService) {this.formGroup=new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  }) }

  ngOnInit(): void {
    this.initForm();

  }
  initForm()
  {
    this.formGroup=new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  loginProces(){
    console.log("entrou funcao")
    if(this.formGroup.valid){
      this.GetApiService.login(this.formGroup.value).subscribe(result=>{
        if(result.success){
          console.log(result)
        }else
        alert("Credenciais erradas")
      }
        )
    }
  }

}
