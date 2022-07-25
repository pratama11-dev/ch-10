/* eslint-disable */
import batuPng from '../../../assets/batu.png'
import kertasPng from '../../../assets/kertas.png'
import guntingPng from '../../../assets/gunting.png'

function Handler ({ title, clickHandler, selected }) {
  function selectStyle(item) {
    if (item === selected) {
      return {
        filter: 'drop-shadow(7px 7px 7px #17b978)',
        '-webkit-filter': 'drop-shadow(7px 7px 7px #17b978)'
      }
    }

    return {}
  }
    
  return (
    <div className="col-sm-4 col-4 text-center">
        <div className="h2 mb-4">
            {title}
        </div>
        <div style={selectStyle('rock')} className="mb-4" onClick={() => clickHandler('rock')}>
            <img width="200px" className="mx-auto" src={batuPng} alt="rock"/>
        </div>
        <div style={selectStyle('paper')} className="mb-4" onClick={() => clickHandler('paper')}>
            <img height="200px" className="mx-auto" src={kertasPng} alt="paper"/>
        </div>
        <div style={selectStyle('scissor')} className="mb-4" onClick={() => clickHandler('scissor')}>
            <img width="200px" className="mx-auto" src={guntingPng} alt="scissor"/>
        </div>
    </div>
  )
}

export default Handler
