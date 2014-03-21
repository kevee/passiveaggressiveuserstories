/**
 * Inspired by http://whatthefuckismytwitterbio.com/
 * But really, who the fuck cares?
 */
(function(global) {

  global.corpus = {
    profile : [
      'idiot',
      'looser',
      'jerk'
    ],
    function : [
      'I want to have a meaningful interaction with another jerk face',
      'I want to add a meaningless product to my "virtual cart"'
    ],
    purpose : [
      'because I said so',
      'because my boss is an asshole',
      'so I can get back to everyone who laughed at me in high school'
    ]
  };
})(this);

(function($) {

  var passiveAgressive = {

    doIt : function() {
      var story = ['As a '];
      story.push(window.corpus.profile[Math.floor(Math.random()*window.corpus.profile.length)]);
      story.push(', ');
      story.push(window.corpus.function[Math.floor(Math.random()*window.corpus.function.length)]);
      story.push(' ');
      story.push(window.corpus.purpose[Math.floor(Math.random()*window.corpus.purpose.length)]);
      story.push('.');
      $('#story').html(story.join(''));
    }
  };

  $(document).ready(passiveAgressive.doIt);
  $('#reload').on('click', passiveAgressive.doIt);

})(jQuery);
