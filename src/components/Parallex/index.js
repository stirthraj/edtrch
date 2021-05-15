import './style.css'
export default function Parallex(){
    return (
      <div className="container-fluid">
        {/* parallax scrolling */}
        <div className="para d-flex justify-content-center align-items-center">
          <div className="bg-white w-75 p-5">
            <h1 className="sd font-weight-bold text-warning">
              ABC Mirganj
            </h1>
            <p className="ds text-primary">
              Technological expertise coupled with award-winning UX skills is
              what makes us the leading web development company in India - and
              helps us build world class websites and web applications.
            </p>
          </div>
        </div>
      </div>
    );
}