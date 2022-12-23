import { Component, OnInit } from '@angular/core';
import { Alert } from '../model/alert';
import { AlertService } from '../service/alert.service';
import { catchError } from 'rxjs/operators';
import { of, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-alert',
  templateUrl: './dashboard-alert.component.html',
  styleUrls: ['./dashboard-alert.component.css']
})
export class DashboardAlertComponent implements OnInit {
  public alert:Alert = new Alert();
  public date:any = undefined;
  public sensores=["uptime","cpu","memoria"];
  public dispositivos=["alnova","cliente360","tiempoaire","afore","cobranza","credito","jboss","apache","mongo"];
  public motivos=["Mantenimiento","Solicitud Operaciones"];
  public message:string;
  public error:boolean=false;
  public saving:boolean=false;
  public checkVigenciaInicio:boolean=false;

  constructor(private alertService:AlertService, protected router: Router) { }

  ngOnInit(): void {
  }
  public save():void {
    this.saving = true;
    if (!this.alert.estatus) {
      this.alert.estatus = 1;
    }
    this.alertService.insert(this.alert)
    .pipe(
      catchError((e:any) => {
        this.saving = false;
        this.error = true;
        this.message = "Ocurrió un error al dar de alta la regla de no alertamiento";
        return throwError(e);
      })
    )
    .subscribe(
      res=> {
          this.error = false;
          this.message = "Se dio de alta correctamente la regla de no alertamiento";
          setTimeout(() => {
              this.router.navigate(['/']);
          }, 2000);
      });
  }

  /**
   * activaVigenciaInicio
   */
  public activaVigenciaInicio() {
    this.checkVigenciaInicio=!this.checkVigenciaInicio;
  }

}
