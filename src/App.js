import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Cover from './components/Cover'
import Nav from './components/Nav'
import issue1 from './assets/backstagetalks_cover_issue_1.png'
import issue2 from './assets/backstagetalks_cover_issue_2.png'
import issue3 from './assets/backstagetalks_cover_issue_3.png'
import issue4 from './assets/backstagetalks_cover_issue_4.png'
import issue5 from './assets/backstagetalks_cover_issue_5.png'
import issue6 from './assets/backstagetalks_cover_issue_6.png'

function App() {

  return (
    <>
      <Header />
      <div className="cover-container">
        <Cover issue="6" imgSrc={issue6} />
        <Cover issue="5" imgSrc={issue5} />
        <Cover issue="4" imgSrc={issue4} />
        <Cover issue="3" imgSrc={issue3} />
        <Cover issue="2" imgSrc={issue2} />
        <Cover issue="1" imgSrc={issue1} />
      </div>
      <Footer />
      <Nav />
    </>
  )
}

export default App;
