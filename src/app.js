import Topic from './Topic.js'

var content = document.getElementById('content')

/**
 * This fetches the data, calls the main rendering function on it and feeds the DOM
 */
fetch('./src/data.json')
    .then((res) => res.json())
    .then((data) => {
        console.log('data:', data)
        content.innerHTML = beautifyData(data)
    })
    .catch((err) => {
        console.log('fetch problem: ' + err.message)
    })

/**
 * this main format-into-html function is merely a call to the others
 * @param {Object} data 
 * @returns {string} beautifully html-formatted content
 */
const beautifyData = (data) => {
    var html = ''
    html += '<h1>Les Technologies du web</h1>'
    html += languagesIntoHtml(data)
    html += frameworksIntoHtml(data)
    return html
}

/**
 * Creates the language row
 * @param {Object} data 
 * @returns {string} an html-formatted row of language boxes
 */
const languagesIntoHtml = (data) => {
    var languages = []
    for (var language of data.languages) {
        // console.log(language);
        languages.push(
            new Topic(
                language.id,
                language.name,
                language.color,
                language.secondColor,
                language.logo,
                language.description,
                language.tags,
                false
            )
        )
    }

    var html = '<h2>1. Les Langages du web</h2>'
    html += '<div class="language-row">'
    for (var language of languages) {
        // console.log(language.render())
        html += language.render()
    }
    html += '</div>'
    return html
}

/**
 * Creates the framework rows
 * @param {Object} data 
 * @returns {string} the html-formatted rows of framework boxes
 */
const frameworksIntoHtml = (data) => {
    var frameworks = []
    for (var framework of data.frameworks) {
        frameworks.push(
            new Topic(
                framework.id,
                framework.name,
                framework.color,
                framework.secondColor,
                framework.logo,
                framework.description,
                framework.tags,
                framework.languages,
                true
            )
        )
    }

    var frontEndFrameworksRow = '<div class="framework-row">'
    var backEndFrameworksRow = '<div class="framework-row">'
    var crossPlatformFrameworksRow = '<div class="framework-row">'

    for (var framework of frameworks) {
        switch (framework.tags[0]) {
            case 'back':
                backEndFrameworksRow += framework.render()
                break
            case 'front':
                frontEndFrameworksRow += framework.render()
                break
            case 'crossplateform':
                crossPlatformFrameworksRow += framework.render()
                break
            default:
                console.log('issues parsing this framework')
        }
    }
    frontEndFrameworksRow += '</div>'
    backEndFrameworksRow += '</div>'
    crossPlatformFrameworksRow += '</div>'

    var html = ''
    html += '<h2>2. Les frameworks front</h2>'
    html += frontEndFrameworksRow
    html += '<h2>3. Les frameworks back-end</h2>'
    html += backEndFrameworksRow
    html += '<h2>4. Les frameworks cross-platform</h2>'
    html += crossPlatformFrameworksRow
    return html
}

window.toggleDisplay = (id) => {
    console.log(id)
    var x = document.getElementById(id)
    if (x.style.display === 'none') {
        x.style.display = 'block'
    } else {
        x.style.display = 'none'
    }
}
