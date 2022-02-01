import './App.css';
import Insult from './components/Insult';

function App() {
  let quotes = [
    { insult: 'Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?', play: 'Macbeth', id: 1 },
    { insult: 'Never hung poison on a fouler toad', play: 'Richard III', id: 2 },
    { insult: 'He thinks too much: such men are dangerous.', play: 'Julius Ceasar', id: 3 },
    { insult: 'Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs.', play: 'The Merchant of Venice', id: 4 },
    { insult: 'Give me your hand...I can tell your fortune. You are a fool.', play: 'The Two Noble Kinsmen', id: 5 },
    { insult: 'He smells like a fish, a very ancient and fish-like smell, a kind of not-of-the-newest poor-John. A strange fish!', play: 'The Tempest', id: 6 },
    { insult: 'It is a tale Told by an idiot, full of sound and fury, Signifying nothing.', play: 'Macbeth', id: 7 },
    { insult: 'Alas, poor heart, that kiss is comfortless As frozen water to a starved snake. ', play: 'Titus Andronicus', id: 8 },
    { insult: 'He hath eaten me out of house and home; he hath put all substance into that fat belly of his. ', play: 'Henry IV, Part 2', id: 9 },
    { insult: 'Out, you green-sickness carrion! Out, you baggage! You tallow-face!', play: 'Romeo and Juliet', id: 10 },
  ]
  const randomElement = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <div className='App'>
      <section className='container randomInsult'>
        <Insult insult={ randomElement.insult } play={ randomElement.play } key={ randomElement.id}/>
      </section>
      <section className='container allInsults'>
        <header>
          <h1>Get a random insult from Shakespeare when realod the page</h1>
        </header>
        {quotes.map((quote) => {
          return <Insult insult={ quote.insult } play={ quote.play } key={ quote.id}/>
        })}
      </section>
    </div>
  );
}
export default App;
