import { Component } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router'
import { ISerie } from '../model/ISerie';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}

  listaSeries: ISerie[] = [
    {
      nomeS: 'Rick and Morty',
      lancamentoS: '02/12/2013 (BR)',
      temporadaS: '6 temporadas',
      classificacaoS: 8,
      cartazS: 'https://media.discordapp.net/attachments/977208953568112680/1108059214863151114/9OAC2sOt38Ni5NNu9tVXLcrAUyh.png',
      generosS: ['Animação', 'Comédia', 'Aventura'],
      paginaS: '/rm',
      favoritoS: false
    },
    {
      nomeS: 'Peaky Blinders',
      lancamentoS: '12/09/2013 (BR)',
      temporadaS: '6 temporadas',
      classificacaoS: 9,
      cartazS: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg',
      generosS: ['Drama', 'Crime'],
      paginaS: '/pb',
      favoritoS: false
    },
    {
      nomeS: "The Boys",
      lancamentoS: '25/07/2019 (BR)',
      temporadaS: '3 temporadas',
      classificacaoS: 8,
      cartazS: 'https://media.discordapp.net/attachments/977208953568112680/1108059232059797556/ut4PhX7OP2l2oJhrIUYWnt9pnQU.png',
      generosS: ['Sci-fi & Fantasy', 'Aventura', 'Ação'],
      paginaS: '/boys',
      favoritoS: false
    },
    {
      nomeS: "Stranger Things",
      lancamentoS: '15/07/2016 (BR)',
      temporadaS: '4 temporadas',
      classificacaoS: 9,
      cartazS: 'https://media.discordapp.net/attachments/977208953568112680/1110596287247679578/oqkld2D0qcnSNRm15rYV2883JE3.png?width=395&height=593',
      generosS: ['Sci-fi & Fantasy', 'Drama', 'Mistério'],
      paginaS: '/boys',
      favoritoS: false
    },
    {
      nomeS: "South Park",
      lancamentoS: '13/08/1997 (BR)',
      temporadaS: '26 temporadas',
      classificacaoS: 8,
      cartazS: 'https://media.discordapp.net/attachments/977208953568112680/1110596316280668240/iiCY2QIGSnmtVkIdjkKAfwDs0KF.png?width=395&height=593',
      generosS: ['Animação', 'Comédia'],
      paginaS: '/homenspequenos',
      favoritoS: false
    }
  ];


  exibirSerie(serie: ISerie){
    const navigationExtras: NavigationExtras = {state:{paramSerie:serie}};
    this.router.navigate(['serie-detalhe'], navigationExtras); //chama o navigate e pega a q vc vai abrir com os dados do filme, por isso navigationExtras (ele ta sendo declarado e define um state parametro para a navegação) 
  }
  async exibirAlertaFavorito(serie: ISerie) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar a série?',
      buttons: [ //é um vetor de botões, tem q ter virgula para separar os itens 
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            serie.favoritoS=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            serie.favoritoS=true;
            this.apresentarToast(serie);
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast(serie:ISerie){
    const toast = await this.toastController.create({
      message: 'Série adicionada aos favoritos...',
      duration: 3000,
      color: 'success',
      buttons: [
        {
          text: 'Desfazer',
          handler: () => {
            serie.favoritoS=false;
          }
        }
      ]
    });
    toast.present();
  }

}
