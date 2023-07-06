import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RideRequestInterface {
  id?: string;
  customer_id?: string;
  driver_id?: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user_ride_request_customer_idTouser?: UserInterface;
  user_ride_request_driver_idTouser?: UserInterface;
  _count?: {};
}

export interface RideRequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  driver_id?: string;
  status?: string;
}
