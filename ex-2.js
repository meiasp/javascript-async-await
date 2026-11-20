//Exercise #2
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

let displayJohnProfile = (data) => {
  return console.log(data);
}

let displayError = (error) => {
  return console.log(error);
}

getJohnProfile().then(displayJohnProfile).catch(displayError)