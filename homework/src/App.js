import logo from './logo.svg';
import './App.css';

function Title() {
  return(
    <div>
    <h1>Title</h1>
  </div>
  )

}
function Header() {
  return(
   <div><Title/></div>
  )
}
function Content() {
   return(
   <div><Title/></div>
   )
}
function Footer() {
  return(
   <div><Title/></div> 
  )
}


function App() {
  return (
    <div>
      <Header/>
      <Content/>
      <Footer/>
      
    </div>
  );
}


export default App;
