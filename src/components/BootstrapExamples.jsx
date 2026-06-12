function CenteredCard() {
  return (
    <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
      <div className="col-md-6">
        <div className="card shadow border-0 rounded-4 p-4">
          <p>Card</p>
        </div>
      </div>
    </div>
  );
}

function CardGrid({ items }) {
  return (
    <div className="container py-5">
      <div className="row g-4">
        {items.map((item) => (
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <p>{item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroWithSearch() {
  return (
    <div className="bg-dark text-white py-5 mb-5">
      <div className="container text-center">
        <h1 className="mb-4">App Title</h1>
        <div className="col-md-6 mx-auto d-flex gap-2">
          <input
            className="form-control form-control-lg"
            placeholder="Search..."
          />
          <button className="btn btn-warning btn-lg">Search</button>
        </div>
      </div>
    </div>
  );
}

export default function BootstrapExamples() {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <CenteredCard />
      <CardGrid items={items} />
      <HeroWithSearch />
    </>
  );
}
