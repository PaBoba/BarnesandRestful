import React from 'react';
import { Route } from 'react-router-dom';
import Switch from 'react-bootstrap/Switch';
import { useQuery } from '@apollo/client';
import { GET_ME } from './api/queries'; 

// Import your components


const Main = () => {
  // Use the useQuery hook to fetch user data
  const { loading, error, data } = useQuery(GET_ME);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error.message}</div>;

  return (
    <div>
      {/* Use Switch and Route to define your routes */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile">
          {/* Pass user data to the Profile component */}
          <Profile user={data.me} />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Main;
