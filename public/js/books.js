$(function() {
    $('[data-role="sendBtn"]').click(function() {
        let data = {
            name: $("[data-role='bookInput']").val(),
            publishDate: $("[data-role='dateInput']").val(),
            author: $("[data-role='authorInput']").val(),
            isInStock: $("[data-role='inStock']").prop("checked"),
        };
        // $.post(
        //     "/insertBooks", {
        //         data,

        //     },
        //     function(data) {}
        // );
    });

    $('[data-role="showDbBtn"]').click(function() {
        $.ajax({
            url: "/books",
            type: "GET",
            success: function(result) {
                console.log(result);
                document.getElementById("getAllBooks").textContent = JSON.stringify(
                    result,
                    undefined,
                    2
                );
            },
        });
        // $.get('/books', function(books) {
        //     let stringifyBooks = JSON.stringify(books);
        //     $.each(stringifyBooks, (_, book) => {
        //         const div = $(`<div data-role=${card._id}>`);
        //         $.each(book, (_, bookField) => {
        //             div.append(`<span>${bookField}</span></br>`)
        //         })
        //         $('#addBook').append(div)
        //     })
        // })
    });
});