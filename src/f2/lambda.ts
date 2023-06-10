
import Dummy from "./Dummy";


exports.handler = async (event:any): Promise<any> => {

  const response = {
    statusCode: 200,
    message:"function2 - number " + Dummy().toString()
  };

  return response;
}
