import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetApiService } from './../get-api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userData=[];
  isLoading = true;
  options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['X-1']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00','14:00','16:00','18:00','20:00','22:00']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'X-1',
        type: 'line',
        stack: 'counts',
        areaStyle: { normal: {} },
        data:this.userData

      },
    ]
  };


  constructor(private GetApiService: GetApiService, private router:Router,private activeRoute:ActivatedRoute){

   }

  ngOnInit(): void 
  {
    let id = this.activeRoute.snapshot.paramMap.get("id");
    let token = localStorage.getItem("tokenAutorizao");
    if(!token)
    {
     this.router.navigateByUrl('');
    }
    this.loadUserDetails(token,id);
  }
  loadUserDetails(token:any,id:any):void
  {
    this.GetApiService.loadUserDetails(token,id).subscribe(result=>
      {
        this.userData=result.data;
        this.instanceGraph();
      })
  }
  voltarTela():void
  {
    console.log("voltando")
    this.router.navigateByUrl('/listaUsers');
  }
  instanceGraph():void
  {

    this.options= {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['Dados do Cliente']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00','14:00','16:00','18:00','20:00','22:00']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Dados do Cliente',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data:this.userData
        },
      ]
    };
  }


}
