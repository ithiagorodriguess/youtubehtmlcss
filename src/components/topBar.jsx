import './../style/topBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import GridOnIcon from '@mui/icons-material/GridOn';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardVoiceRoundedIcon from '@mui/icons-material/KeyboardVoiceRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import KeyboardRoundedIcon from '@mui/icons-material/KeyboardRounded';

export default function TopBar(){
    return (
        <div className="topBar">
            <div className="iconMenuBrand">
                    <MenuIcon className='menuIcon'/>
                    <img className='brand' src="https://res.cloudinary.com/mizzy-developer/image/upload/v1643679350/Frame_1_tz79n9.svg" alt="Brand Youtube"/>
                    <span className="local">BR</span>
            </div>
            <div className="input">
                <div className="campoInput">
                    <input type="search" placeholder='Pesquisar'/>
                    <KeyboardRoundedIcon className='KeyboardRoundedIcon'/>
                </div>
                <div className="botaoPesquisar">
                    <SearchRoundedIcon className='SearchRoundedIcon'/>
                </div>
                <div className="microfone">
                    <KeyboardVoiceRoundedIcon/> 
                </div>
                
            </div>
            <div className="topBarDireita">
                <div className="icones">
                    <VideoCameraBackIcon className='icon'/>
                    <GridOnIcon className='icon'/>
                    <div className="noticacao">
                        <NotificationsNoneIcon className='icon'/>
                        <div className="numeroNotificacao">
                            <span>7</span>
                        </div>
                    </div>
                </div>
                <img className='profileUser' src="https://res.cloudinary.com/mizzy-developer/image/upload/v1634348731/120090678_3258665290916894_4518857572174959935_n_dv607n.jpg" alt="Profile User"/>
            </div>
        </div>
    )
}