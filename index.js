module.exports.firsthandler = async (event) => {
  console.log('zhiyong')
  console.log(event)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "This is a get function!",
      },
      null,
      2
    ),
  };
};

module.exports.secondhandler = async (event) => {
  console.log(event)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "This is a post function!",
      },
      null,
      2
    ),
  };
};
