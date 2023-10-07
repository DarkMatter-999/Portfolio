import './App.css'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import MainPage from './components/MainPage.jsx'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="content">
        <Header/>
        <MainPage/>
      </div>
   </div>
  )
}

export default App
