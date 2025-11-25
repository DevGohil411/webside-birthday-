import Landing from './components/Landing.jsx';
import SectionHeading from './components/SectionHeading.jsx';
import MemoriesGallery from './components/MemoriesGallery.jsx';
import ReasonsSection from './components/ReasonsSection.jsx';
import LetterSection from './components/LetterSection.jsx';
import SectionWrapper from './components/SectionWrapper.jsx';
import ShootingStar from './components/ShootingStar.jsx';
import NavBar from './components/NavBar.jsx';
import TimelineSection from './components/TimelineSection.jsx';
import LoveQuiz from './components/LoveQuiz.jsx';
import VirtualHug from './components/VirtualHug.jsx';
import PlaylistSection from './components/PlaylistSection.jsx';
import OpenWhenLetters from './components/OpenWhenLetters.jsx';

const memoryEntries = [
  {
    file: 'memory-03.jpg',
    title: 'Marine Drive spark',
    description:
      'You spilled half your filter coffee laughing at my terrible opener, and the city sunrise applauded.',
    location: 'Marine Drive · July 2018',
    year: '2018',
  },
  {
    file: 'memory-07.png',
    title: 'Bedroom jam session',
    description:
      'You harmonised to my chaotic guitar riffs, then we high-fived the mic when we finally nailed it.',
    location: 'Bandra flat · Oct 2019',
    year: '2019',
  },
  {
    file: 'memory-12.png',
    title: 'Monsoon beach dare',
    description:
      'You dragged me into the tide in full jeans, and we slow-danced with thunder cheering us on.',
    location: 'Candolim · Aug 2020',
    year: '2020',
  },
  {
    file: 'memory-18.jpeg',
    title: 'Midnight rummy heist',
    description:
      'You reverse-swept the card table at 2 a.m., did the victory shimmy, and stole the last jalebi.',
    location: "Friends' flat · Jan 2021",
    year: '2021',
  },
  {
    file: 'memory-25.jpeg',
    title: 'Firefly rooftop hush',
    description:
      'You matched each flicker to a wish and whispered, "Keep this night in your pocket."',
    location: 'Nagpur terrace · Jun 2022',
    year: '2022',
  },
  {
    file: 'memory-32.jpeg',
    title: 'Pawna hammock siesta',
    description:
      'We swayed with cicadas, swapped playlists, and decided naps count as dates.',
    location: 'Pawna Lake · Mar 2023',
    year: '2023',
  },
  {
    file: 'memory-37.jpeg',
    title: 'Boat ride polaroids',
    description:
      'You balanced on the edge to get the perfect shot, hair wild, grin wilder, film roll priceless.',
    location: 'Alleppey backwaters · Feb 2024',
    year: '2024',
  },
];

const memories = memoryEntries.map((memory) => ({
  ...memory,
  image: `/images/${memory.file}`,
}));

