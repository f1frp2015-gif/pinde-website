const emailRoutingWorker = {
  async email(message) {
    await Promise.all([
      message.forward("doris.li@f1composite.com"),
      message.forward("ori@f1composite.com"),
    ]);
  },
};

export default emailRoutingWorker;
