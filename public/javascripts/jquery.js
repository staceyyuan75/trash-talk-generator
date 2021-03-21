$(document).ready(function () {
  $('input[type=radio]:checked').parents('.card').addClass('card-focus')

  $('.card').hover(
    function () {
      $(this).addClass('card-hover')
    },
    function () {
      $(this).removeClass('card-hover')
    }
  )

  $('.card').click(function () {
    $(this).find(':radio').prop('checked', true)

    $('.card').removeClass('card-focus')
    $(this).addClass('card-focus')
  })
})
