import './menu-item.styles.scss';

interface MenuItemProps {
  title: string;
  imageUrl: string;
  size?: string;
}

const MenuItem = ({ title, imageUrl, size = ''}: MenuItemProps) => (
  <div className={`${size} menu-item`} >
    <div 
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      className="background-image"
    />
    <div className="content"> 
      <h1 className="title">{title}</h1>
      <span className="subtitle">Shop now</span>
    </div>
  </div>
)

export default MenuItem;