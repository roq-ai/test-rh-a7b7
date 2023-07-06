import * as yup from 'yup';

export const deliveryRequestValidationSchema = yup.object().shape({
  status: yup.string().required(),
  customer_id: yup.string().nullable(),
  courier_id: yup.string().nullable(),
});
