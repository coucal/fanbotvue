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
    console.log("Ready");
    this.fetchtweets();
  },

  // Methods we want to use in our application are registered here
  methods: {

    // We dedicate a method to retrieving and setting some data
    fetchtweets: function() {
      var tweets = [
        {
          id: 1,
          user_name: '@mulhouse',
          text: 'Toronto International Film Festival',
          date: '2015-09-10'
        },
        {
          id: 2,
          user_name: '@coucal',
          text: 'The Martian comes to theatres.',
          date: '2015-10-02'
        },
        {
          id: 3,
          user_name: '@JRotttner',
          text: 'Music, film and interactive festival in Austin, TX.',
          date: '2016-03-11'
        }
      ];
      console.log(tweets);
      // $set is a convenience method provided by Vue that is similar to pushing
      // data onto an array
      this.$set('tweets', tweets);
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
