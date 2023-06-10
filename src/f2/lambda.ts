import NumberFactory from "./NumberFactory";
import UIDFactory from "../lib/UIDFactory";


exports.handler = async (event: any): Promise<any> => {

  const response = {
    statusCode: 200,
    message: "function2 - number " + NumberFactory().toString() + " - text " + UIDFactory()
  };

  return response;
}
