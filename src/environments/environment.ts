
// ESTE AMBIENTE SE UTILIZA PARA DESARROLLO, TODOS LOS SERVICIOS QUE ESTÁ CONSUMIENDO SE BUSCAN SOBRE EL
// AMBIENTE LOCAL; PERO CUANDO SE TENGA QUE CONSTRUIR SE TIENE QUE CAMBIAR LA URL EN EL
// ARCHIVO environment.prod.ts

export const environment = {
  url: "http://localhost:8004",
  name: "development",
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
