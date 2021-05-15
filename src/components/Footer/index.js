import './style.css'
export default function Footer(){
    return (
      <>
        <div className="container-fluid row jumbotron">
          <div className="col">
            <ul>
              <li>Name:Tirth Raj Kumar</li>
              <li>Contact:9876543210</li>
              <li>Mirganj,Bihar</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>Email Us</li>
              <li>Email:stirthraj.12345@gmail.com</li>
              <li>Mirganj,Bihar</li>
            </ul>
          </div>
        </div>
        <div className="container-fluid text-center">ABC Pvt &copy; 2020-21</div>
      </>
    );
}