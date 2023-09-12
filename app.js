    document.addEventListener("DOMContentLoaded", function () {
    const dayOfWeekElement = document.getElementById("dayOfWeek");
    const currentTimeElement = document.getElementById("currentTime");

    // Get the current date and time
    const now = new Date();

    // Display the day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[now.getUTCDay()];
    dayOfWeekElement.textContent = dayOfWeek;

    // Display the current UTC time
    const options = { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" };
    const utcTimeString = now.toLocaleString("en-US", options);
    currentTimeElement.textContent = utcTimeString;
});
