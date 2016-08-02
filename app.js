// app.js

new Vue({


    // We want to target the div with an id of 'tweets'
    el: '#tweets',

  // Here we can register any values or collections that hold data
  // for the application
  data: {
    tweet: { user_name: '', text: '', date: '' },
    tweets: []
  },

  // Anything within the ready function will run when the application loads
  ready: function() {
    // When the application loads, we want to call the method that initializes
    // some data
    var config = {
      apiKey: "AIzaSyAYVtNf1LZjvCRHVGsktSXJi1zTm0a4xHs",
      authDomain: "fir-link-aa249.firebaseapp.com",
      databaseURL: "https://fir-link-aa249.firebaseio.com",
      storageBucket: "fir-link-aa249.appspot.com",
    };
    // Initialize Firebase
    firebase.initializeApp(config)
    this.database = firebase.database()
    this.tweetsRef=this.database.ref('tweets');

    this.fetchtweets();
  },

  // Methods we want to use in our application are registered here
  methods: {

    // We dedicate a method to retrieving and setting some data
    fetchtweets: function() {
      this.tweetsRef.on("value", function(snapshot) {
        var tweets=Array();
        for( key in snapshot.val()) {
          snap=snapshot.val()[key];
          var aTweet= {
            id: snap.id,
            text:snap.text,
            date:snap.created_at,
            user_name:snap.user.screen_name
          };
          //console.log(aTweet);
          tweets.push(aTweet);
        }
        this.$set('tweets', tweets.reverse());
      }, this);
    },

    // Adds an tweet to the existing tweets array
    addtweet: function() {
      if(this.tweet.user_name) {
        this.tweets.push(this.tweet);
        this.tweet = { user_name: '', text: '', date: '' };
      }
    }
  }
});
