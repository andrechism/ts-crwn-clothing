import { withRouter, RouteComponentProps } from 'react-router-dom';

import './menu-item.styles.scss';

interface MenuItemProps {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string
}

const MenuItem = ({ title, imageUrl, size = '', history, linkUrl, match }: MenuItemProps & RouteComponentProps) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
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

export default withRouter(MenuItem);