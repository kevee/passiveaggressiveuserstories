/**
 * Inspired by http://whatthefuckismytwitterbio.com/
 */
(function(global) {

  global.corpus = {
    profile : [
      'idiot',
      'looser',
      'jerk',
      'user',
      'lowly employee',
      'mailroom gal'
    ],
    action : [
      'I want to have a meaningful interaction with another jerk face',
      'I want to add a meaningless product to my "virtual cart',
      'I want to waste time tooling around on a website',
      'I guess I want to log into the site',
      'I want to be distracted by flashing advertisements',
      'I feel like clicking something blue',
      'I guess I\'d like to do something',
      'I want to be wowed by your design skills',
      'I want to change the font to Comic Sans'
    ],
    purpose : [
      'because I said so',
      'because my boss',
      'so I can get back to everyone who laughed at me in high school',
      'because I am having an existential crisis',
      'so I can forget how sad my life is',
      'because committee',
      'because Facebook',
      'because someone said SEO',
      'so I can file a greivance against my exploitative boss',
      'because we should have done this 5 years ago',
      'since I guess I\'m here and stuff'
    ]
  };
})(this);

(function($) {

  var passiveAgressive = {

    doIt : function(loadFromHash) {
      var story = ['As a '];
      var profileNumber = Math.floor(Math.random()*window.corpus.profile.length);
      var actionNumber = Math.floor(Math.random()*window.corpus.profile.length);
      var purposeNumber = Math.floor(Math.random()*window.corpus.profile.length);
      if(loadFromHash && window.location.hash.length > 0) {
        var numbers = window.location.hash.replace('#', '').split('-');
        profileNumber = numbers[0];
        actionNumber = numbers[1];
        purposeNumber = numbers[2];
      }
      story.push(window.corpus.profile[profileNumber]);
      story.push(', ');
      story.push(window.corpus.action[actionNumber]);
      story.push(' ');
      story.push(window.corpus.purpose[purposeNumber]);
      story.push('.');
      $('#story').html(story.join(''));
      window.location.hash = profileNumber + '-' + actionNumber + '-' + purposeNumber;
    }
  };

  $(document).ready(function() {
    passiveAgressive.doIt(true);
  });

  $('#reload').on('click', function(event) {
    event.preventDefault();
    passiveAgressive.doIt();
  });

})(jQuery);
