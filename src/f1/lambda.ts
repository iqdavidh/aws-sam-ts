

/**
 * A simple example includes a HTTP get method to get one item by id from a DynamoDB table.
 */
export const lambda = async (event:any): Promise<any> => {

  const response = {
    statusCode: 200,
    message:"function1"
  };

  return response;
}
