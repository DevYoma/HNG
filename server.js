const express = require('express');
const app = express();
PORT = process.env.PORT || 3500;

app.get('/api', (req, res) => {
    const date = new Date()

    const daysOfTheWeek = [
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"
    ];

    const getCurrentUTCTime = function () {
        const now = new Date();
        
        const year = now.getUTCFullYear();
        const month = String(now.getUTCMonth() + 1).padStart(2, '0');
        const day = String(now.getUTCDate()).padStart(2, '0');
        const hours = String(now.getUTCHours()).padStart(2, '0');
        const minutes = String(now.getUTCMinutes()).padStart(2, '0');
        const seconds = String(now.getUTCSeconds()).padStart(2, '0');
        
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
    };

    const result = {
        slack_name: req.query?.slack_name, 
        current_day: daysOfTheWeek[date.getDay()],
        utc_time: getCurrentUTCTime(),
        track: req.query?.track,
        github_file_url: "https://github.com/DevYoma/HNG/blob/main/server.js", 
        github_repo_url: "https://github.com/DevYoma/HNG",
        status_code: 200,
    }

    console.log(result);

    return res.json(result).status(200)
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))