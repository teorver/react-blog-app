import './SelectedPostPage.css';
import { SlDislike, SlLike } from 'react-icons/sl';
import { CiBookmark } from 'react-icons/ci';
import { IPost } from '../../helpers';

function SelectedPostPage({
  id, title, description, image,
}: IPost) {
  return (
    <section className="post-wrapper">
      <div className="post-id">{`Blog | Post ${id}`}</div>
      <div className="selected-post">
        <h1 className="post-title">{title}</h1>
        <img src={image} alt="#" className="post-img" />
        <span className="post-text">{description}</span>
        <div className="post-activities">
          <div className="like-dislike">
            <SlLike className="post-btn" />
            <SlDislike className="post-btn" />
          </div>
          <div className="save-to-favourite">
            <CiBookmark className="bookmark-btn" />
            <span className="save-to-text">Add to favourite</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelectedPostPage;
