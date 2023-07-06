const mapping: Record<string, string> = {
  'delivery-requests': 'delivery_request',
  feedbacks: 'feedback',
  organizations: 'organization',
  'ride-requests': 'ride_request',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
