import './style.css'
export default function Footer(){
    return (
      <>
        <div className="container-fluid row jumbotron">
          <div className="col">
            <ul>
              <li className="bg-primary mb-2">Name:Tirth Raj Kumar</li>
              <li className="bg-primary mb-2">Contact:9876543210</li>
              <li className="bg-primary mb-2">Mirganj,Bihar</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li className="bg-primary mb-2">Email Us</li>
              <li className="bg-primary mb-2">
                Email:stirthraj.12345@gmail.com
              </li>
              <li className="bg-primary mb-2">Mirganj,Bihar</li>
            </ul>
          </div>
        </div>
        <div className="container-fluid text-center bg-primary">
          ABC Pvt &copy; 2020-21
        </div>
      </>
    );
}