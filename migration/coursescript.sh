#!/bin/bash

# Define the URL of the API endpoint
URL="https://www.handbook.unsw.edu.au/api/content/render/false/query/+unsw_psubject.implementationYear:2024%20+unsw_psubject.studyLevel:undergraduate%20+unsw_psubject.active:1%20+deleted:false%20+working:true%20+live:true/orderby/unsw_psubject.code%20asc/limit/10000/offset/0"

# Use curl to fetch the data and jq to parse and extract the course code and title
curl -s "$URL" | jq -r '.contentlets[] | [.code, .title] | @csv' > courses.csv

echo "Course code and title have been saved to courses.csv"

