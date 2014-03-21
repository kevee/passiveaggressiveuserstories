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
