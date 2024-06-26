import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    const daysToAdd = parseInt(req.query.daysToAdd || "0", 10);
    const today = new Date();
    const secretValue = process.env.myAppSetting;
    context.log(`Secret = ${secretValue}`);
    const formattedDate = today.toISOString().split('T')[0];
    const queueMessage = "Hello this is from queue";
    context.bindings.outputQueueItem = queueMessage;
    const responseMessage = "add to queue"
        ?  "Hello, " + name + ". This HTTP triggered function executed successfully.Today's date is " +  formattedDate + "."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

};

export default httpTrigger;