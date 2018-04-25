// import { Injectable } from '@angular/core';
// import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/delay';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/materialize';
// import 'rxjs/add/operator/dematerialize';
//
// @Injectable()
// export class BackendInterceptor implements HttpInterceptor {
//
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // array in local storage for registered users
//     const users: any[] = JSON.parse(localStorage.getItem('users')) || [];
//
//     // wrap in delayed observable to simulate server api call
//     return of(null).mergeMap(() => {
//       // get users
//       if (request.url.endsWith('/api/users') && request.method === 'GET') {
//         // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
//         if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
//           return of(new HttpResponse({registrationStatus: 200, body: users}));
//         } else {
//           // return 401 not authorised if token is null or invalid
//           return Observable.throw('Unauthorised');
//         }
//       }
//
//       // get user by id
//       if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'GET') {
//         // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
//         if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
//           // find user by id in users array
//           const urlParts = request.url.split('/');
//           const id = parseInt(urlParts[urlParts.length - 1], 10);
//           const matchedUsers = users.filter(u => {
//             return u.id === id;
//           });
//           const user = matchedUsers.length ? matchedUsers[0] : null;
//
//           return of(new HttpResponse({registrationStatus: 200, body: user}));
//         } else {
//           // return 401 not authorised if token is null or invalid
//           return Observable.throw('Unauthorised');
//         }
//       }
//
//       // create user
//       if (request.url.endsWith('/api/users') && request.method === 'POST') {
//         // get new user object from post body
//         const newUser = request.body;
//
//         // validation
//         const duplicateUser = users.filter(user => {
//           return user.username === newUser.username;
//         }).length;
//         if (duplicateUser) {
//           return Observable.throw('Username "' + newUser.username + '" is already taken');
//         }
//
//         // save new user
//         newUser.id = users.length + 1;
//         users.push(newUser);
//         localStorage.setItem('users', JSON.stringify(users));
//
//         // respond 200 OK
//         return of(new HttpResponse({registrationStatus: 200}));
//       }
//
//       // delete user
//       if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'DELETE') {
//         // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
//         if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
//           // find user by id in users array
//           const urlParts = request.url.split('/');
//           const id = parseInt(urlParts[urlParts.length - 1], 10);
//           for (let i = 0; i < users.length; i++) {
//             const user = users[i];
//             if (user.id === id) {
//               // delete user
//               users.splice(i, 1);
//               localStorage.setItem('users', JSON.stringify(users));
//               break;
//             }
//           }
//
//           // respond 200 OK
//           return of(new HttpResponse({registrationStatus: 200}));
//         } else {
//           // return 401 not authorised if token is null or invalid
//           return Observable.throw('Unauthorised');
//         }
//       }
//
//       // pass through any requests not handled above
//       return next.handle(request);
//
//     })
//
//     // call materialize and dematerialize to ensure delay even if an error is thrown
//     // (https://github.com/Reactive-Extensions/RxJS/issues/648)
//       .materialize()
//       .delay(500)
//       .dematerialize();
//   }
// }
//
// export let BackendProvider = {
//   // use fake backend in place of Http service for backend-less development
//   provide: HTTP_INTERCEPTORS,
//   useClass: BackendInterceptor,
//   multi: true
// };
