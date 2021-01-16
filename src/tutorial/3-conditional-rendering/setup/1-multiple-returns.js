import React from 'react';
const url = 'https://api.github.com/users/dipens';
const MultipleReturns = () => {
  const [loading, setLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [user, setUser] = React.useState('default user');

  React.useEffect(() => {
    fetch(url)
    .then((resp) => resp.json())
    .then((user) => {
      const {login} = user;
      setUser(login);
      setLoading(false);
    })
    .catch(error => {
        setIsError(true);
    });
  }, []);

  if(loading) {
    return (
      <>
      <h2>Loading...</h2>
      </>
    );
  }
  if(isError)
  {
    return (
      <>
      <h2>Error...</h2>
      </>
      );
  }
      return (
      <>
      <h2>{user}</h2>
      </>
      );
};

export default MultipleReturns;
