function detectGem(self) {
    console.log(self + '-display');
    $('#content, #gem-1-display, #gem-2-display, #gem-3-display, #gem-4-display, #gem-5-display, #gem-6-display, #gem-7-display, #gem-8-display, #gem-9-display, #gem-10-display, #gem-11-display, #gem-12-display').fadeOut(0, function()
        {
            $('#' + self + '-display').fadeIn(0);
            $('#content').fadeIn('slow');
    });
}
