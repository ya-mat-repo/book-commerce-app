import { getProviders } from 'next-auth/react';

export const getLoginProviders = async () => {
  const providers = await getProviders().then(res => {
    console.log(res);
    return res;
  });

  return providers;
};
