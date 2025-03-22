import { useEffect, useState } from "react";
import RightSide from "../RightSide/RightSide";

const LeftSide = () => {
  const [experts, setExperts] = useState([]);
  const [expertsData, setExpertsData] = useState([]);
  const [totalSalary, setTotalSalary] = useState(0);
  const [expertCount, setExpertCount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("data/experts.json");
      const data = await res.json();
      setExperts(data);
    };
    getData();
  }, []);

  const addToCart = (expert) => {
    setExpertsData((prevExpertsData) => {
      const updatedExpertsData = [...prevExpertsData, expert];
      const newTotalSalary = updatedExpertsData.reduce((acc, curr) => acc + curr.salary, 0);
      setTotalSalary(newTotalSalary);
      setExpertCount(updatedExpertsData.length);
      return updatedExpertsData;
    });
  };

  return (
    <>
      <h2 className="text-center fw-bold my-3 fs-2 text-primary"> Our Experts </h2>
      <div className="d-flex f flex-sm-column flex-lg-row">
        <div className="container ms-2">
          <div className="row">
            {experts.map((expert) => {
              const isAdded = expertsData.some((e) => e.id === expert.id);
              return (
                <div className="col-sm-12 col-md-6 col-lg-3 m-3" key={expert.id}>
                  <div className="card shadow w-100">
                    <img src={expert.img} alt="expert" style={{ height: '240px', width: '100%' }} />
                    <div className="card-body ms-2">
                      <p className="card-text fw-bold">Name: {expert.name}</p>
                      <p className="card-text">Address: {expert.address}</p>
                      <p className="card-text">Age: {expert.age}</p>
                      <p className="card-text">Salary: {expert.salary}</p>
                      <button
                        className={`btn ${isAdded ? 'btn-secondary' : 'btn-primary'} m-2`}
                        onClick={() => !isAdded && addToCart(expert)}
                        disabled={isAdded}
                      >
                        {isAdded ? 'Added' : 'Add to Cart'} 
                        <i className="fa-solid fa-plus mx-2"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="ms-lg-3"> {/* Add margin to the left of RightSide on larger screens */}
          <RightSide expertsData={expertsData} totalSalary={totalSalary} expertCount={expertCount} />
        </div>
      </div>
    </>
  );
};

export default LeftSide;