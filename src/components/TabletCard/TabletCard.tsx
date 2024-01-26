import './TabletCard.css';
import { SlDislike, SlLike, SlOptions } from 'react-icons/sl';
import { CiBookmark } from 'react-icons/ci';
import { IPost } from '../../helpers';

function TabletCard({ image, date, title }: IPost) {
  return (
    <div className="tablet-wrapper">
      <img src={image} alt="#" className="tablet-img" />
      <span className="card-date">{date}</span>
      <p className="card-title">{title}</p>
      <div className="tablet-actions">
        <div className="btn-group group-1">
          <SlLike className="card-btn" />
          <SlDislike className="card-btn" />
        </div>
        <div className="btn-group group-2">
          <CiBookmark className="card-btn" />
          <SlOptions className="card-btn" />
        </div>
      </div>
    </div>
  );
}

export default TabletCard;
