import "./Education.css";

const Education = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div id="content ">
                <ul className="timeline">
                  <li className="event" data="BE (2018-2022)">
                    <h3>Sri Shanmugha College of Engg & Technology-Salem</h3>
                    <p>
                      Completed computer science and Engineering with 83.2% under
                      anna university
                    </p>
                  </li>
                  <li className="event" data="HSC (2017-2018)">
                    <h3>
                      Goverment Boys Higher Secondary School,Bhavani,Tamilnadu
                    </h3>
                    <p>Completed HSC in 2017-2018 with 82%</p>
                  </li>
                  <li className="event" data="SSLC (2015-2016)">
                    <h3>
                      Goverment Boys Higher Secondary School, Bhavani,Tamilnadu
                    </h3>
                    <p>Completed SSLC in 2015-2016 with 92.2%</p>
                    <br />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
