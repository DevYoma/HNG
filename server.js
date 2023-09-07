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
    ]

    const result = {
        slack_name: req.query?.slack_name, 
        current_day: daysOfTheWeek[date.getDay()],
        utc_time: date,
        track: req.query?.track,
        github_file_url: "", 
        github_repo_url: "",
        status_code: 200,
    }

    console.log(result);

    return res.json(result).status(200)
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))