import * as yup from 'yup';

export const rideRequestValidationSchema = yup.object().shape({
  status: yup.string().required(),
  customer_id: yup.string().nullable(),
  driver_id: yup.string().nullable(),
});
