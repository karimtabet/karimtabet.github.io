$(document).ready(function() {
    console.log("YO");
    $.getJSON('json/ng-data.json', function(data) {
            console.log("val");
        $.each(data, function(key, val) {
            console.log(val.movie_link);
            $('#ng_movies').append(
                '<div class="item_stats">'
                //Awards
                + val.movie_award.replace(' ', '-').replace(' ', '-') + ' '
                //Views
                + 'Views:' + val.movie_views
                //Rating
                + ' Rating:' + val.movie_rating + '</div>'
                //Image
                + '<a href=' + val.movie_link + 'target="_blank">'
                + '<img id="ng_image" src='
                + val.movie_img + '></a>'
                //Name
                + '<div class="table_item_h1"><a href="' 
                + val.movie_link + '" target="_blank">' 
                + val.movie_name + '</a><div>'
                //Description
                +'<div class="repo_description">'
                + val.movie_description + '<div>'
            );
        });
    });
});