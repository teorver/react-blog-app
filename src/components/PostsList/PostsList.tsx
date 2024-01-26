import './PostsList.css';
import TabletCard from '../TabletCard/TabletCard';
import DefaultCard from '../DefaultCard/DefaultCard';
import MobileTab from '../MobileTab/MobileTab';
import { IPost } from '../../helpers';

function PostsList({
  image, date, title, text,
}: IPost) {
  return (
    <div className="list-wrapper">
      <div className="main-section">
        <DefaultCard
          text={text}
          date={date}
          title={title}
          image={image}
        />
        <div className="tablet-section">
          <TabletCard
            date={date}
            title={title}
            image={image}
          />
          <TabletCard
            date={date}
            title={title}
            image={image}
          />
        </div>
        <div className="tablet-section">
          <TabletCard
            date={date}
            title={title}
            image={image}
          />
          <TabletCard
            date={date}
            title={title}
            image={image}
          />
        </div>
      </div>
      <div className="mobile-section">
        <MobileTab
          date={date}
          title={title}
          image={image}
        />
        <MobileTab
          date={date}
          title={title}
          image={image}
        />
        <MobileTab
          date={date}
          title={title}
          image={image}
        />
        <MobileTab
          date={date}
          title={title}
          image={image}
        />
        <MobileTab
          date={date}
          title={title}
          image={image}
        />
        <MobileTab
          date={date}
          title={title}
          image={image}
        />
      </div>
    </div>
  );
}

export default PostsList;
