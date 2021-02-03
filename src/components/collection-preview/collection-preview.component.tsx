import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss'

interface ItemsType {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

interface CollectionPreviewType {
  title: string;
  routeName: string;
  items: ItemsType[];
}

const CollectionPreview = ({ title, items }: CollectionPreviewType) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
      .filter((item, index) => index < 4)
      .map(({ id, ...item }) => (
        <CollectionItem key={id} {...item}/>
      ))}
    </div>
  </div>
)

export default CollectionPreview;