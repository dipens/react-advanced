import React from 'react';

const url = 'https://api.github.com/users/dipens';

const UseEffectFetchData = () => {
  const [users, setUsers] = React.useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const usersJson = await response.json();
    setUsers(usersJson);
  }
  React.useEffect(() => {
    getUsers();
  },[]);
  return (
    <>
      <h3>Github users</h3>
      <ul className="users">
      {
        users.map((user) => {
          const {id,login,avatar_url, html_url} = user;
          return <li key={id}>
            <img src={avatar_url} alt={login}></img>
            <div><h4>{login}</h4></div>
            <a href={html_url} target="_blank" rel="noopener noreferrer" >profile</a>
          </li>
        })
      }
      </ul>
    </>
  );
};

export default UseEffectFetchData;
