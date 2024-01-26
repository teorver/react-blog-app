import './DefaultCard.css';
import { SlDislike, SlLike, SlOptions } from 'react-icons/sl';
import { CiBookmark } from 'react-icons/ci';
import { IPost } from '../../helpers';

function DefaultCard({
  image, date, title, text,
}: IPost) {
  return (
    <div className="wrapper">
      <div className="card">
        <div className="card-description">
          <span className="card-date">{date}</span>
          <p className="card-title">{title}</p>
          <span className="card-text">{text}</span>
        </div>
        <img src={image} alt="#" className="card-img" />
      </div>
      <div className="actions-section">
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

export default DefaultCard;
