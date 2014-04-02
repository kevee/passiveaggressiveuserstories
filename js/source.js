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