const reasons = [
  {
    icon: 'heart',
    title: 'You read every micro-expression',
    description:
      'Before I speak, you already know if I need chai, a hug, or both—and you always deliver.',
  },
  {
    icon: 'smile',
    title: 'Your laugh derails bad days',
    description:
      'The Sara cackle that shows up on 1.5× speed voice notes still makes strangers grin.',
  },
  {
    icon: 'music',
    title: 'Playlists with plot twists',
    description:
      'Only you can move from AR Rahman to Phoebe Bridgers and make it sound like one sentence.',
  },
  {
    icon: 'compass',
    title: 'Map-free navigator',
    description:
      'You trust gut feelings over Google Maps and somehow the shortcuts always include better snacks.',
  },
  {
    icon: 'heart',
    title: 'Champion of tiny celebrations',
    description:
      'You light candles for finished spreadsheets, water plants on promotion, and clap for sunsets.',
  },
  {
    icon: 'smile',
    title: 'Sticker-text queen',
    description:
      'Your meme timing is undefeated—especially the dancing avocado whenever I say “I’m stressed.”',
  },
  {
    icon: 'music',
    title: 'Kitchen DJ',
    description:
      'You DJ breakfast like it’s a festival, brandishing the spatula mic during every chorus.',
  },
  {
    icon: 'compass',
    title: 'Adventure instigator',
    description:
      'That time you convinced me to chase fireflies in pajamas proves spontaneity is your superpower.',
  },
  {
    icon: 'heart',
    title: 'Softest hype-woman',
    description:
      'You scribble pep talks on napkins, send calendar invites for rest days, and mean every word.',
  },
  {
    icon: 'smile',
    title: 'Secret handshake inventor',
    description:
      'We have three versions now, but you still insist the double-snap at the end is non-negotiable.',
  },
  {
    icon: 'music',
    title: 'Voice-note poet',
    description:
      'Your morning rambles are part audiobook, part stand-up special, fully the soundtrack of my commute.',
  },
  {
    icon: 'compass',
    title: 'Fearless truth-teller',
    description:
      'You call me out with love, nudge me back to myself, and remind me what matters when I forget.',
  },
  {
    icon: 'heart',
    title: 'Animal whisperer',
    description:
      'Dogs, cats, crows—everyone trusts you. I’m still jealous of the street pup who got your last biscuit.',
  },
  {
    icon: 'smile',
    title: 'Board-game menace',
    description:
      'You trash-talk like an ESPN commentator yet still kiss my forehead after annihilating me.',
  },
  {
    icon: 'music',
    title: 'Rain-dance partner',
    description:
      'Every July shower becomes a music video when you yank me outside without umbrellas.',
  },
  {
    icon: 'compass',
    title: 'Keeper of our lore',
    description:
      'You remember the date of every inside joke and can quote my old diary entries better than I can.',
  },
];

const letterParagraphs = [
  'Sara, I can still replay 5 July like a favourite scene—the hallway buzz, your mustard kurta, the way time hiccupped when you looked up. Eleven days later on 16 July we finally sat across from each other, knocking over sugar sachets and mapping out imaginary road trips like we were already mid-journey.',
  'Every 23 June since has been our checkpoint. We celebrate with polaroids, too-sweet cake, and the same whispered promise: keep choosing wonder. You keep it daily—whether we are slow-sipping filter coffee on the balcony, raiding bookstores, or racing the rain to Marine Drive.',
  'I love the way you know every lyric before the chorus lands, how you stash emergency orange candy in every tote, how you hum when you read, and how you still text me cloud photos like it’s breaking news. You champion my wild ideas, edit my drafts, and somehow make spreadsheets and sunsets equally sacred.',
  'As we count down to 27 November 2025, I am grateful for every hammock nap, firefly rooftop, and sleepy train we have shared—and for all the chapters ahead. I am madly proud of you, endlessly inspired by you, and forever in your corner.',
];

const timelineEvents = [
  {
    title: 'First sight',
    date: '5 July',
    description: 'We locked eyes across that crowded hallway and the noise softened.',
  },
  {
    title: 'First meetup',
    date: '16 July',
    description: 'Nervous jokes, mismatched coffees, and a four-hour walk that felt like ten minutes.',
  },
  {
    title: 'Anniversary',
    date: '23 June',
    description: 'Every year we pause, replay the highlights, and promise fresh adventures.',
  },
];

const quizQuestions = [
  {
    prompt: 'Where did we first get hopelessly lost together?',
    options: [
      { label: 'Colaba Causeway', value: 'colaba', detail: 'Street maze & sugar rush' },
      { label: 'Lavasa hills', value: 'lavasa', detail: 'Monsoon fog + zero signal' },
    ],
    answer: 'lavasa',
  },
  {
    prompt: 'What song always pulls you to the dance floor?',
    options: [
      { label: '90s Bollywood mashup', value: '90s' },
      { label: 'Indie acoustic cover', value: 'indie' },
    ],
    answer: '90s',
  },
  {
    prompt: 'Which midnight snack is our shared guilty pleasure?',
    options: [
      { label: 'Peri-peri fries', value: 'fries' },
      { label: 'Chocolate cereal', value: 'cereal' },
    ],
    answer: 'fries',
  },
  {
    prompt: 'What travel ritual do we never skip?',
    options: [
      { label: 'Making voice-note recaps', value: 'voice' },
      { label: 'Buying matching magnets', value: 'magnets' },
    ],
    answer: 'voice',
  },
  {
    prompt: 'Our shared superpower is…',
    options: [
      { label: 'Finding the best chai stall', value: 'chai' },
      { label: 'Documenting sunsets', value: 'sunset' },
    ],
    answer: 'chai',
  },
];

