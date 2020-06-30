import React from "react";
import "./App.css";
import "./withQuery";
import { withQuery } from "./withQuery";
import {
  BrowserRouter,
  Route,
  NavLink,
  Link,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import "./BlogApp.css";

const Menu = () => (
  <div>
    <div>
      <NavLink to="/users" className="menu-item">
        Пользователи
      </NavLink>
      <NavLink to="/posts" className="menu-item">
        Посты
      </NavLink>
    </div>
  </div>
);

const UserList = ({ data, error, isLoading }) => {
  if (isLoading === true) {
    return "Идет загрузка";
  }

  if (error) {
    return "Произошла ошибка";
  }

  if (data) {
    return (
      <ol>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ol>
    );
  }
};

const UserListWithQuery = withRouter(withQuery(UserList));

const PostList = ({ data, error, isLoading }) => {
  if (isLoading) {
    return "загрузка постов";
  }

  if (error) {
    return "Произошла ошибка";
  }

  return (
    <>
      {/* <button onClick={()=>history.push('/users')}>Назад</button> */}
      <ul>
        {data.map((data) => (
          <li key={data.id}>{data.title}</li>
        ))}
      </ul>
    </>
  );
};

const PostsListWithQuery = withRouter(withQuery(PostList));

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/">
          <Redirect to="/posts" />
        </Route>
        <Route exact path="/users">
          <UserListWithQuery url="https://jsonplaceholder.typicode.com/users" />
        </Route>
        <Route path="/posts">
          <PostsListWithQuery url="https://jsonplaceholder.typicode.com/posts" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
