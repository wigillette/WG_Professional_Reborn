import FitnessCenter from "@mui/icons-material/FitnessCenter";
import Diversity3 from "@mui/icons-material/Diversity3";
import School from "@mui/icons-material/School";
import Computer from "@mui/icons-material/Computer";
import Code from "@mui/icons-material/Code";
import Calculate from "@mui/icons-material/Calculate";
import Grass from "@mui/icons-material/Grass";
import Landscape from "@mui/icons-material/Landscape";
import BarChart from "@mui/icons-material/BarChart";
import SportsScore from '@mui/icons-material/SportsScore';
import WorkspacePremium from '@mui/icons-material/WorkspacePremium';
import Functions from "@mui/icons-material/Functions";
import Key from '@mui/icons-material/Key';
import MenuBook from '@mui/icons-material/MenuBook';
import Dataset from '@mui/icons-material/Dataset';
import MilitaryTech from '@mui/icons-material/MilitaryTech';
import Flag from '@mui/icons-material/Flag';
import History from '@mui/icons-material/History';
import Backpack from '@mui/icons-material/Backpack';
import Gavel from '@mui/icons-material/Gavel';

export const actions = [{id: 0, title:'Mathematics, Computer Science, and Statistics', icon: <School sx={{height:'3rem', width:'3rem'}}/>}, {id: 1, title:'Division III Cross-Country and Track & Field', icon: <FitnessCenter  sx={{height:'3rem', width:'3rem'}}/>}, {id: 2, title:'Phi Kappa Sigma International Fraternity', icon: <Diversity3  sx={{height:'3rem', width:'3rem'}}/>}];

export const actionImages = {
    0: [{img: '/images/FamilyDay.JPG'}, {img: '/images/Datafest3.JPG'},  {img: '/images/UPE2.JPG', cols: 1, rows: 2}, {img: '/images/KME.JPG'}, {img: '/images/TOC.JPG'} ],
    1: [{img: '/images/Twilight1.png', rows: 2, cols: 1}, {img: '/images/XC6.JPG', rows: 2},  {img: '/images/XC3.png', cols: 2, rows: 2}],
    2: [{img: '/images/Little.png', rows: 2}, {img: '/images/Paddle.JPG', cols: 1, rows: 2}, {img: '/images/PhiKaps.png', cols: 2, rows: 2}]
}

