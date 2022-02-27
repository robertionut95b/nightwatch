import { UseToastOptions } from '@chakra-ui/react';

export const cfg = {
  API_ITEMS_PAGINATION_SKIP: 1,
  API_ITEMS_PAGINATION_COUNT: 12,
};

export const toastDefaults: UseToastOptions | undefined = {
  duration: 5000,
  position: 'bottom-right',
  containerStyle: {
    fontFamily: '"Barlow", sans-serif',
  },
};
