import { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FiUser } from 'react-icons/fi';
import { IPost } from './helpers';
import './App.css';
import Hamburger from './components/Hamburger/Hamburger';
import SuccessPage from './components/SuccessPage/SuccessPage';
import SignInPage from './components/SignInPage/SignInPage';
import SelectedPostPage from './components/SelectedPostPage/SelectedPostPage';
import AllPostsPage from './components/AllPostsPage/AllPostsPage';

export default function App() {
  const [postInfo, setPostInfo] = useState<IPost | null>(null);

  const getPost = async () => {
    const response = await fetch('https://studapi.teachmeskills.by/blog/posts/126/');
    const postData: IPost = await response.json();

    setPostInfo(postData);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="App">
      <header className="app-header">
        <Hamburger />
        <div className="user-profile-group">
          <CiSearch />
          <FiUser />
        </div>
      </header>
      <h2 className="task-h">Task #1 - Create Successful page and SignIn components</h2>
      <SuccessPage
        title="Success"
        confirmText="Email Confirmed."
        registrationDone="Your registration is now completed!"
        btnText="Go to home"
      />
      <SignInPage title="Sign In" />
      <h2 className="task-h">Task #2 - Create Selected Post and All posts components</h2>
      {postInfo && (
      <SelectedPostPage
        id={postInfo.id}
        title={postInfo.title}
        description={postInfo.description}
        image={postInfo.image}
      />
      )}
      {postInfo && (
      <AllPostsPage
        date={postInfo.date}
        image={postInfo.image}
        title={postInfo.title}
      />
      )}
      <footer className="page-footer">
        <span className="footer-text">(c)2024 Blog</span>
        <span className="footer-text">All rights reserved</span>
      </footer>
    </div>
  );
}
