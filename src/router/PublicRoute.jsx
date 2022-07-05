import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth';

export const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  
  return ( !logged ) 
    ? children 
    : <Navigate to='/marvel' />;
}

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
