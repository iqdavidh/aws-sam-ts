
import NumberFactory from "./NumberFactory";
import TextFactory from "../lib/TextFactory";


exports.handler = async (event:any): Promise<any> => {

  const response = {
    statusCode: 200,
    message:"function2 - number " + NumberFactory().toString() + " - text " + TextFactory()
  };

  return response;
}
