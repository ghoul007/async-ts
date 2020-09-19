export interface User {
  id: number;
  name: string;
  description: string;
  email: string;
}

export interface Item {
  orderNum: number;
  name: string;
  qty: number;
  price: number;
}

export interface Callback<T> {
  (data: T): void;
}

export interface CallbackError {
  (msg?: string): void;
}
