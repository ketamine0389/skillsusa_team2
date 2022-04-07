$(document).ready(function() {
    $('#replaceWithNavBar').replaceWith(`<nav id="nav-bar">
    <div class="row">
        <div class="column">
            <a class="button active" href="#">Home</a>
        </div>
        <div class="column">
            <a class="button" href="flavors.html">Flavors</a>
        </div>
        <div class="column">
            <a class="button" href="contact-us.html">Contact Us</a>
        </div>
    </div>
</nav>`);
});