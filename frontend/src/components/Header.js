import { Route, Routes } from 'react-router-dom';
import LinkForHeader from './LinkForHeader';

export default function Header({ loggedIn, userEmail, onSignOut }) {
  return (
    <header className="header">
      <div className="logo"></div>
      {loggedIn ? (
        <LinkForHeader
          link="/signin"
          text="Выйти"
          userEmail={userEmail}
          linksClass="header__link header__link_type_leave"
          onSignOut={onSignOut}
        />
      ) : (
        <Routes>
          <Route
            path="/signin"
            element={
              <LinkForHeader
                link="/signup"
                text="Регистрация"
                linksClass="header__link"
              />
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <LinkForHeader
                link={'/signin'}
                text="Войти"
                linksClass="header__link"
              />
            }
          ></Route>
        </Routes>
      )}
    </header>
  );
}
