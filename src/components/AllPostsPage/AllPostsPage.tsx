import './AllPostsPage.css';
import { IPost } from '../../helpers';
import MobileTab from '../MobileTab/MobileTab';
import TabletCard from '../TabletCard/TabletCard';
import Tabs from '../Tabs/Tabs';

function AllPostsPage({ image, date, title }: IPost) {
  return (
    <section className="blog-wrapper">
      <h1 className="posts-title">Blog</h1>
      <Tabs tabName_1="All" tabName_2="My Favorites" tabName_3="Popular" />
      <div className="posts-list">
        <div className="posts-medium">
          <div className="tablet-posts">
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
          <div className="tablet-posts">
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
          <div className="tablet-posts">
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
      <div className="navigation-bar">
        <div className="prev-page">Prev</div>
        <div className="posts-pages">1 2 3 ... 8</div>
        <div className="next-page">Next</div>
      </div>
    </section>
  );
}

export default AllPostsPage;