const playlistTracks = [
  {
    title: 'Sunday Slow Dance',
    artist: 'Parcels',
    mood: 'Soft glow',
    length: '3:48',
    initials: 'SS',
    colors: ['#f472b6', '#c084fc'],
    url: '',
  },
  {
    title: 'Neon Rooftop',
    artist: 'Hive Mind',
    mood: 'City lights',
    length: '4:12',
    initials: 'NR',
    colors: ['#38bdf8', '#818cf8'],
    url: '',
  },
  {
    title: 'Golden Hour Commute',
    artist: 'Driveway',
    mood: 'Sunset drive',
    length: '3:22',
    initials: 'GH',
    colors: ['#fcd34d', '#f97316'],
    url: '',
  },
  {
    title: 'Kitchen Echo',
    artist: 'Homebody',
    mood: 'Home vibes',
    length: '2:58',
    initials: 'KE',
    colors: ['#34d399', '#22d3ee'],
    url: '',
  },
];

const letters = [
  {
    icon: 'happy',
    title: "you're happy",
    message:
      'Bottle that joy. Do a tiny victory dance, text me the best line, and remember I am applauding loudly.',
  },
  {
    icon: 'miss',
    title: 'you miss me',
    message:
      'Press play on our playlist, wear my hoodie, and narrate your day like I am beside you.',
  },
  {
    icon: 'laugh',
    title: 'you need a laugh',
    message:
      'Cue the blooper reel: remember when I tripped over confetti? Because I do. Every. Single. Day.',
  },
  {
    icon: 'sad',
    title: "you're sad",
    message:
      'Lean into the softness, cry if you need, then let me be the weighted blanket through a call.',
  },
];

const App = () => (
  <div className="relative min-h-screen bg-slate-950 text-white">
    <ShootingStar />
    <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16">
      <SectionWrapper id="top">
        <NavBar />
      </SectionWrapper>

      <SectionWrapper id="landing">
        <Landing />
      </SectionWrapper>

      <SectionWrapper id="timeline">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Our Timeline"
            title="Moments that rewired our orbit"
            description="A quick scroll through the milestones that made us us."
          />
          <TimelineSection events={timelineEvents} />
        </div>
      </SectionWrapper>

      <SectionWrapper id="memories">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Memories"
            title="A few favorite polaroids in words"
            description="Drop your own photos in public/images and update the list anytime nostalgia calls."
          />
          <MemoriesGallery memories={memories} />
        </div>
      </SectionWrapper>

      <SectionWrapper id="reasons">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Reasons"
            title="Why you are everyone’s favorite plot twist"
            description="A very incomplete list of the reasons we adore you."
          />
          <ReasonsSection reasons={reasons} />
        </div>
      </SectionWrapper>

      <SectionWrapper id="quiz">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Love Quiz"
            title="How well do we know what makes us spark?"
            description="Five quick questions to check our couple superpowers."
          />
          <LoveQuiz questions={quizQuestions} />
        </div>
      </SectionWrapper>

      <SectionWrapper id="hug">
        <VirtualHug />
      </SectionWrapper>

      <SectionWrapper id="playlist">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Playlist"
            title="Songs that sound like us"
            description="Drop your actual Spotify links anytime—cards open in a new tab."
          />
          <PlaylistSection tracks={playlistTracks} />
        </div>
      </SectionWrapper>

      <SectionWrapper id="letters">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Open When..."
            title="Tiny letters for every mood"
            description="Tap an envelope to read your prescription of love."
          />
          <OpenWhenLetters letters={letters} />
        </div>
      </SectionWrapper>

      <SectionWrapper id="letter">
        <LetterSection paragraphs={letterParagraphs} signature="Always, Tarun" />
      </SectionWrapper>
    </div>
  </div>
);

export default App;

