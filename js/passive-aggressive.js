;(function($, global) {
(function(global) {

  global.corpus = {
    profile : [
      'user',
      'lowly employee',
      'intern'
    ],
    action : [
      'I want to have a meaningful interaction with another jerk face',
      'I want to add a meaningless product to my "virtual cart"',
      'I want to waste time tooling around on a website',
      'I guess I want to log into the site',
      'I want to be distracted by flashing advertisements',
      'I feel like clicking something blue',
      'I guess I\'d like to do something',
      'I want to be wowed by your design skills',
      'I want to change the font to Comic Sans',
      'I really, really want to find Form 801',
      'I want to view more ads about "weird tricks"'
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
      'since I guess I\'m here and stuff',
      'because this is how life is now, and I\'m OK with that',
      'Since I have nothing better to do',
      'because it\'s 4:00 pm and I\'m still in my pajamas'
    ]
  };
})(this);


var passiveAgressive = {

  doIt : function(loadFromHash) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var story = ['As a'];
    var profileNumber = Math.floor(Math.random() * corpus.profile.length);
    var actionNumber = Math.floor(Math.random() * corpus.action.length);
    var purposeNumber = Math.floor(Math.random() * corpus.purpose.length);
    if (loadFromHash && location.hash.length > 0) {
      var numbers = location.hash.replace('#', '').split('-');
      profileNumber = numbers[0];
      actionNumber = numbers[1];
      purposeNumber = numbers[2];
    }
    if (vowels.indexOf(corpus.profile[profileNumber].substr(0, 1)) > -1 &&
        corpus.profile[profileNumber] !== 'user') {
      story.push('n');
    }
    story.push(' ');
    story.push(corpus.profile[profileNumber]);
    story.push(', ');
    story.push(corpus.action[actionNumber]);
    story.push(' ');
    story.push(corpus.purpose[purposeNumber]);
    story.push('.');
    $('#story').html(story.join(''));
    location.hash = profileNumber + '-' + actionNumber + '-' + purposeNumber;
  }
};

$(document).ready(function() {
  passiveAgressive.doIt(true);
});

$('#reload').on('click', function(event) {
  event.preventDefault();
  passiveAgressive.doIt();
});

})(jQuery, window);