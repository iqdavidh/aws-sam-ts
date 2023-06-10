import {Handler} from 'aws-lambda';

export const handler: Handler = async (event: any): Promise<any> => {

  const response = {
    statusCode: 200,
    message: "function1"
  };

  return response;
}
