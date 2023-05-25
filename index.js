import open from 'open'

// 1. set repo to open
const repo = 'fun-katas'

// 2. copy Github column from google sheets into string
let githubs = `
https://github.com/Person1
https://github.com/Person2
`

// 3. run file
// node index.js
doTheThing(repo, githubs)

function doTheThing(repo, githubs) {
    githubs.trim().split('\n').forEach(github => {
        try {
            const user = github.split('.com/')[1]
            const url = `https://github.com/${user}/${repo}`
            open(url)
            console.log(`Opened ${url}`)
        } catch (e) {
            console.log(`Error: ${github}
            ${e}`)
        }
    })
}