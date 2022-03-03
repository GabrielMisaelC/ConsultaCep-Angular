import { Component } from '@angular/core';
import { CepServiceService } from './cep-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConsultaCep';

  constructor(private cepService: CepServiceService) {}

  consultaCep(valor, form){
      this.cepService.buscar(valor).subscribe((dados) => this.popularForm2(dados, form));
  } 

  consultaCep2(uf, cidade, logradouro, form){
    this.cepService.buscar2(uf, cidade, logradouro).subscribe((dados) => this.popularForm(dados, form))
   console.log(uf, cidade, logradouro);
  }

  popularForm(dados, form){
    form.setValue({
      cep: dados[0].cep,
      logradouro: dados[0].logradouro,
      bairro: dados[0].bairro,
      cidade: dados[0].localidade,
      uf: dados[0].uf
    })
  }
  popularForm2(dados, form){
    form.setValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf
    })
  }
  resetaDadosForm(form){
    form.setValue({
      cep: null,
      logradouro: null,
      bairro: null,
      cidade: null,
      uf: null
    })
  }

}
