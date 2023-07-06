import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DeliveryRequestInterface {
  id?: string;
  customer_id?: string;
  courier_id?: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user_delivery_request_customer_idTouser?: UserInterface;
  user_delivery_request_courier_idTouser?: UserInterface;
  _count?: {};
}

export interface DeliveryRequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  courier_id?: string;
  status?: string;
}
