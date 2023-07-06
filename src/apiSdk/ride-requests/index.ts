import axios from 'axios';
import queryString from 'query-string';
import { RideRequestInterface, RideRequestGetQueryInterface } from 'interfaces/ride-request';
import { GetQueryInterface } from '../../interfaces';

export const getRideRequests = async (query?: RideRequestGetQueryInterface) => {
  const response = await axios.get(`/api/ride-requests${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createRideRequest = async (rideRequest: RideRequestInterface) => {
  const response = await axios.post('/api/ride-requests', rideRequest);
  return response.data;
};

export const updateRideRequestById = async (id: string, rideRequest: RideRequestInterface) => {
  const response = await axios.put(`/api/ride-requests/${id}`, rideRequest);
  return response.data;
};

export const getRideRequestById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/ride-requests/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteRideRequestById = async (id: string) => {
  const response = await axios.delete(`/api/ride-requests/${id}`);
  return response.data;
};
