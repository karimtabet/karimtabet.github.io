$(document).ready(function() {
    $.getJSON('js/github-data.json', function(data) {
        $.each(data, function(key, val) {
            $('#github_repos').append(
                '<div class="repo_forks">' 
                + '<a href="' 
                + val.forks_url + '"><i class="fa fa-code-fork"></i> ' 
                + val.forks_count + '</a></div>'
                +'<div class="repo_name"><a href="' 
                + val.html_url + '">' 
                + val.full_name + '</a><div>'
            );
        });
    });
});

            