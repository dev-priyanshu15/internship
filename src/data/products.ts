import { Product } from '../types/product';

export const products: Product[] = [
  // Sarees
  {
    id: '1',
    name: 'Banarasi Silk Saree',
    price: 15999,
    category: 'sarees',
    stock: 10,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c',
    description: 'Handwoven Banarasi silk saree with intricate zari work'
  },
  {
    id: '2',
    name: 'Kanjeevaram Silk Saree',
    price: 18999,
    category: 'sarees',
    stock: 8,
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2',
    description: 'Traditional Kanjeevaram silk saree with temple border'
  },
  {
    id: '3',
    name: 'Designer Georgette Saree',
    price: 8999,
    category: 'sarees',
    stock: 15,
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb',
    description: 'Contemporary georgette saree with designer embroidery'
  },

  // Girls Wear
  {
    id: '4',
    name: 'Party Wear Lehenga',
    price: 12999,
    category: 'girls',
    stock: 12,
    image: 'https://images.unsplash.com/photo-1621786030484-4c855eed6974',
    description: 'Designer lehenga with heavy embroidery work'
  },
  {
    id: '5',
    name: 'Anarkali Suit',
    price: 6999,
    category: 'girls',
    stock: 20,
    image: 'https://images.unsplash.com/photo-1622122201714-77da0ca8e5d2',
    description: 'Elegant Anarkali suit with net dupatta'
  },
  {
    id: '6',
    name: 'Kids Party Frock',
    price: 3999,
    category: 'girls',
    stock: 25,
    image: 'https://images.unsplash.com/photo-1619086303291-0ef7699e4b31',
    description: 'Beautiful party wear frock for special occasions'
  },

  // Boys Wear
  {
    id: '7',
    name: 'Boys Wedding Sherwani',
    price: 8999,
    category: 'boys',
    stock: 10,
    image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4',
    description: 'Royal sherwani set for wedding occasions'
  },
  {
    id: '8',
    name: 'Kids Kurta Pajama',
    price: 2999,
    category: 'boys',
    stock: 30,
    image: 'https://images.unsplash.com/photo-1604006852748-903a8f1bb264',
    description: 'Traditional kurta pajama set for festivals'
  },
  {
    id: '9',
    name: 'Boys Party Suit',
    price: 5999,
    category: 'boys',
    stock: 15,
    image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4',
    description: 'Stylish party wear suit for special occasions'
  }
];