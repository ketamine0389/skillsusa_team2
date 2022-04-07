const returnFlavors = function() {
    $.getJSON('./resources/other/flavors.json', function(data) {
        const items = [];
        $.each(data["standard"], function(key, val) {
            items.push("<div data-name='" + key + "'>" + val + "</div>");
        });

        $("<ul/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo("body");

    });
}

// $.getJSON( "ajax/test.json", function( data ) {
//     var items = [];
//     $.each( data, function( key, val ) {
//       items.push( "<li id='" + key + "'>" + val + "</li>" );
//     });

//     $( "<ul/>", {
//       "class": "my-new-list",
//       html: items.join( "" )
//     }).appendTo( "body" );
//   });