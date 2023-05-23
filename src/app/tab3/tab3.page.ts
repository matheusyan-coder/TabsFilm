import { Component } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router'
import { IAtores } from '../model/IAtores';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  constructor(public router: Router) {}

  listaAtores: IAtores[] = [
    {
      nomeA: 'Michael B. Jordan',
      cartazA: 'https://media.discordapp.net/attachments/977208953568112680/1110577211888640020/kfcn0yyEdN2aJfVaxW0NIoKVF4J.png',
      filmeA: ['Creed III', 'Black Panther'],
      paginaA: '/jordan',
      ocupacaoA: 'Ator'
    }, 
    {
      nomeA: 'Rainn Wilson',
      cartazA: 'https://media.discordapp.net/attachments/977208953568112680/1110577829944508466/rEDRAFYX5n2JKJh9EKILX42klA5.png',
      filmeA: ['Meg: Tubarão Gigante', 'Smurfs: A Aldeia Perdida'],
      paginaA: '/rainn',
      ocupacaoA: 'Dublador'
    },
    {
      nomeA: 'Florence Pugh',
      cartazA: 'https://media.discordapp.net/attachments/977208953568112680/1110577814907932723/dBC4tZU2gYEnzCu764IgEjQMA8M.png',
      filmeA: ["O Gato das Botas", 'Viúva Negra'],
      paginaA: '/florence',
      ocupacaoA: 'Dubladora'
    },
    {
      nomeA: 'Antony Starr',
      cartazA: 'https://media.discordapp.net/attachments/977208953568112680/1110577867861012541/yZx1AkgS8SJjRYd20V0IEfRGtpl.png',
      filmeA: ['The Boys', 'Banshee'],
      paginaA: '/antony',
      ocupacaoA: 'Ator'
    },
    {
      nomeA: 'Spencer Gremmer',
      cartazA: 'https://media.discordapp.net/attachments/977208953568112680/1110577882402668594/1L8Y45RJo2YxUXl6ldIowQay1V7.png',
      filmeA: ['Rick and Morty', 'Greek'],
      paginaA: '/spencer',
      ocupacaoA: 'Dubladora'
    }
    
  ];

  exibirAtor(ator: IAtores){
    const navigationExtras: NavigationExtras = {state:{paramAtor:ator}};
    this.router.navigate(['ator-detalhe'], navigationExtras); //chama o navigate e pega a q vc vai abrir com os dados do filme, por isso navigationExtras (ele ta sendo declarado e define um state parametro para a navegação) 
  }

}