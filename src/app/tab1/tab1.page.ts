import { Component } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router'
import { IFilme } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Meg: Tubarão Gigante',
      lancamento: '09/08/2018 (BR)',
      duracao: '1h53m',
      classificacao: 6,
      cartaz: 'https://media.discordapp.net/attachments/977208953568112680/1108059281598713956/uvYbo4eF3q6W06kpx5iDwC4jt6N.png',
      generos: ['Ação', 'Ficção Científica', 'Terror'],
      pagina: '/tubarao',
      favorito: false
    },
    {
      nome: 'O Gato das Botas: O Último Desejo',
      lancamento: '25/04/2019 (BR)',
      duracao: '1h42m',
      classificacao: 8,
      cartaz: 'https://media.discordapp.net/attachments/977208953568112680/1108059300619878440/i0tScFVNCcgDzz9AgjYd3LDXGTO.png',
      generos: ['Aventura', 'Família', 'Fantasia'],
      pagina: '/gato',
      favorito: false
    },
    {
      nome: 'Guardiões da Galáxia Vol.2',
      lancamento: '27/04/2017 (BR)',
      duracao: '2h17m',
      classificacao: 7,
      cartaz: 'https://media.discordapp.net/attachments/977208953568112680/1108059327199203468/jGtBLu0JAKf5JxhWgmF68HROzCA.png',
      generos: ['Ação', 'Ficção Científica', 'Aventura'],
      pagina: '/guardioes',
      favorito: false
    },
    {
      nome: 'Avatar: O Caminho da Água',
      lancamento: '15/12/2022 (BR)',
      duracao: '3h12m',
      classificacao: 7,
      cartaz: 'https://media.discordapp.net/attachments/977208953568112680/1108059345041756321/mbYQLLluS651W89jO7MOZcLSCUw.png',
      generos: ['Ficção Científica', 'Aventura', 'Ação'],
      pagina: '/avatar',
      favorito: false
    },
    {
      nome: 'Creed III',
      lancamento: '05/07/2013 (BR)',
      duracao: '1h56m',
      classificacao: 7,
      cartaz: 'https://media.discordapp.net/attachments/977208953568112680/1108059376104788028/wDugyjvDQsuwm9j9hkmK4whCOti.png',
      generos: ['Drama','Ação'],
      pagina: '/creed',
      favorito: false
    }    

  ];

  exibirFilme(filme: IFilme){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'], navigationExtras); //chama o navigate e pega a q vc vai abrir com os dados do filme, por isso navigationExtras (ele ta sendo declarado e define um state parametro para a navegação) 
  }

  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [ //é um vetor de botões, tem q ter virgula para separar os itens 
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            filme.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito=true;
            this.apresentarToast(filme);
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast(filme:IFilme){
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 3000,
      color: 'success',
      buttons: [
        {
          text: 'Desfazer',
          handler: () => {
            filme.favorito=false;
          }
        }
      ]
    });
    toast.present();
  }


}

