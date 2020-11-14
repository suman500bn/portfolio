
import docapp from '../../assets/projects_images/dockerapp.JPG'
import tweetapp from '../../assets/projects_images/twittersentiment.JPG'
import recommapp from '../../assets/projects_images/recommendproj.JPG'
import databricapp from '../../assets/projects_images/databricksproj.JPG'
//import new_year from '../../assets/projects_images/new_year.jpg'
//import color_classification from '../../assets/projects_images/color_classification.jpg'
//import blinking from '../../assets/projects_images/blinking.JPG'
//import COVID from '../../assets/projects_images/COVID.jpg'
//import Dev_talks from '../../assets/projects_images/Dev_talks.jpg'

const data_projects = [
    /*{
        name: 'COVID 19 tracker',
        image: COVID,
        deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
        github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
        category: ['react.js']
    },

    {
        name: 'Dev Talks',
        image: Dev_talks,
        deployed_url: 'https://dev-talks.herokuapp.com/',
        github_url: 'https://github.com/Dey-Sumit/Dev-talks',
        category: ['node.js', 'mongoDB', 'react.js']
    },*/

    {
        name: 'Twitter Sentiment analysis',
        image: tweetapp,
        deployed_url: 'https://sumit-chat.netlify.app/',
        github_url: 'https://github.com/Dey-Sumit/chat-app-socket.io-react-node',
        category: ['node', 'socket.io', 'react']
    },

    {
        name: 'Docker web application',
        image: docapp,
        deployed_url: 'http://sumaxtweetme.pythonanywhere.com/',
        github_url: 'https://github.com/Dey-Sumit/tweetme',
        category: ['django', 'react']
    },

    {
        name: 'Recommendation System',
        image: recommapp,
        deployed_url: '!#',
        category: ['html_css', 'vanilla']
    },

    {
        name: 'Crime Robbery analysis in Spark Databricks',
        image: databricapp,
        deployed_url: 'http://suprateem.herokuapp.com/',
        category: ['vanilla']
    },

    /*{
        name: 'Bengali New Year',
        image: new_year,
        deployed_url: 'https://dey-sumit.github.io/NewYear/',
        category: ['vanilla']
    },

    {
        name: 'Color Classification using tf.js',
        image: color_classification,
        deployed_url: '!#',
        github_url: 'https://github.com/Dey-Sumit/color-classification',
        category: ['node', 'machine_learning']
    },

    {
        name: 'Blinking bubbles',
        image: blinking,
        deployed_url: 'https://dey-sumit.github.io/Blinking_Bubbles/',
        github_url: 'https://github.com/Dey-Sumit/Blinking_Bubbles',
        category: ['processing']
    }*/
]

export default data_projects;