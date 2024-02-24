# Crux Dashboard

This project is an official submission for the Frontend Engineer - Internship Assignment provided by Crux. 

## About the project

This is a customizable dashboard where clients can upload and visualize their data. Currently, all the data is stored in local storage without any backend support. 

## Key Features

- 3 types of widgets viz. Table, Charts and Summary
- 3 Color Themes viz. Light, Primary and Dark
- Zoom panel to view widgets 

## Installation

- Install node v20.11.0

- Clone the repository

  ```
  git clone https://github.com/Vaibhav-22-dm/Crux-Dashboard.git
  ```

- Change directory to frontend
  
  ```
  cd frontend
  ```

- Install node modules

  ```
  npm i
  ```

- Start the app

  ```
  npm start
  ```

- App is live at 

  ```
  http://localhost:3000/Crux-Dashboard
  ```

## Widget Creation

- Click on Add Widget Button

- Click on any input field out of the three available options - Data, Graph, Summary

- For Data, use the following format (json)
  
  ```json
  [
    {
        "Product": "Reusable",
        "Q1-23": "10%",
        "Q2-23": "4%"
    },
    {
        "Product": "Natural",
        "Q1-23": "2%",
        "Q2-23": "11%"
    },
    {
        "Product": "Compost",
        "Q1-23": "7%",
        "Q2-23": "5%"
    },
    {
        "Product": "Reusable",
        "Q1-23": "3%",
        "Q2-23": "4%"
    },
    {
        "Product": "Total",
        "Q1-23": "8%",
        "Q2-23": "12%"
    }
  ]
  ```

- For Graphs (Line), use following format (json)

  ```json
  {
    "Christmax25": [
        {
            "x": "",
            "y": 15
        },
        {
            "x": "Google",
            "y": 11
        },
        {
            "x": "Instagram",
            "y": 5
        },
        {
            "x": "Facebook",
            "y": 9
        },
        {
            "x": "Tiktok",
            "y": 6
        }
    ],
    "BirthdaySpecial25": [
        {
            "x": "",
            "y": 0
        },
        {
            "x": "Google",
            "y": 20
        },
        {
            "x": "Instagram",
            "y": 28
        },
        {
            "x": "Facebook",
            "y": 5
        },
        {
            "x": "Tiktok",
            "y": 0
        }
    ],
    "Newuser30": [
        {
            "x": "",
            "y": 20
        },
        {
            "x": "Google",
            "y": 28
        },
        {
            "x": "Instagram",
            "y": 11
        },
        {
            "x": "Facebook",
            "y": 13
        },
        {
            "x": "Tiktok",
            "y": 26
        }
    ]
  }
  ```

- For Summary, use following format (html)

   ```html
   <p>
    Based on the provided data, the most effective hour of the day to send an email across all stores for all time, with
    the highest engagement after opening, is at 15:00(3 PM), with a total of 5041 emails opened. The next best hours are
    16:00 (4 PM) and 17:00 (5 PM) with <strong>5007</strong> and <strong>4785</strong> emails opened respectively. There
    is a noticeable drop in
  </p>
  <p>
    Based on the provided data, the most effective hour of the day to send an email across all stores for all time, with
    the highest engagement after opening, is at 15:00(3 PM), with a total of 5041 emails opened. The next best hours are
    16:00 (4 PM) and 17:00 (5 PM) with <strong>5007</strong> and <strong>4785</strong> emails opened respectively. There
    is a noticeable drop in
  </p>
  <p>
    Based on the provided data, the most effective hour of the day to send an email across all stores for all time, with
    the highest engagement after opening, is at 15:00(3 PM), with a total of 5041 emails opened. The next best hours are
    16:00 (4 PM) and 17:00 (5 PM) with <strong>5007</strong> and <strong>4785</strong> emails opened respectively. There
    is a noticeable drop in
  </p>
        
  ```

- Choose color from the three buttons provided below the widget

- Click Save

- Click the close button ('X') at the top to close the form

- Widget is displayed at the end of all predefined widgets

- All the data is stored in localstorage

## Limitations

- Only line chart is supported as of now
- No option to customize size of widgets 