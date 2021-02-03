import './collection-item.styles.scss';

interface ItemsType {
  name: string;
  imageUrl: string;
  price: number;
};

const CollectionItem = ({ name, imageUrl, price }: ItemsType) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
)

export default CollectionItem;