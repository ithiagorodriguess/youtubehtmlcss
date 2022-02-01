import './../style/menuLateral.css'
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

export default function MenuLateral() {
    return(
        <div className="MenuLateral">
            <div className="abas">
                    <div className="item">
                        <HomeIcon className="icons"/>
                        <span>Início</span>
                    </div>
                    <div className="item">
                        <ExploreOutlinedIcon className="icons"/>
                        <span>Explorar</span>
                    </div>
                    <div className="item">
                        <SubscriptionsOutlinedIcon className="icons"/>
                        <span>Inscrições</span>
                    </div>
            </div>
            <div className="abas">
                    <div className="item">
                        <VideoLibraryOutlinedIcon className="icons"/>
                        <span>Biblioteca</span>
                    </div>
                    <div className="item">
                        <HistoryOutlinedIcon className="icons"/>
                        <span>Histórico</span>
                    </div>
                    <div className="item">
                        <SlideshowOutlinedIcon className="icons"/>
                        <span>Seus Vídeos</span>
                    </div>
                    <div className="item">
                        <AccessTimeOutlinedIcon className="icons"/>
                        <span>Assistir mais tarde</span>
                    </div>
                    <div className="item">
                        <ThumbUpOutlinedIcon className="icons"/>
                        <span>Vídeos marcados com...</span>
                    </div>
                    <div className="item">
                        <KeyboardArrowDownOutlinedIcon className="icons"/>
                        <span>Mostrar mais</span>
                    </div>
            </div>
            <div className="abasComTitulo">
                    <span className='tituloAba'>INSCRIÇÕES</span>
                    <div className="item">
                        <img className='profileCanal' src="https://static-cdn.jtvnw.net/jtv_user_pictures/e0e33c68-f53d-4308-a780-62b1bfd09d17-profile_image-300x300.png" alt="" srcset="" />
                        <span>Rato Borrachudo</span>
                        <div className="videoNovo">.</div>
                    </div>
                    <div className="item">
                        <img className='profileCanal' src="https://static-cdn.jtvnw.net/jtv_user_pictures/e0e33c68-f53d-4308-a780-62b1bfd09d17-profile_image-300x300.png" alt="" srcset="" />
                        <span>Rato Borrachudo</span>
                        <div className="videoNovo">.</div>
                    </div>
                    <div className="item">
                        <img className='profileCanal' src="https://static-cdn.jtvnw.net/jtv_user_pictures/e0e33c68-f53d-4308-a780-62b1bfd09d17-profile_image-300x300.png" alt="" srcset="" />
                        <span>Rato Borrachudo</span>
                        <div className="videoNovo">.</div>
                    </div>
                    <div className="item">
                        <img className='profileCanal' src="https://static-cdn.jtvnw.net/jtv_user_pictures/e0e33c68-f53d-4308-a780-62b1bfd09d17-profile_image-300x300.png" alt="" srcset="" />
                        <span>Rato Borrachudo</span>
                        <div className="videoNovo">.</div>
                    </div>
                    <div className="item">
                        <img className='profileCanal' src="https://static-cdn.jtvnw.net/jtv_user_pictures/e0e33c68-f53d-4308-a780-62b1bfd09d17-profile_image-300x300.png" alt="" srcset="" />
                        <span>Rato Borrachudo</span>
                        <div className="videoNovo">.</div>
                    </div>
                    <div className="item">
                        <img className='profileCanal' src="https://static-cdn.jtvnw.net/jtv_user_pictures/e0e33c68-f53d-4308-a780-62b1bfd09d17-profile_image-300x300.png" alt="" srcset="" />
                        <span>Rato Borrachudo</span>
                        <div className="videoNovo">.</div>
                    </div>
                    <div className="item">
                        <KeyboardArrowDownOutlinedIcon className="icons"/>
                        <span>Mostrar mais 15</span>
                    </div>
            </div>
        </div>
    )
}