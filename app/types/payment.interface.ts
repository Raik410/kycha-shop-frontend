export interface Amount {
  value: string;
  currency: string;
}

export interface Recipient {
  account_id: string;
  gateway_id: string;
}

export interface PaymentMethod {
  type: string;
  id: string;
  saved: boolean;
}

export interface Confirmation {
  type: string;
  return_url: string;
  confirmation_url: string;
}

export interface IPaymentResponce {
  id: string;
  status: string;
  amount: Amount;
  recipient: Recipient;
  payment_method: PaymentMethod;
  created_at: Date;
  confirmation: Confirmation;
}
