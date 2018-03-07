import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Painel';

  employees =[
    {id:'1', name: 'Ronaldo',sobrenome:'Lester',data:'25/10/1998',idade:'25', profissao:'Jogador', email:'email@email' },
    {id:'2', name: 'Rivaldo',sobrenome:'Mendez',data:'23/09/2000',idade:'27', profissao:'Designer', email:'email@email' },
    {id:'3', name: 'Neymar',sobrenome:'Junior',data:'23/09/2000',idade:'25', profissao:'Programador', email:'email@email' },
  ];

  model:any = {};
  model2:any = {};
  msg:string = '';
  hideUpdate:boolean = true;

  //metodos
  addEmployee():void{
    this.employees.push(this.model);
    this.model = {};
    this.msg = 'CAMPO AGREGADO';
  }
  deleteEmployee(i):void{
    var answer = confirm('Esta seguro que deseja deletar essa operação');
    if(answer){
      this.employees.splice(i, 1);
      this.msg = 'CAMPO DELETADO';
    }
  }
  myValue;
  editEmployee(i):void{
    this.hideUpdate = false;
    this.model2.id = this.employees[i].id;
    this.model2.name = this.employees[i].name;
    this.model2.sobrenome = this.employees[i].sobrenome;
    this.model2.data = this.employees[i].data;
    this.model2.idade = this.employees[i].idade;
    this.model2.profissao = this.employees[i].profissao;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }
  updateEmployee():void{
    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++){
      if(i == j){
        this.employees[i] = this.model2;
        this.msg = 'CAMPO EDITADO';
        this.model2 = {};
      }
    }
  }
  closeAlert():void {
    this.msg ='';
  }
}
