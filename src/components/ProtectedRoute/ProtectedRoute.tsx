import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, generatePath } from 'react-router-dom';
import { authStatusSelector } from '../../store/slices/user/user.selectors';
import DefaultRoutes from '../../utils/Routes/Routes';

interface IProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: IProps) {
  const auth = useSelector(authStatusSelector);
  return auth ? children : <Navigate to={generatePath(DefaultRoutes.authorization)} replace />;
}
