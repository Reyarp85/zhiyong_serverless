module.exports.firsthandler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Your severless function executed successfully!",
      },
      null,
      2
    ),
  };
};

module.exports.secondhandler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Your severless function with post msg executed successfully!",
      },
      null,
      2
    ),
  };
};
