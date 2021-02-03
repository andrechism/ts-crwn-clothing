import { Component } from 'react';
import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

interface ItemsType {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

interface ShopDataType {
  id: number;
  title: string;
  routeName: string;
  items: ItemsType[];
};

interface ShopPageState {
  collections: ShopDataType[]
}

class ShopPage extends Component {
  state: ShopPageState = {
    collections: SHOP_DATA
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {
          collections
          .filter((item, index) => index < 4)
          .map(({ id, ...collection }) => (
            <CollectionPreview key={id} {...collection} />
          ))
        }
      </div>
    )
  }
}

export default ShopPage;