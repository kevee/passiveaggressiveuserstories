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
      'because my boss is an asshole',
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

    doIt : function() {
      var story = ['As a '];
      story.push(window.corpus.profile[Math.floor(Math.random()*window.corpus.profile.length)]);
      story.push(', ');
      story.push(window.corpus.action[Math.floor(Math.random()*window.corpus.action.length)]);
      story.push(' ');
      story.push(window.corpus.purpose[Math.floor(Math.random()*window.corpus.purpose.length)]);
      story.push('.');
      $('#story').html(story.join(''));
    }
  };

  $(document).ready(passiveAgressive.doIt);
  $('#reload').on('click', passiveAgressive.doIt);

})(jQuery);
