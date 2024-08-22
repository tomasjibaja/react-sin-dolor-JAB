import imagen0 from './images/rey_atanagildo.png';
import imagen1 from './images/rey_sisebuto.png';
import imagen2 from './images/rey_leogivildo.png';
import imagenX from './images/rey_incognito.png'
import './App.css';

const kingName = {
  color: 'rgb(30,30,30)', 
  fontWeight: '500', 
  fontSize: '30px', 
  textAlign: 'center',
  cursor: 'pointer'
}

const kingCard = {
  backgroundColor: 'goldenrod',
  borderRadius: '9px',
  padding: '12px'
}

const kingWrapper = {
  display: 'flex', 
  flexDirection: 'row', 
  alignItems: 'center', 
  justifyContent: 'space-evenly',
  backgroundColor: 'wheat',
  width: '90vw',
  height: '70vh',
  marginLeft: '5vw',
  borderRadius: '7px'
}

const kingImg = {
  cursor: 'pointer',
  width: '20vw'
}

const handleImgClick = (e) => {
  if (e.target.src.includes('incognito')) {
    e.target.style.opacity = '0';
  } else {
    e.target.src = imagenX;
    e.target.parentNode.style.backgroundColor = 'white';
  }
}

const handleNameClick = (e) => {
  if (e.target.innerHTML == 'Visto') {
    e.target.style.opacity = '0'
  } else {
    e.target.innerHTML = 'Visto';
  }
}

function App() {
 
  return (
    <div className='kings-wrapper' style={kingWrapper}>
      <div className='king-card' style={kingCard}>
        <img src={imagen0} style={kingImg} onClick={handleImgClick}/>
        <h2 style={kingName} onClick={handleNameClick}>Atanagildo</h2>
      </div>
      <div className='king-card' style={kingCard}>
        <img src={imagen1} style={kingImg} onClick={handleImgClick}/>
        <h2 style={kingName} onClick={handleNameClick}>Sisebuto</h2>
      </div>
      <div className='king-card' style={kingCard}>
        <img src={imagen2} style={kingImg} onClick={handleImgClick}/>
        <h2 style={kingName} onClick={handleNameClick}>Leogivildo</h2>
      </div>
    </div>
  )
}

export default App
