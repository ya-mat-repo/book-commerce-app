import { BookType } from '@/app/types/types';
import { createClient } from 'microcms-js-sdk';

// 環境変数を明示的に取得
const serviceDomain = process.env.NEXT_PUBLIC_SERVICE_DOMAIN;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

// デバッグ用ログ（本番環境では削除）
// console.log('Environment variables check:');
// console.log('NEXT_PUBLIC_SERVICE_DOMAIN:', serviceDomain);
// console.log('NEXT_PUBLIC_API_KEY:', apiKey ? `${apiKey.substring(0, 10)}...` : 'undefined');

if (!serviceDomain) {
  throw new Error('NEXT_PUBLIC_SERVICE_DOMAIN is not defined');
}

if (!apiKey) {
  throw new Error('NEXT_PUBLIC_API_KEY is not defined');
}

export const client = createClient({
  serviceDomain,
  apiKey,
});

export const getAllBooks = async () => {
  const allBooks = await client.getList<BookType>({
    endpoint: 'bookcommerce',
  });

  return allBooks;
};

export const getDetailBook = async (contentId: string) => {
  const detailBook = await client.getListDetail<BookType>({
    endpoint: 'bookcommerce',
    contentId,
  });

  return detailBook;
};
