$(document).ready(function() {
    $.getJSON('js/github-data.json', function(data) {
        $.each(data, function(key, val) {
            var forks_url = 'https://github.com/'
            + val.full_name + '/network';
            $('#github_repos').append(
                //Forks
                '<div class="repo_stats">'
                + val.language
                + ' <a title="Forks" href="' 
                + forks_url + '" target="_blank">'
                + '<i class="fa fa-code-fork"></i>' 
                + val.forks_count + '</a></div>'
                //Full name
                +'<div class="repo_name"><a href="' 
                + val.html_url + '" target="_blank">' 
                + val.full_name.replace('karimtabet/', '') 
                + '</a><div>'
                //Description
                +'<div class="repo_description">'
                + val.description + '<div>'
            );
        });
    });
});

            