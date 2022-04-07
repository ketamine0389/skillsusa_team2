$('#btnSubmit').click(function() {
    $('#orderForm').submit(function(e) {
        // const fd = new FormData(e);
        alert('Your order has been placed');
        e.preventDefault();
    });
});