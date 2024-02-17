const settings = {
  async: true,
  crossDomain: true,
  url: "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps&difficulty=intermediate&offset=20",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "921fc9e533msh7815149acc29d2ap1fc408jsnc71135808874",
    "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
