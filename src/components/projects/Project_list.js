import devlabs from "./devlabs_banner.png";
import portfolio from "./portfolio.png"
import otv from "./otv.jpg"
import bird_tracking from "./bird_tracking.jpg"
import maze from "./maze.png"
import neuroevo from "./neuroevo.png"
import medium_art from "./medium_art.png"


const Project_list = [
    {
        title: 'Software Start Up Founder: DevLabs',
        description: 'Led a team of 5 SWE to develop Full-Stack applications for over 20 small buisnesses, securing over $5,000 in seed funding by Chesapeake Bay Seed Capital Fund [React, HTML/CSS/JS]',
        image: devlabs,
        link: 'https://devlabsusa.com/'
    },
    {
        title: 'Engineering Completely Autonomous OT Vehicle',
        description: 'With a team of software engineers, securing first in class for our autonomous vehicle on the national stage. [C/C++, Micro-controllers]',
        image: otv,
        link: 'https://github.com/satyashah/Autonomous-On-Terrain-Vehicle'
    },
    {
        title: 'Bird Tracking and Pyschoacoutsics Application',
        description: 'Under the guidance of Dr. Dooling, designed a bird trackings software using Open CV designed to relay information back to researches on position and behavior of species. [Python]',
        image: bird_tracking,
        link: 'https://github.com/satyashah/Bird_Monitoring'
    },
    {
        title: 'Creating News Based Stock Portfolio',
        description: 'Developed an Automated News scraping application using Python, Selenium, Alpaca API to obtain, analyze, and make trading decisions with the data. Outperformed the S&P by 80%.',
        image: medium_art,
        link: 'https://medium.com/@shahsatya25/how-to-automate-news-reading-with-ai-to-build-a-winning-portfolio-8dc4884b2dff'
    },
    {
        title: 'Algorithmic Maze Solver',
        description: 'Designing a graphical user interface for a maze and implementing three different algorithms [DFS, BFS, Dijkstra’s] to find the optimal path from the start point to the goal point. [Java]',
        image: maze,
        link: 'https://github.com/satyashah/Algorithmic-Maze-Solver'
    },
    {
        title: 'NeuroEvolution of Augmenting Topologies for Financial Analysis',
        description: 'Developing a NEAT algorithm to optimize Neural Network architecture for financial predictions and modeling [Python]',
        image: neuroevo,
        link: 'https://github.com/satyashah/Developing-NeuroEvolutionary-NEAT-Prediction-Algorithms'
    },
    {
        title: 'Building Personal Portfolio in React',
        description: 'Designing and Building a complete react website to display personal accomplishments. [React, HTML/CSS/JS]',
        image: portfolio,
        link: 'https://github.com/satyashah/portfolio'
    },
];


export default Project_list;