import { getProviders } from 'next-auth/react';

export const getLoginProviders = async () => {
  const providers = await getProviders().then(res => {
    return res;
  });

  return providers;
};
