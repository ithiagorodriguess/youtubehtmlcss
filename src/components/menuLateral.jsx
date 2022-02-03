import './../style/menuLateral.css';
import Canal from './nomeCanal';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';
import GamesOutlinedIcon from '@mui/icons-material/GamesOutlined';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';

export default function MenuLateral() {
    return(
        <div className="MenuLateral">
            <div className="abas">
                    <div className="itens">
                        <div className="item ativado">
                        <HomeIcon className="icons"/>
                        <span>Início</span>
                        </div>
                    </div>
                    <div className="itens">
                        <div className="item">
                            <ExploreOutlinedIcon className="icons"/>
                            <span>Explorar</span>
                        </div>
                    </div>
                    <div className="itens">
                        <div className="item">
                        <SubscriptionsOutlinedIcon className="icons"/>
                        <span>Inscrições</span>
                        </div>
                    </div>
            </div>
            <div className="abas">
                    <div className="itens">
                        <div className="item">
                        <VideoLibraryOutlinedIcon className="icons"/>
                        <span>Biblioteca</span>
                        </div>
                    </div>
                    <div className="itens">
                        <div className="item">
                        <HistoryOutlinedIcon className="icons"/>
                        <span>Histórico</span>
                        </div>
                    </div>
                    <div className="itens">
                        <div className="item">
                        <SlideshowOutlinedIcon className="icons"/>
                        <span>Seus Vídeos</span>
                        </div>
                    </div>
                    <div className="itens">
                        <div className="item">
                        <AccessTimeOutlinedIcon className="icons"/>
                        <span>Assistir mais tarde</span>
                        </div>
                    </div>
                    <div className="itens">
                        <div className="item">
                        <ThumbUpOutlinedIcon className="icons"/>
                        <span>Vídeos marcados com...</span>
                        </div>
                    </div>
                    <div className="itens">
                        <div className="item">
                            <KeyboardArrowDownOutlinedIcon className="icons"/>
                            <span>Mostrar mais</span>
                        </div>
                    </div>
            </div>
            <div className="abasComTitulo">
                    <span className='tituloAba'>INSCRIÇÕES</span>
                    <div className="canais">
                        <Canal 
                            nome="Rato Borrachudo" 
                            src="https://static-cdn.jtvnw.net/jtv_user_pictures/e0e33c68-f53d-4308-a780-62b1bfd09d17-profile_image-300x300.png"
                            videoNovo
                            />
                        <Canal 
                            nome="Sikêra Júnior" 
                            src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Sik%C3%AAra_J%C3%BAnior_2021_%28cropped%29.jpg"
                            
                            />                    
                        <Canal 
                            nome="Codigo Fonte TV" 
                            src="https://media-exp1.licdn.com/dms/image/C4D0BAQELV6uSa1rhIg/company-logo_200_200/0/1562171532349?e=2159024400&v=beta&t=k7sRTCsK8lo5HCpvhjO82iSvJwN7yPXrv2lPQXSx5lw"
                            videoNovo
                            />
                        <div className="itens">
                            <div className="item">
                            <KeyboardArrowDownOutlinedIcon className="icons"/>
                            <span>Mostrar mais 15</span>
                        </div>
                    </div>
                    </div>
            </div>
            
            <div className="abasComTitulo">
                    <span className='tituloAba'>MAIS DO YOUTUBE</span>
                    <div className="itens">
                        <div className="item">
                        <YouTubeIcon className="icons"/>
                        <span>Youtube Premium</span>
                        </div>
                    </div>
                    <div className="itens">
                        <div className="item">
                        <TheatersOutlinedIcon className="icons"/>
                        <span>Filmes</span>
                        </div>
                    </div>
                    <div className="itens">
                        <div className="item">
                        <GamesOutlinedIcon className="icons"/>
                        <span>Games</span>
                        </div>
                    </div>
                    <div className="itens">
                        <div className="item">
                        <LiveTvIcon className="icons"/>
                        <span>Ao vivo</span>
                        </div>
                    </div>
                    <div className="itens">
                        <div className="item">
                        <EmojiObjectsOutlinedIcon className="icons"/>
                        <span>Aprender</span>
                        </div>
                    </div>
                    <div className="itens">
                        <div className="item">
                        <EmojiEventsOutlinedIcon className="icons"/>
                        <span>Esportes</span>
                        </div>
                    </div>
            </div>
            <div className="abas">
                    <div className="itens">
                        <div className="item">
                        <SettingsOutlinedIcon className="icons"/>
                        <span>Configurações</span>
                        </div>
                    </div>
                    <div className="itens">
                        <div className="item">
                        <FlagOutlinedIcon className="icons"/>
                        <span>Histórico de denúncias</span>
                        </div>
                    </div>
                    <div className="itens">
                        <div className="item">
                        <HelpOutlineOutlinedIcon className="icons"/>
                        <span>Ajuda</span>
                        </div>
                    </div>
                    <div className="itens">
                        <div className="item">
                        <SlideshowOutlinedIcon className="icons"/>
                        <span>Seus Vídeos</span>
                        </div>
                    </div>
                    <div className="itens">
                        <div className="item">
                        <AnnouncementOutlinedIcon className="icons"/>
                        <span>Enviar feedback</span>
                        </div>
                    </div>
            </div>
            <div className="abas">
                <div className="infos">
                    <p>Sobre Imprensa </p>
                    <p>Direitos autorais</p>
                    <p>Entre em contato</p>
                    <p>Criadores de conteúdo</p>
                    <p>Desenvolvedores</p>
                </div>
                <div className="infos">
                    <p>Termos</p>
                    <p>Privacidade</p>
                    <p>Política e segurança </p>
                    <p>Como funciona o YouTube</p>
                    <p>Testar os novos recursos</p>
                </div>
            </div>
        </div>
    )
}