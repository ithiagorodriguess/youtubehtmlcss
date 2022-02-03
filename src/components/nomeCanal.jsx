import './../style/nomeCanal.css'

export default function nomeCanal(props) {
    return(
        <div className="itens">
            <div className="itemCanal">
                <img className='profileCanal' src={props.src} alt="" srcset="" />
                <span className='nomeCanal'>{props.nome}</span>
                <div className="videoNovo" style={{backgroundColor:props.videoNovo ? "#4f4ff1" : "transparent"}}/>
            </div>
        </div>
    )
} 