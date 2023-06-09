import React, { useState } from "react"

export function OpenMultipleRepos() {
    const [formData, setFormData] = useState({
        githubs: "",
        repo: "",
        devLayout: false
    })

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
    
        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue
        }));
    };

    const handleClick = () => {
        formData.githubs.trim().split('\n').forEach((github, index) => {
            const user = github.split('/').slice(-1)[0] || github
            let repo = formData.repo.trim()
            if (repo.includes('/')) {
                repo = repo.split('/').slice(-1)[0]
            }
            const url = `https://github.${formData.devLayout ? 'dev' : 'com'}/${user}/${repo}`
            console.log(`Opened ${url}`)
            window.open(url, "_blank", "noopener,noreferrer")
        })
    }

    return (
        <div>
            <textarea
                placeholder="Github urls/names (one per line)"
                name="githubs"
                value={formData.githubs}
                onChange={handleInputChange}
            />
            <br />
            <input
                type="text"
                placeholder="Repo to open"
                name="repo"
                value={formData.repo}
                onChange={handleInputChange}
            />
            <button onClick={handleClick}>
                Open
            </button>
            <br />
            <label>
                <input
                    type="checkbox"
                    name="devLayout"
                    checked={formData.devLayout}
                    onChange={handleInputChange}
                />
                <span>.dev layout?</span>
            </label>
        </div>
    )
}