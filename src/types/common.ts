export interface IMeta {
  limit: number;
  page: number;
  size: number;
}

// export type IGenericResponse<T> = {
//   meta: {
//     page: number;
//     limit: number;
//     total: number;
//   };
//   data: T;
// };

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type ResponseErrorType = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};
