import open from 'open'

// 0. want to see dev layout on github?
const devLayout = false

// 1. set repo to open
const repo = 'fun-katas'

/**2. copy Github column from google sheets into string
example:
const githubs = `
https://github.com/Person1
https://github.com/Person2
`
*/

const githubs = `

`

// 3. run this file
githubs.trim().split('\n').forEach(github => {
    try {
        const user = github.split('.com/')[1]
        const url = `https://github.${devLayout ? 'dev' : 'com'}/${user}/${repo}`
        open(url)
        console.log(`Opened ${url}`)
    } catch (e) {
        console.log(`Error: ${github}
            ${e}`)
    }
})