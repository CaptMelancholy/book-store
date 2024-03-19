import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DefaultRoutes from '../utils/Routes/Routes';
import EAPIs from '../api/api-client';

export default function ActivationPage() {
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const getActivation = async ({ iUid, iToken }: Record<string, string>) => {
    try {
      await axios.post(
        `${EAPIs.AUTH_API}/users/activation/`,
        { uid: iUid, token: iToken }
      );
      return navigate(DefaultRoutes.activation_comp);
    } catch (e) {
      console.error(e);
      return navigate(DefaultRoutes.default);
    }
  };
  useEffect(() => {
    if (uid && token) getActivation({ iUid: uid, iToken: token });
  });
  return <div></div>;
}
