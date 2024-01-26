import './MobileTab.css';
import { SlDislike, SlLike, SlOptions } from 'react-icons/sl';
import { CiBookmark } from 'react-icons/ci';
import { IPost } from '../../helpers';

function MobileTab({ image, date, title }: IPost) {
  return (
    <div className="mobile-wrapper">
      <div className="mobile-tab">
        <div className="tab-text">
          <span className="card-date">{date}</span>
          <p className="card-title">{title}</p>
        </div>
        <img src={image} alt="#" className="mobile-img" />
      </div>
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

export default MobileTab;
