export class Alert {
  id: string | undefined;
  empleado: string | undefined;
  area: string | undefined;
  justificacion: string | undefined;
  motivo: string | undefined;
  dispositivo: string | undefined;
  estatus: number | undefined;
  host: string | undefined;
  sensor: string | undefined;
  vigencia : Date | undefined;
  vigenciaInicio : Date | undefined;
  checkboxVigencia : boolean | false;
}
