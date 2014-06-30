$(document).ready(function() {
    $.getJSON('json/ng-movie-data.json', function(data) {
        $.each(data, function(key, val) {
            $('#ng_movies').append(
                '<div class="item_stats">'
                //Awards
                + val.award.replace(' ', '-').replace(' ', '-') + ' '
                //Views
                + 'Views:' + val.views
                //Rating
                + ' Rating:' + val.rating + '</div>'
                //Image
                + '<a href=' + val.link + 'target="_blank">'
                + '<img id="ng_image" src='
                + val.img + '></a>'
                //Name
                + '<div class="table_item_h1"><a href="' 
                + val.link + '" target="_blank">' 
                + val.name + '</a><div>'
                //Description
                +'<div class="repo_description">'
                + val.description + '<div>'
            );
        });
    });
    $.getJSON('json/ng-games-data.json', function(data) {
        $.each(data, function(key, val) {
            $('#ng_games').append(
                '<div id="ng_item">'
                + '<a href=' + val.link + 'target="_blank">'
                + '<img id="ng_image" src='
                + val.img + '></a>'
                //Awards
                + val.award.replace(' ', '-').replace(' ', '-') + ' '
                //Views
                + 'Views:' + val.views
                //Rating
                + ' Rating:' + val.rating + '</div>'
                //Image
                + '<a href=' + val.link + 'target="_blank">'
                + '<img id="ng_image" src='
                + val.img + '></a>'
                //Name
                + '<div id="ng_item"><a href="' 
                + val.link + '" target="_blank">' 
                + val.name + '</a><div>'
                //Description
                +'<div class="repo_description">'
                + val.description + '<div>'
            );
        });
    });
});