import icon1 from './../assets/icon1.png';
import icon2 from './../assets/icon2.png';
import icon3 from './../assets/icon3.png';
import icon4 from './../assets/icon4.png';
import index from './../assets/index.png';
import menutop from './../assets/menu-top-xs.png';
import 'bootstrap/dist/css/bootstrap.min.css';






function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary justify-content-between">
        <a className="navbar-brand" href="#">
          <img src={index} alt='index' className="logo p-4" />
        </a>
        <div className="mr-1 p-4">
          <img src={menutop} alt='menutop' className="menutop" />
        </div>
      </nav>
      <div className="header-container text-left text-break py-5">
        <h1 className="display-1">Say Hello to ReactJS</h1>
        <h2 className="mt-4">You will learn how to use the most popular frontend library</h2>
        <h3>and become a super ninja developer</h3>
        <button className='text-left btn-lg text-dark'>Awesome!</button>
      </div>
      <div className='d-flex justify-content-around align-items-center'>
        <div className="mr-1 p-4">
          <img src={icon1}/>
        </div>

        <div className="mr-1 p-4">
          <img src={icon2}/>
        </div>

        <div className="mr-1 p-4">
          <img src={icon3}/>
        </div>

        <div className="mr-1 p-4">
          <img src={icon4} />
        </div>


      </div>
    </>


  )
}




export default Header