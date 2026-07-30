export const PROJECTS = [
  {
    slug: 'beat-the-clock',
    title: 'Beat the Clock ⏰',
    summary: (
      <>
        A game-based alarm clock app designed to tackle oversleeping by forcing users to wake up,
        engage their brain, and solve puzzles/challenges to turn the alarm off.
      </>
    ),
    liveUrl: 'https://beat-the-clock-then-sleep.vercel.app/',
    repoUrl: 'https://github.com/Suresh-1710/beat-the-clock.git',
    extraDesc: (
      <>
        Built as part of a hackathon organized by EdZola Technologies. The project features native
        Android integration for background alarm persistence, custom key event interception to
        block hardware volume buttons, and an auto-update mechanism.
      </>
    ),
    meta: [
      { label: 'Tech Stack', value: 'Android (Java), XML, Vercel' },
      {
        label: 'Key Features',
        value:
          'Un-cheatable alarm (AlarmManager background services), Volume Lock (hardware button block), Custom in-app auto-updater',
      },
    ],
  },
  {
    slug: 'vijaya-tailoring-shop',
    title: 'Vijaya Tailoring Shop',
    summary: (
      <>
        I designed and built a responsive website for{' '}
        <strong>my mother’s tailoring business</strong> to showcase her custom designs online.
        The site includes a gallery of her work, service details, and a contact section.
      </>
    ),
    liveUrl: 'https://vijayatailor.vercel.app/',
    repoUrl: 'https://github.com/Suresh-1710/vijayatailor',
    extraDesc: (
      <>
        This project taught me how to translate real-world requirements into code using a
        mobile-first approach, and helped improve her business visibility.
      </>
    ),
    meta: [
      { label: 'Tech Stack', value: 'HTML, CSS, JavaScript' },
      {
        label: 'Key Features',
        value: 'Responsive design, image gallery, contact form, SEO-friendly',
      },
      {
        label: 'Future Improvements',
        value: 'Online booking system, payment integration',
      },
    ],
  },
  {
    slug: 'voter-pride-badge-maker',
    title: 'Voter Pride Badge Maker',
    summary: (
      <>
        Built and deployed a web app that lets users generate a digital "voter pride" badge from
        an uploaded photo, used by 200+ people during the Tamil Nadu Assembly Elections 2026.
      </>
    ),
    liveUrl: 'https://voter-pride-2026.vercel.app/',
    repoUrl: 'https://github.com/Suresh-1710/voter-pride-badge-maker',
    extraDesc: (
      <>
        Used the HTML5 Canvas API for in-browser image generation and the Web Share API for
        direct sharing to WhatsApp and Instagram. Deployed independently on Vercel.
      </>
    ),
    meta: [
      { label: 'Tech Stack', value: 'HTML5, CSS, JavaScript, Canvas API, Web Share API' },
      {
        label: 'Key Features',
        value: 'Photo upload, in-browser badge generation, direct social sharing',
      },
    ],
  },
  {
    slug: 'cr7-tribute-website',
    title: 'CR7 Tribute Website',
    summary: (
      <>
        Built as a passion project during my Web Development internship at Prodigy InfoTech, this
        is a complete tribute website dedicated to Cristiano Ronaldo, going beyond the standard
        internship template.
      </>
    ),
    liveUrl: 'https://suresh-1710.github.io/cr7-legacy/',
    repoUrl: 'https://github.com/Suresh-1710/cr7-legacy',
    extraDesc: (
      <>
        Features a sleek glass-morphism navigation bar that tracks with the user, smooth CSS
        hover effects, and fully structured sections covering CR7's career timeline, responsive
        stats grids, a fan wall, and a custom JS-powered quiz.
      </>
    ),
    meta: [
      { label: 'Tech Stack', value: 'HTML, CSS, JavaScript' },
      {
        label: 'Key Features',
        value:
          'Glass-morphism nav bar, career timeline, responsive stats grid, fan wall, JS-powered quiz',
      },
    ],
  },
  {
    slug: 'stopwatch-web-app',
    title: 'Stopwatch Web App',
    summary: (
      <>
        Built a browser-based stopwatch that lets users start, pause, and reset a timer with
        precise second and millisecond tracking, using JavaScript's timing functions to keep the
        display accurate and responsive.
      </>
    ),
    liveUrl: 'https://suresh-1710.github.io/stopwatch-web-app/',
    repoUrl: 'https://github.com/Suresh-1710/stopwatch-web-app.git',
    extraDesc: (
      <>
        Focused on clean DOM manipulation and state handling in vanilla JavaScript, without
        relying on any external libraries, to keep the app lightweight and fast to load.
      </>
    ),
    meta: [
      { label: 'Tech Stack', value: 'HTML, CSS, JavaScript' },
      {
        label: 'Key Features',
        value: 'Start, pause, and reset controls, live time display, lightweight vanilla JS',
      },
    ],
  },
  {
    slug: 'tic-tac-toe-web',
    title: 'Tic-Tac-Toe Web',
    summary: (
      <>
        Built a classic two-player Tic-Tac-Toe game in the browser, with a clickable 3x3 grid
        that tracks turns between X and O and automatically detects a win, loss, or draw.
      </>
    ),
    liveUrl: 'https://suresh-1710.github.io/Tic-Tac-Toe-Web/',
    repoUrl: 'https://github.com/Suresh-1710/Tic-Tac-Toe-Web.git',
    extraDesc: (
      <>
        Implemented the win-checking logic and game-state management in vanilla JavaScript, with
        a simple reset option to start a new round instantly.
      </>
    ),
    meta: [
      { label: 'Tech Stack', value: 'HTML, CSS, JavaScript' },
      {
        label: 'Key Features',
        value: 'Two-player gameplay, win/draw detection, instant game reset',
      },
    ],
  },
  {
    slug: 'skyward-weather',
    title: 'Skyward Weather',
    summary: (
      <>
        Built a weather web app that lets users search for a city and instantly view its current
        weather conditions, pulling live data from a weather API and displaying it in a clean,
        easy-to-read interface.
      </>
    ),
    liveUrl: 'https://skyward-weather-owr4.vercel.app/',
    repoUrl: 'https://github.com/Suresh-1710/skyward-weather.git',
    extraDesc: (
      <>
        Handled asynchronous API requests and error states in JavaScript, and deployed the app on
        Vercel for fast, reliable access.
      </>
    ),
    meta: [
      { label: 'Tech Stack', value: 'HTML, CSS, JavaScript, Weather API' },
      {
        label: 'Key Features',
        value: 'City search, live weather data, responsive UI',
      },
    ],
  },
];
