const githubBaseUrl = 'https://raw.githubusercontent.com/DevonRD/';

function projectUrl(project) {
    return githubBaseUrl + project + '/master/README.md';
}

function localUrl(file) {
    return githubBaseUrl + 'DevonRD.github.io/master/docs/' + file;
}

var projects = {
    'gpa-calculator': projectUrl('gpa-calculator'),
    'wiki-revamp': localUrl('wiki_revamp.md'),
    'NeuralNetwork': projectUrl('NeuralNetwork'),
    'Motion-Profile-Mapper-2018': projectUrl('Motion-Profile-Mapper-2018')
}

const parseReadmeFiles = () => {
    let http;
    // IE7+, Firefox, Chrome, Opera, Safari
    if (window.XMLHttpRequest) http = new XMLHttpRequest();
    // IE6, IE5
    else http = new ActiveXObject("Microsoft.XMLHTTP");
    http.onreadystatechange = function() {
        if (http.readyState == 4 && http.status == 200) {
            return http.responseText;
        }
    }

    for (const [project, url] of Object.entries(projects)) {
        http.open("GET", url, false);
        http.send();
        projects[project] = marked.parse(http.response);
    }
}

function select(buttonId) {
    $('.column.desc button').removeClass('selected');
    $('#' + buttonId).addClass('selected');
    document.getElementById('project-info').scrollTop = 0;
}

function projectClick(project) {
    document.getElementById('project-info').innerHTML = projects[project];
    select(project);
}

// For mobile selector
function updateSelector() {
    let project = document.getElementById("project-selector").value;
    projectClick(project);
}

parseReadmeFiles();
projectClick('gpa-calculator');
