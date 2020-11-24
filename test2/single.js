
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question5",
        "title": "What is your age group?",
        "choices": [
         {
          "value": "item1",
          "text": "< 18 years"
         },
         {
          "value": "item2",
          "text": "18 - 25 years"
         },
         {
          "value": "item3",
          "text": "26 - 50 years"
         },
         {
          "value": "item4",
          "text": "51 - 65 years"
         }
        ],
        "hasOther": true,
        "otherText": "> 65 years"
       },
       {
        "type": "dropdown",
        "name": "question6",
        "title": "Gender",
        "choices": [
         {
          "value": "item1",
          "text": "Male"
         },
         {
          "value": "item2",
          "text": "Female"
         },
         {
          "value": "item3",
          "text": "Prefer not to say"
         }
        ]
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question12",
        "title": "What is your current occupation?",
        "choices": [
         {
          "value": "item1",
          "text": "Student"
         },
         {
          "value": "item2",
          "text": "Working part-time"
         },
         {
          "value": "item3",
          "text": "Working full-time"
         }
        ],
        "hasOther": true,
        "otherText": "Currently unemployed"
       },
       {
        "type": "radiogroup",
        "name": "question7",
        "title": "How meaningful is this work to you?",
        "choices": [
         {
          "value": "item1",
          "text": "Extremely meaningful"
         },
         {
          "value": "item2",
          "text": "Very meaningful"
         },
         {
          "value": "item3",
          "text": "Moderately meaningful"
         },
         {
          "value": "item4",
          "text": "Slightly meaningful"
         }
        ],
        "hasOther": true,
        "otherText": "Not at all"
       }
      ]
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question1",
        "title": "How challenging is your job?",
        "choices": [
         {
          "value": "item1",
          "text": "Extremely challenging"
         },
         {
          "value": "item2",
          "text": "Very challenging"
         },
         {
          "value": "item3",
          "text": "Moderately challenging"
         },
         {
          "value": "item4",
          "text": "Slightly challenging"
         }
        ],
        "hasOther": true,
        "otherText": "Not at all"
       },
       {
        "type": "radiogroup",
        "name": "question2",
        "title": "You are willing to take on new tasks as needed.",
        "choices": [
         {
          "value": "item1",
          "text": "Strongly disagree"
         },
         {
          "value": "item2",
          "text": "Disagree"
         },
         {
          "value": "item3",
          "text": "Neutral"
         },
         {
          "value": "item4",
          "text": "Agree"
         },
         {
          "value": "item5",
          "text": "Strongly agree"
         }
        ]
       }
      ]
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question3",
        "title": "Do you value and believe in company goals?",
        "choices": [
         {
          "value": "item1",
          "text": "Not at all"
         },
         {
          "value": "item2",
          "text": "Slightly"
         },
         {
          "value": "item3",
          "text": "Moderately"
         },
         {
          "value": "item4",
          "text": "Very"
         }
        ],
        "hasOther": true,
        "otherText": "Extremely"
       },
       {
        "type": "radiogroup",
        "name": "question4",
        "title": "I feel valued as a team member.",
        "choices": [
         {
          "value": "item1",
          "text": "Strongly disagree"
         },
         {
          "value": "item2",
          "text": "Disagree"
         },
         {
          "value": "item3",
          "text": "Neutral"
         },
         {
          "value": "item4",
          "text": "Agree"
         },
         {
          "value": "item5",
          "text": "Strongly agree"
         }
        ]
       }
      ]
     },
     {
      "name": "page5",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question8",
        "title": "Do you think that training programs are compulsory for employees only?",
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         },
         {
          "value": "item3",
          "text": "Cannot say"
         }
        ]
       },
       {
        "type": "text",
        "name": "question11",
        "title": "Your achievements:"
       }
      ]
     }
    ]
   };

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document.location = "singlethanks.html";
    });

$("#surveyElement").Survey({ model: survey });