$(document).ready(function() {
    $.getJSON('json/github-data.json', function(data) {
        $.each(data, function(key, val) {
            var forks_url = 'https://github.com/'
            + val.full_name + '/network';
            var stargazers_url = 'https://github.com/'
            + val.full_name + '/stargazers';
            $('#github_repos').append(
                '<div class="repo_stats">'
                //Language
                + val.language
                //Stargazers
                + ' <a title="Stargazers" href="'
                + stargazers_url + '" target="_blank">'
                + '<i class="fa fa-star"></i>' 
                + val.stargazers_count + '</a>'
                //Forks
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

            