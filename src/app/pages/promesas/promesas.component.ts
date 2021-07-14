import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: []
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then(usuarios=>{
      console.log(usuarios)
    });
    // const promesa = new Promise((resolve, reject)=>{

    //   if(false){
    //     resolve('hola Mundo');
    //   }else{
    //     reject('algo salio mal');
    //   }

    // });
  
    // promesa.then((mensaje)=>{
    //   console.log(mensaje);
    // })
    // .catch(error => console.log('error en mi promesa', error));

    // console.log('fin del init');
  }

  getUsuarios(){
   return new Promise(resolve=>{

      fetch('https://reqres.in/api/users')
      .then(resp=> resp.json()
      .then(body=> resolve(body.data)));

    })

  }

  
}
