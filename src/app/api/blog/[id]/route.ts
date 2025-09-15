export const handler = () => {};

// Example: Export a GET handler to satisfy RouteHandlerConfig
export async function GET(request: Request, context: any) {
  // Your handler logic here
  return new Response('OK');
}