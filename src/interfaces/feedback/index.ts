import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FeedbackInterface {
  id?: string;
  customer_id?: string;
  content: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface FeedbackGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  content?: string;
}
