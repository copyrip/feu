$(document).ready(function() {
  var data = [
    {
      id: 0,
      text: 'pop'
    },
    {
      id: 1,
      text: 'punk'
    },
    {
      id: 2,
      text: 'post-punk'
    },
    {
      id: 3,
      text: 'groovy'
    },
    {
      id: 4,
      text: 'fun'
    }
  ];


  $(".js-example-basic-multiple").select2({
    data: data,
    tags: true,
    tokenSeparators: [',', ' ']
  });

  const maxArtists = 5; // Maximum number of artist groups allowed
  let artistIndex = 0;

  // Function to add click event to remove buttons
  function addRemoveArtistButtonEventListener(button) {
    $(button).on('click', function() {
      $(this).closest('.artist-group').remove();
      // If there's only one artist group left, disable the remove button
      if ($('.artist-group').length === 1) {
	$('.removeArtist').prop('disabled', true);
      }
    });
  }

  // Initially add event listener to the first (static) remove button
  addRemoveArtistButtonEventListener('.removeArtist');
  $('.removeArtist').prop('disabled', true);

  $('#addArtist').on('click', function() {
    // Check if maximum number of artist groups reached
    if ($('.artist-group').length < maxArtists) {
      artistIndex++;
      const artistGroup = $('.artist-group').first().clone();

      artistGroup.attr('data-artist-index', artistIndex);
      artistGroup.find('input').each(function() {
	const newId = this.id.replace(/\d+$/, '') + artistIndex;
	$(this).attr('id', newId).attr('name', newId).val('');
      });

      artistGroup.find('label').each(function() {
	const newFor = $(this).attr('for').replace(/\d+$/, '') + artistIndex;
	$(this).attr('for', newFor);
      });

      // Add event listener to the new remove button
      artistGroup.find('.removeArtist').each(function() {
	addRemoveArtistButtonEventListener(this);
      });

      $('#artistFields').append(artistGroup);

      // Enable remove button if more than one artist group
      if ($('.artist-group').length > 1) {
	$('.removeArtist').prop('disabled', false);
      }
    }
  });


});

$('.timepicker').timepicker({
  timeFormat: 'HH:mm',
  interval: 30,
  minTime: '00:00',
  maxTime: '23:00',
  defaultTime: '12:00',
  startTime: '11:00',
  dynamic: false,
  dropdown: true,
  scrollbar: true
});


$(function(){
  $("#date").datepicker();
});
