import './Header.css'
  
interface HeaderProps {
  onHomeClick: () => void;
}

function Header({ onHomeClick }: HeaderProps) {

  


  return (
    <header className="header">
      <div className="logo">
        <button onClick={onHomeClick}>
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="60" height="60" fill="black"/>
            <rect width="60" height="60" fill="url(#pattern0_103_4)"/>
            <defs>
              <pattern id="pattern0_103_4" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_103_4" transform="scale(0.01)"/>
              </pattern>
            <image id="image0_103_4" width="100" height="100" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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"/>
            </defs>
          </svg>
        </button>
      
      </div>
      <div className="hamburger-menu">
        <button>
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="60" height="60" fill="black"/>
            <rect width="60" height="60" fill="url(#pattern0_103_7)"/>
            <defs>
              <pattern id="pattern0_103_7" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_103_7" transform="scale(0.01)"/>
              </pattern>
              <image id="image0_103_7" width="100" height="100" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAjUlEQVR4nO3aMQ6DQAxFwT1eNvevQULc46MtEomOZokjZk5g2YWb1xoAAAAAAADAV5J3kjXMNnbcrxxkmz4KH7uD/OFBepLl15M+wNjx6/IvAQAAAAAAAAAAAJhP/X4b9XtB6vdi1O+FqN8BAAAAAAAAAACAatTvt1G/F6R+L0b9Xoj6HQAAAAAAAGhnB6GvJGJakTpTAAAAAElFTkSuQmCC"/>
            </defs>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
