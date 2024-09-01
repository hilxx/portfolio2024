$(document).ready(function () {
    // sect1
    var lastHoveredIndex = -1;

    $('.pj_btn').hover(
        function() {
            var $thisParent = $(this);
            var index = $thisParent.index();
            
            // Remove 'on' class from all titles and images
            $('.pj_btn').removeClass('on');
            $('.pj_cont').removeClass('on');

            // Add 'on' class to the hovered title and corresponding image
            $thisParent.addClass('on');
            $('.pj_cont').eq(index).addClass('on');

            // Set the last hovered index
            lastHoveredIndex = index;
        },
        function() {
            // Remove 'on' class from all titles and images when mouse leaves
            $('.pj_btn').removeClass('on');
            $('.pj_cont').removeClass('on');

            // Add 'on' class to the last hovered title and corresponding image
            if (lastHoveredIndex !== -1) {
                $('.pj_btn').eq(lastHoveredIndex).addClass('on');
                $('.pj_cont').eq(lastHoveredIndex).addClass('on');
            }
        }
    );
    // sect1 끝
});