export const actionInfo = {
    0: [
        {title: 'Triple Major in Mathematics, Computer Science, and Statistics', 
        desc: 'Initially declared as a mathematics and computer science double major but pivoted towards statistics to pursue my passion for working with data. Consistently maintained a 3.99 cumulative GPA, with perfect 4.0 GPAs in the computer science and statistics majors.',
        icon: <Dataset sx={{height: '2rem', width: '2rem'}}/>},
        {title: '2024 Faculty Prize in Mathematics', 
        desc: 'Awarded by the Ursinus College Faculty of Mathematics, Computer Science, and Statistics to an outstanding mathematics student and is the highest honor a student can receive from the department.',
        icon: <Calculate sx={{height: '2rem', width: '2rem'}}/>},
        {title: '2024 DataFest Philly: Best Data Visualization', 
        desc: 'DataFest is a three-day event in which teams from various institutions compete against one another to develop the best solution for an unfamiliar problem by gathering insights from a large data set using statistical techniques. A panel of three judges associated with the American Statistical Association (ASA) critiqued each team\'s presentation and chose three winners from the thirteen teams.',
        icon: <BarChart sx={{height: '2rem', width: '2rem'}}/>},
        {title: 'Upsilon Pi Epsilon President', 
        desc: 'Upsilon Pi Epsilion is the Computing and Information Disciplines honors society consisting of high-achieving students who have shown academic excellence in the field of computer science. As president, I actively communicate with the faculty advisors to organize events and activities with active and alumni members.',
        icon: <Computer sx={{height: '2rem', width: '2rem'}}/>},
        {title: '2022 Faculty Prize for a Promising Sophomore in Computer Science', 
        desc: 'Awarded by the Ursinus College Faculty of Mathematics, Computer Science, and Statistics to an outstanding sophomore computer science student.',
        icon: <Code sx={{height: '2rem', width: '2rem'}}/>},
        {title: 'Lead Tutor in Mathematics, Computer Science, and Statistics', 
        desc: 'Lead, coach, and train Computer Science, Statistics, and Mathematics tutors, meeting with them regularly and assisting with tutor observations and logistics. Provide input and ideas to enhance and evolve Ursinus\' Institute for Student Success (ISS) tutoring program.',
        icon: <MenuBook sx={{height: '2rem', width: '2rem'}}/>},
        {title: 'Kappa Mu Epsilon Active Member', 
        desc: 'Kappa Mu Epsilon consists of honorable mathematics students "who have maintained standards of scholarship, have professional merit, and have attained academic distinction."',
        icon: <Functions sx={{height: '2rem', width: '2rem'}}/>}
        // {title: 'Cub and Key 2023 Inductee', 
        // desc: ' The Cub and Key Society was founded in 1939 at Ursinus College to recognize the male leaders of the campus who have distinguished themselves through high scholastic standing, participation in extracurricular activities, and service to the College community. Election to the society is limited to second-semester juniors.',
        // icon: <Key sx={{height: '2rem', width: '2rem'}}/>}
    ],
    1: [
        {title: '2023 Cross Country Coaches\' Award', 
        desc: 'Awarded by the Coaching Staff of the Ursinus College Cross Country and Track & Field Program to an individual exemplifying leadership, commitment, and growth over the course of their collegiate athletic career.',
        icon: <Grass sx={{height: '2rem', width: '2rem'}}/>},
        {title: '2023 Cross Country NCAA Division III Metro Region All-Academic Award', 
        desc: 'Awarded by the NCAA Division III Metro Region to individuals who finish in the top 25% of the regional meet with a cumulative GPA of 3.2 or higher.',
        icon: <SportsScore sx={{height: '2rem', width: '2rem'}}/>},
        {title: '2022 Cross Country Most Improved Runner Award', 
        desc: 'Awarded by the Coaching Staff of the Ursinus College Cross Country and Track & Field Program to an individual who has shown the most significant improvement from the start of the season to the end.',
        icon: <Landscape sx={{height: '2rem', width: '2rem'}}/>},
        {title: 'Centennial Conference Student Athlete Academic Honor Roll', 
        desc: 'Received each consecutive semester from Fall 2021 to May 2024. At the end of each semester, the Centennial Conference names the student-athletes of sophomore standing or higher with at least cumulative GPA of 3.4.',
        icon: <WorkspacePremium sx={{height: '2rem', width: '2rem'}}/>}
    ],
    2: [
        {title: '2022 Hezman Award', 
        desc: 'Awarded by the brothers of the graduating class of 2022 to the active brother who has exemplified the seven core values of the fraternity (Trust, Honor, Wisdom, Respect, Integrity, Knowledge, Responsibility).',
        icon: <MilitaryTech sx={{height: '2rem', width: '2rem'}}/>},
        {title: 'Men of Honor Leadership Institute Graduate', 
        desc: 'Completed the Men of Honor Leadership program in both January 2022 and January 2023 to learn how to effectively work in a team, manage conflicts, and enhance leadership skills. Networked with participating active brothers, alumni, and grand chapter members.',
        icon: <Flag sx={{height: '2rem', width: '2rem'}}/>},
        {title: 'Academic Chair', 
        desc: 'Served as academic chair of the fraternity from November 2021 to December 2023. Responsible for ensuring that all members of the Delta Rho chapter are meeting the GPA threshold. Organize, schedule and host six hours of study hall each week to encourage good scholarship. Maintain confidential data records and provide analytics.',
        icon: <Backpack sx={{height: '2rem', width: '2rem'}}/>},
        {title: 'Historian', 
        desc: 'Served as historian of the fraternity from November 2021 to November 2022. Captured history of the fraternity by liaising with alumni. Taught current and new members the fraternity chapter history. Updated the chapter lineage excel spreadsheet.',        
        icon: <History sx={{height: '2rem', width: '2rem'}}/>},
        {title: 'Parliamentarian', 
        desc: 'Served as parliamentarian of the fraternity from November 2021 to November 2022. Ensured that active brothers followed Robert\'s Rules of Order and maintained decorum during chapter meetings.',        
        icon: <Gavel sx={{height: '2rem', width: '2rem'}}/>},
        
    ]

}