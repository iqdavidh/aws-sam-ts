import { Handler } from 'aws-lambda';
import {numberFactory} from "./numberFactory";
import {uidFactory} from "../lib/uidFactory";


export const handler:Handler = async (event: any): Promise<any> => {

  const response = {
    statusCode: 200,
    message: "function2 - number " + numberFactory().toString() + " - text " + uidFactory()
  };

  return response;
}
