$("document").ready(function(){
  console.log("I'm here!");

  $.ajax({
    url: "https://api.propublica.org/congress/v1/115/senate/members.json",
    method: 'GET',
    headers: {"X-API-Key": "Mdiw3njKTq2s9KpxWxqw08Ky4bARe3n39Xwqp6f3"},
    success: function(response) {
      console.log(response);
    },
    error: function(response) {
      console.log(response);
    }
  })

  // https://api.propublica.org/congress/v1/states/members/party.json
  // https://api.propublica.org/congress/v1/115/house/members.json
});
