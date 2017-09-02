import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Workcountry } from '../../datastatic/workcountry.class';

@Injectable()
export class seoMaquinariasService {
    country: any = {
        code: 'pe',
        name: 'Perú'
    };
    listCountry: any[] = (new Workcountry).listCountry;

    title: string = '';
    metas: any[] = [];

    constructor(private router: Router) {
        this.country = this.serverCountry();
        this.getMetas();
    }

    serverCountry(): any {
        let result: any = {
            code: this.router.url.split('/')[1],
            name: ''
        };
        this.listCountry.forEach(pais => {
            if (pais.code == result.code) {
                result.name = pais.name;
            }
        });
        return result;
    }

    getMetas() {
        this.title = `Encuentre su maquinaria pesada en ${this.country.name} | Getmaq`;
        this.metas = [
            {
                name: 'description',
                content: `Busque su maquinaria pesada en ${this.country.name}, utilizando los filtros especializados por empresa, marca, categoria, tipo o condición.`
            },
            {
                property: 'fb:pages', content: '1441702622591333'
            },
            {
                property: 'og:type', content: 'website'
            },
            {
                property: 'og:title', content: `Maquinarias pesadas en ${this.country.name} | Getmaq`
            },
            {
                property: 'og:url', content: `http://getmaq.com/${this.country.code}`
            },
            {
                property: 'og:image', content: 'https://lh3.googleusercontent.com/-6OhxaFoBDOs/WUgrqUjThNI/AAAAAAAAA1w/g7UgmhIQrloDiEmuPQPvoQyywQp5HWKYwCL0BGAYYCw/h630/2017-06-19.png'
            },
            {
                property: 'og:description', content: `Busque su maquinaria pesada en ${this.country.name}, utilizando los filtros especializados por empresa, marca, categoria, tipo o condición.`
            },
            {
                property: 'og:site_name', content: 'getmaq'
            },
            {
                name: 'twitter:card', content: 'summary'
            },
            {
                name: 'twitter:site', content: '@get_maq'
            },
            {
                name: 'twitter:title', content: `Maquinarias pesadas en ${this.country.name} | getmaq`
            },
            {
                name: 'twitter:image', content: 'https://lh3.googleusercontent.com/-6OhxaFoBDOs/WUgrqUjThNI/AAAAAAAAA1w/g7UgmhIQrloDiEmuPQPvoQyywQp5HWKYwCL0BGAYYCw/h630/2017-06-19.png'
            },
            {
                name: 'twitter:description', content: `Busque su maquinaria pesada en ${this.country.name}, utilizando los filtros especializados por empresa, marca, categoria, tipo o condición.`
            }
        ];
    }

}


