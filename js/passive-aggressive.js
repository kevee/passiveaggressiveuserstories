/**
 * Inspired by http://whatthefuckismytwitterbio.com/
 */
(function(global) {

  global.corpus = {
    profile : [
      'idiot',
      'looser',
      'jerk'
    ],
    action : [
      'I want to have a meaningful interaction with another jerk face',
      'I want to add a meaningless product to my "virtual cart"',
      'I want to waste time tooling around on a website',
      'I guess I want to log into the site'
    ],
    purpose : [
      'because I said so',
      'because my boss is an asshole',
      'so I can get back to everyone who laughed at me in high school',
      'because I am having an existential crisis',
      'so I can forget how sad my life is'
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
