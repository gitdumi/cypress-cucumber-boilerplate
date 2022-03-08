const report = require("multiple-cucumber-html-reporter");
const fs = require("fs-extra")

let env = process.argv.slice(2)

const mapOs = (os) => {
    if (os.startsWith('win')) {
        return 'windows'
    } else if (os.startsWith('osx') || os.startsWith('darwin')) {
        return 'osx'
    } else if (os.startsWith('linux')) {
        return 'linux'
    }
}

const path = 'cypress/reports/results.json'

fs.readFile(path, (err, data) => {
    if (err) {
        throw err;
    }
    let runInfo = JSON.parse(data);

    try {
        report.generate({
            jsonDir: "cypress/reports/cucumber-json",
            reportPath: "cypress/reports/cucumber-html-report",
            metadata: {
                browser: {
                    name: runInfo.browserName,
                    version: runInfo.browserVersion
                },
                device: 'Cypress',
                platform: {
                    name: mapOs(runInfo.osName)
                }
            },
            customData: {
                title: 'Run info',
                data: [
                    { label: 'Project', value: 'ToDoMVC ' + env.toString().toUpperCase() },
                    { label: 'Execution Start Time', value: new Date(runInfo.startedTestsAt).toLocaleString() },
                    { label: 'Execution End Time', value: new Date(runInfo.endedTestsAt).toLocaleString() }
                ]
            }
        })
    } catch (error) {
        console.log(error)
        console.log('====================================================================================================')
        console.log('Could not generate test report')
        console.log('====================================================================================================')
    }
})