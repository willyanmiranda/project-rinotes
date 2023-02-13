import Launch from '../../components/Launch';
import LogoRino from '../../assets/logo-rino.jpg';
import LogoRinoLight from '../../assets/logo-rino-light.jpg';
import LogoRinoMobile from '../../assets/logo-rino-mobile.jpg';
import LogoRinoMobileLight from '../../assets/logo-rino-mobile-light.jpg';

interface HeaderProps {
  colorTheme: string;
}

const Header = (props: HeaderProps) => {
  const { colorTheme } = props;

  const LogoImg = colorTheme === 'dark' ? LogoRino : LogoRinoLight;
  const LogoMobile = colorTheme === 'dark' ? LogoRinoMobile : LogoRinoMobileLight;

  return (
    <div className='Header'>
      <picture className='Header__Logo'>
        <img src={LogoMobile} className='logo-mobile' />
        <img src={LogoImg} className="logo" />
      </picture>
      <Launch />
    </div>
  );
};

export default Header;