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
  valueInput: string;
  maxResults: number;
  startIndex: number;
  orderBy: string;
  products: DefaulState[];
  loading: boolean;
  error: null | string;
}

export enum ProductsActionType {
  GET_VALUE_FROM_INPUT = "GET_VALUE_FROM_INPUT",
  GET_PRODUCT = "GET_PRODUCT",
  GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS",
  GET_LOAD_MORE_PRODUCT = "GET_LOAD_MORE_PRODUCT",
  ERROR_ON_REQUEST = "ERROR_ON_REQUEST",
  GET_LOAD_MORE_PRODUCT_SUCCESS = "GET_LOAD_MORE_PRODUCT_SUCCESS",
}
