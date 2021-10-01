import './header.css';

export default function Header(props) {
  return (
    <div className="header">
      <header>
          <div className="logo">
              <img alt="logo" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" />
              <h1>Keep</h1>
          </div>
          <div className="search">
              <div className="search-icon"></div>
              <input onChange={(e)=>props.Search(e.target.value)} type="text" placeholder="Search"/>
          </div>
          <ul>
              <li>ProfessorCode</li>
              <li><div className="avatar-img"></div></li>
          </ul>
      </header>
      <hr/>    
    </div>
  );
}


