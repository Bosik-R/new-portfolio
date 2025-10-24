export const previousProjectsData = [
  {
    id: 1,
    image: '/images/portfolio.webp',
    title: 'Portfolio',
    subtitle: 'Webpage / 3D Modeling',
    text: `I built this 3D integrated wepsite using Spline and Next.js. I chose Spline for 3D modelling because it's a quick way to create 3d scenes with states and events. 
           I took advantage of server components as much as possible.`,
    tech: ['Next.js', 'Spline', 'Typescript', 'Tailwind', 'Framer Motion'],
  },
  {
    id: 2,
    image: '/images/tamtuweb.webp',
    title: 'Tamtu Multi City Games',
    subtitle: 'Webpage',
    text: 'It was my individual project created by using Next.js(14). The page content is fetched by Axios and GraphQL from DirectusCMS. The subscription form is handled by React Hook Form.',
    link: 'https://tamtu.com.pl/',

    tech: [
      'Next.js',
      'Typescript',
      'Tailwind',
      'React Hook Form',
      'Axios',
      'GraphQL',
      'Directus',
      'Postman',
    ],
  },
  {
    id: 3,
    image: '/images/tamtu.webp',
    title: 'Tamtu Multi City Games',
    subtitle: 'Management application',
    text: 'I joined the team during project development. I was responsible for the part involving creating and managing users and subscriptions.',
    tech: [
      'React.js',
      'Typescript',
      'Tailwind',
      'React Hook Form',
      'Axios',
      'Postman',
    ],
  },
  {
    id: 4,
    image: '/images/skydental.webp',
    title: 'Skydental',
    subtitle: 'Webpage',
    text: 'A beautiful modern webpage which I build independently. It has a nice looking particles effect.',
    link: 'https://skydentalclinic.pl/',
    tech: [
      'Next.js',
      'Typescript',
      'Styled Components',
      'React Query',
      'GraphQL',
      'Directus',
      'Framer Motion',
    ],
  },
  {
    id: 5,
    image: '/images/brainforge.webp',
    title: 'BrainforgeIT',
    subtitle: 'webpage',
    text: 'It was my first webpage that was presented to the general public. I felt a rush of excitement, seeing my creation came alive.',
    link: 'https://brainforgeit.com/',
    tech: [
      'Next.js',
      'Typescript',
      'Styled Components',
      'React Query',
      'GraphQL',
      'Directus',
      'Framer Motion',
    ],
  },
  {
    id: 6,
    image: '/images/furgonetka.webp',
    title: 'Portmonetka',
    subtitle: 'checkout plugin',
    text: `It was my first individual project. I was resposible for crafting a front-end MVP. I knew that this was just the beginning of a remarkable adventure in the world of web development.`,
    link: `https://woocommerce.portmonetka.pl/`,
    tech: ['React', 'Styled Components', 'Framer Motion'],
  },
  {
    id: 7,
    image: '/images/panele-montaz.webp',
    title: 'Installation Manager',
    subtitle: 'Assembly Process Manager',
    text: 'I took over the project during its development. I was responsible for completing the project both on the frontend and backend.',
    tech: ['Vue', 'Vuex', 'Axios', 'Vuetify', 'Node', 'Express', 'Typescript'],
  },
  {
    id: 8,
    image: '/images/panele.webp',
    title: 'Wholesale Managment',
    subtitle: 'Photovoltaic ordering platform',
    text: 'I joined a well shaped project, written in a framework that I bearly knew. I found myself immediately in the new situation. I dealt with fixing bugs and developing new functionalities both on the frontend and backend.',
    tech: ['Vue', 'Vuex', 'Axios', 'Vuetify', 'Node', 'Express'],
  },
];

export const scrapiProjectData = {
  desc: {
    pOne: `The soule of this app is the backend api, that is build with node.js
          and express. Its purpose is to scrape popular car retail sites, find
          the newest entries and send them to the mobile app via socket
          connection and expo notification. I used node-cron to set one minute
          interval for scraping and comparing the data.`,
    pTwo: `The mobile app uses socket connection to keap the data up to date when
          the app is currently open. When the mobile app is in background or
          turned off the expo notifications keap the user informed when a new
          offers are posted.`,
  },
  techUsed: {
    title: 'tech used',
    tech: [
      'expo react native',
      'expo notification',
      'tailwind',
      'socket.io',
      'node.js',
      'express',
      'mongoDB',
      'mongoose',
    ],
  },
};

export const managerProjectData = {
  desc: {
    pOne: `Vehicles stock manager. Add, edit vehicles data and files. View data
        from the web scraper Scrapi database.`,
    listItemOne: `Additional features that will be included:`,
    listItemTwo: `- managing Scrapi`,
    listItemThree: `- integration witch otomoto API`,
  },
  techUsed: {
    title: 'tech used',
    tech: ['next.js', 'shadcn', 'tailwind', 'socket.io', 'mongoDB', 'mongoose'],
  },
};
