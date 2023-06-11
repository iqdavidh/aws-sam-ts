import { Handler } from 'aws-lambda';
import {numberFactory} from "./numberFactory.js";
import {uidFactory} from "../lib/uidFactory.js";


export const handler:Handler = async (event: any): Promise<any> => {

  const response = {
    statusCode: 200,
    message: "function2 - number " + numberFactory().toString() + " - text " + uidFactory()
  };

  return response;
}
