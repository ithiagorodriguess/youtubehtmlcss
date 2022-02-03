import './../style/cardVideo.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function CardVideo(props) {
  return(
      <div className="janelaVideos">
          <div className="card">
              {/* TUMB */}
              <div className="tumb">
                <img className='tumbImage' src={props.tumb} alt="" srcset="" />
              </div>
              {/* INFORMAÇÕES SOBRE O VIDEO */}
              <div className="infosVideo">
                  {/* IMAGEM DO CANAL */}
                  <div className="imagemCanal">
                      <img src={props.fotoCanal} alt="" srcset="" />
                  </div>
                  {/* DETALHES SOBRE O VIDEO */}
                  <div className="sobeoVideo">
                      {/* TITULO */}
                      <span>{props.tituloVideo}</span>
                      <div className="nomeCanal">
                          {/* NOME CANAL */}
                        <p>{props.nomeCanal}</p>
                        {/* VERIFICADO */}
                        <CheckCircleIcon className='CheckCircleIcon' sx={{ fontSize: 15 }} style={{color: props.verificado ? "#aaa" : "transparent"}}/>
                      </div>
                      {/* VISUALIZAÇÃO */}
                    <p className='visualizacao'>{props.visualizacao} </p>
                    <p className="visualizacao"> {props.postadoHa}</p>
                  </div>
                  <MoreVertIcon className='maisOpcao'/>
              </div>
          </div>
      </div>
  )
}
