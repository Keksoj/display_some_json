/**
 * This class encompases programming languages AND frameworks
 */
export default class Topic {
    /**
     * Create a new Topic
     * @param {number} id
     * @param {string} name
     * @param {string} color
     * @param {string} secondColor
     * @param {string} logo
     * @param {string} description
     * @param {[string]} tags
     * @param {[number]} languages
     * @param {boolean} isAFrameWork
     */
    constructor(id, name, color, secondColor, logo, description, tags, languages, isAFrameWork) {
        this.id = id
        this.name = name
        this.color = color
        this.secondColor = secondColor
        this.logo = logo
        this.description = description
        this.tags = tags
        this.languages = languages ? languages : []
        this.isAFramework = isAFrameWork
    }

    /**
     * Display into a nice HTML string
     * @returns {string}
     */
    render() {
        if (this.isAFramework) {
            var html = this.renderAsAFramework()
        } else {
            var html = this.renderAsALanguage()
        }
        // console.log(html)

        return html
    }

    renderAsAFramework() {
        var html = `
            <div class="box">
                <div class="box-title">${this.name}</div>
                <div class="box-logo">
                    <img src="./imgs/${this.logo}" />
                </div>
                <div class="description" id="${this.name}" style="display: none;">
                <p>${this.description}</p>
                </div>
                <button class="arrow-button" onclick="toggleDisplay('${this.name}')">
                    <img src="/imgs/button.png" />
                </button>
            </div>`
        return html
    }

    renderAsALanguage() {
        var html = `
            <div class="box">
                <div class="box-title">${this.name}</div>
                <div class="box-logo">
                    <img src="./imgs/${this.logo}" />
                </div>
                <div class="description" id="${this.name}" style="display: none;">
                <p>${this.description}</p>
                </div>
                <button onclick="toggleDisplay('${this.name}')">
                    Voir la description
                </button>
            </div>`
        return html
    }
}
