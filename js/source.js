
var passiveAgressive = {

  doIt : function(loadFromHash) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var story = ['As a'];
    var profileNumber = Math.floor(Math.random() * corpus.profile.length);
    var actionNumber = Math.floor(Math.random() * corpus.profile.length);
    var purposeNumber = Math.floor(Math.random() * corpus.profile.length);
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
