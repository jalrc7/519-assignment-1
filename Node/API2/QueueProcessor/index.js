module.exports = async function (context, myQueueItem) {
    context.log('JavaScript queue trigger function processed work item', myQueueItem);
    const secret3 = process.env.myStorageConnectionAppSetting;
    context.log('secret3:', secret3);
};