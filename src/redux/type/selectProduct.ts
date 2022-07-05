export type DefaulState = {
  selfLink: string;
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
};

export interface SelectProductState {
  selectProduct: DefaulState[];
  loading: boolean;
  error: null | string;
}

export enum SelectProductActionType {
  GET_PRODUCT = "SELECTED_GET_PRODUCT",
  GET_PRODUCT_SUCCESS = "SELECTED_GET_PRODUCT_SUCCESS",
  ERROR_ON_REQUEST = "SELECTED_ERROR_ON_REQUEST",
}
