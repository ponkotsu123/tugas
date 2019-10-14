import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private data = [
    {
      category: 'STEAM US',
      expanded: true,
      products: [
        { id: 0, name: 'STEAM 10 USD', price: '12000', imageUrl: '/assets/icon/steam.jpg' },
        { id: 1, name: 'STEAM 50 USD', price: '65000', imageUrl: '/assets/icon/steam.jpg' },
        { id: 2, name: 'STEAM 100 USD', price: '120000', imageUrl: '/assets/icon/steam.jpg' },
        { id: 3, name: 'STEAM 250 USD', price: '275000', imageUrl: '/assets/icon/steam.jpg' }
      ]
    },
    {
      category: 'Megaxus',
      products: [
        { id: 4, name: 'Megaxus 10K', price: '10450', imageUrl: '/assets/icon/megaxus.jpg' },
        { id: 5, name: 'Megaxus 20K', price: '20900', imageUrl: '/assets/icon/megaxus.jpg'  },
        { id: 6, name: 'Megaxus 50K', price: '52250', imageUrl: '/assets/icon/megaxus.jpg'  },
        { id: 7, name: 'Megaxus 100K', price: '104500', imageUrl: '/assets/icon/megaxus.jpg'  }
      ]
    },
    {
      category: 'Gemscool',
      products: [
        { id: 8, name: '1000 Gcash', price: '10000', imageUrl: '/assets/icon/gemscool.jpg'  },
        { id: 9, name: '5000 Gcash', price: '50000', imageUrl: '/assets/icon/gemscool.jpg'  },
        { id: 10, name: '10000 Gcash', price: '100000', imageUrl: '/assets/icon/gemscool.jpg'  },
        { id: 11, name: '30000 Gcash', price: '300000', imageUrl: '/assets/icon/gemscool.jpg'  }
      ]
    }
  ];

  private cart = [];

  constructor() { }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  addProduct(product) {
    this.cart.push(product);
  }
}
