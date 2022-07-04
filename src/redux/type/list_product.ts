export type DefaulState = {
  selfLink: string;
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    categories: string[];
    description: string;
    publisher: string;
    publishedDate: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
  searchInfo: {
    textSnippet: string;
  };
};

export interface ProductState {
  product: DefaulState[];
  loading: boolean;
  error: null | string;
}

export enum ProductActionType {
  GET_PRODUCT = "GET_PRODUCT",
  GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS",
  ERROR_ON_REQUEST = "ERROR_ON_REQUEST",
}
