$(document).ready(function() {
    $.getJSON('js/github-data.json', function(data) {
        $.each(data, function(key, val) {
            var forks_url = 'https://github.com/'
            + val.full_name + '/network';
            $('#github_repos').append(
                '<div class="repo_forks">' 
                + '<a title="Forks" href="' 
                + forks_url + '" target="_blank">'
                + '<i class="fa fa-code-fork"></i> ' 
                + val.forks_count + '</a></div>'
                +'<div class="repo_name"><a href="' 
                + val.html_url + '" target="_blank">' 
                + val.full_name + '</a><div>'
            );
        });
    });
});

            