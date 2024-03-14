import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import LabList from './components/LabList'
import Lab from './components/Lab'
import './components/style.css'

function App() {


  return (
    <>
    <div className='header'><Header header_title={'Заголовок сайта'}/></div>
      

      <div className="main_page">
        <LabList />
        <Content />
      </div>
      <Lab />
      <div className="footer"><Footer footer_text={'Гранкин З. Р.'}/></div>
      
    </>
  )
}

export default App