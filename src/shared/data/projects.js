const projects = [
    {
        id: 0,
        date: 'May 2023', 
        title: 'Ursinus College Degree Planner',
        thumb: '/images/DegreePlanner.png', 
        desc: 'Acted as Scrum Master, leading a collaboration with four other computer science majors to build a Javascript web application enabling students to map out their college career and assign planned courses to college core requirements. Applied Agile methodology and SDLC in planning and managing the project (e.g. weekly standup reflections, proposal document, requirements specifications report, design report, user acceptance test (UAT) plan, final system documentation report, a usage demonstration video, and a presentation summarizing these reports).',
        media: {
            video: 'https://www.youtube.com/watch?v=o9z4vJPbrN0',
            site: 'https://wigillette.github.io/GatewayRevamp/'
        },
        skills: ['React.js/Redux.js', 'Node.js', 'SQLite', 'Express.js', 'Bootstrap 5', 'Agile Methodology']
    },
    {
        id: 1,
        date: 'May 2023', 
        title: 'Validity of SAT Score as a Predictor of College Success',
        thumb: '/images/FYGPA.png', 
        desc: 'Conducted statistical analyses (linear and multiple regression analyses, Chi-squared analysis) and applied data analytics to answer three research questions related to this topic. Wrote a 30-page research paper with analyses and findings. Provided paper to professor to support her research on this topic.',
        media: {
            video: '/documents/WG_Statistics_Report.pdf'
        },
        skills: ['Data Cleaning', 'Statistical Analysis', 'RStudio', 'Python']
    },
    {
        id: 2,
        date: 'April 2022', 
        title: 'A Data Driven Approach to Large Scale Audio Version Identification',
        thumb: '/images/CoverSong.png', 
        desc: 'Tackled the music information retrieval problem of automatic audio version identification. Utilized machine learning to transform datasets of songs into “self-similarity matrices” and performed various supervised and unsupervised experiments to determine which cover song identification strategies are the most accurate and scalable. A few features that differentiate cover songs from their original songs are pitch shifts, tempo changes, added/deleted sections, and instrument substitutions. Solving this problem required developing a similarity measure where higher readings indicated that a pair of songs are different versions of each other and lower readings indicated that they are unrelated.',
        media: {
            video: '/documents/CS_Honors_Presentation.pdf',
            site: 'https://github.com/ctralie/acoss'
        },
        skills: ['Python', 'PyTorch', 'Machine Learning', 'Linear Algebra']
    },
    {
        id: 3,
        date: 'April 2021', 
        title: '3D Convex Hull Visualization',
        thumb: '/images/ConvexHull.png', 
        desc: 'Enabled the automated generation of a 2D or 3D convex hull from a set of 2D points. Practical applications include collision avoidance of particles, traffic, etc. Methods: Developed a web-based modeling application to convert the 2D points into 2D or 3D convex hulls by applying a "geometric lift" using a convex function, that is, a function with a monotonically positive second derivative',
        media: {
            video: 'https://www.youtube.com/watch?v=9cv_aizMpIk',
            site: 'https://wg-convex-hull.glitch.me/'
        },
        skills: ['Javascript', 'HTML', 'CSS', 'Algorithms']
    },

];

export default projects;