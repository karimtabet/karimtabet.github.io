$(document).ready(function() {
    $.getJSON('js/github-data.json', function(data) {
        $.each(data, function(key, val) {
            $('#github_repos').append('<div><a href="' + val.html_url + '">' + val.full_name + '</a><div>')
        });
    });
});