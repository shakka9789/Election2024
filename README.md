# 2024 US Election Counter Project

The **2024 US Election Counter** is a live election results tracking application built to display real-time results for the 2024 United States Presidential Election. The application fetches election data from an API and updates the results every 10 seconds, showing the current vote counts and percentages for the two main political parties: Democrats and Republicans. 

## Project Overview

This project serves as an interactive, live display of election results that can be embedded into websites or used as a standalone tool. It allows users to track the progress of the 2024 Presidential Election in real-time, with the results automatically updating without the need for page refreshes. The page uses visual elements such as counters and animations to make the results easy to read and engaging for viewers.

## Key Features

- **Live Updates**: The election results are updated every 10 seconds, ensuring that users always see the most current data.
- **Party Breakdown**: The app displays results for both the Democratic and Republican parties, showing vote counts, percentages, and the total number of votes.
- **Interactive Counters**: The vote counts for each party are presented with animations to make the update more dynamic and visually appealing.
- **Mobile-Friendly**: The app is responsive and works well on all screen sizes, from desktops to mobile devices.
- **Error Handling**: If there is an issue with fetching the election data, the app will display an error message, ensuring that users are informed about any issues with the live feed.

## How It Works

1. **Fetching Data**: The application makes an API request to CNN’s election results endpoint. This request fetches the latest data about the vote counts, percentages, and total votes for the two main candidates (Democrats and Republicans).
   
2. **Displaying Data**: Once the data is fetched, the application dynamically renders the results to the webpage. It displays the current vote counts and percentage shares for each party.
   
3. **Automatic Updates**: The data is updated automatically every 10 seconds to keep the results current. This is done using JavaScript’s `setInterval` function, which triggers the data fetch process periodically.

4. **Error Handling**: If the API request fails, the app displays an error message to inform the user of the issue.

---

Feel free to explore the code or integrate the live counter into your website!
