import { Component, OnInit } from '@angular/core';
import { GetApiService } from './../get-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-users',
  templateUrl: './lista-users.component.html',
  styleUrls: ['./lista-users.component.css']
})
export class ListaUsersComponent implements OnInit {
  listUser=[{name:"",id:""}];
  constructor(private GetApiService: GetApiService, private router:Router) { }

  ngOnInit(): void 
  {
    let token = localStorage.getItem("tokenAutorizao");
    if(!token)
    {
     this.router.navigateByUrl('');
    }
    this.loadUsers(token);
  }
  loadUsers(token: any):void{

    this.GetApiService.loadUsers(token).subscribe(result=>
      {
        console.log(result);
        this.listUser=result.clients;
      })
  }

  getUserDetails(id:any):void
  {
    console.log(id);
    this.router.navigateByUrl('/userDetails/'+id);
  }

}
