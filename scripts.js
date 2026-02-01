// Tab navigation functionality
function moveTab(hash) {
    $('#navtabs a[href="#' + hash + '"]').tab("show");
    history.replaceState(null, null, location.href);
}

// Initialize on document ready
$(document).ready(function() {
    let url = location.href;

    // Show the appropriate tab based on URL hash or default to "aboutme"
    moveTab(location.hash ? url.split("#")[1] : "aboutme");

    // Handle tab clicks - update URL hash
    $('a[data-toggle="pill"]').on("click", function() {
        let newUrl;
        const hash = $(this).attr("href");
        if (hash == "#aboutme") {
            newUrl = url.split("#")[0];
        } else {
            newUrl = url.split("#")[0] + hash;
        }
        history.replaceState(null, null, newUrl);
    });

    // Highlight author name in publications
    $(".authors").each(function() {
        $(this).html($(this).html().replace("Jonathan Mace", "<span class='jonathanmace'>Jonathan Mace</span>"));
    });
});