const RightSide = ({ expertsData, totalSalary, expertCount }) => {
  return (
    <div className="card shadow border-light w-100" style={{ maxWidth: '300px', position: 'fixed', top: '84px', right: '20px', height: 'auto', zIndex: 1000 , marginLeft:"300px"}}>
      <div className="card-body">
        <h2 className="card-title text-center">Expert Count: {expertCount}</h2>
        <h3 className="text-center text-success">
          Total Salary: ${totalSalary}
        </h3>
        <hr />
        <h5 className="text-center">Selected Experts:</h5>
        <div className="d-flex flex-column align-items-start">
          {expertsData?.map((expert) => (
            <div key={expert.id} className="d-flex align-items-center my-2">
              <img
                src={expert.img}
                alt="expert"
                style={{ height: "50px", width: "50px", borderRadius: "50%", border: "2px solid cyan" }}
                className="me-2"
              />
              <p className="mb-0 fw-bold">{expert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSide;