
$(document).ready(function () {
    const inputTask = $('#input-task-name');
    $('form').on('submit', function (e) {
        e.preventDefault();
        adicionarItem()
        riscarItem();
    })

    function adicionarItem() {
        let newTask = $(inputTask).val()
        $('ul').append(`<li> ${newTask} <i class="fas fa-check"></i><i class="fas fa-trash"></i> </li>`)
        $(inputTask).val('');
    }

    $('ul').on('click', '.fa-trash', function () {
        $(this).parent('li').fadeOut(200)
    })

    $('ul').on('click', '.fa-check', function () {
        $(this).parent('li').toggleClass('checked')
    })

})