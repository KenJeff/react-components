import { useEffect, useState } from "react";

export default function CatFact() {
  const localCatFact = localStorage.getItem("catFact");
  const [catFact, setCatFact] = useState(localCatFact || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch on mount
  useEffect(() => {
    if (!localCatFact) {
      fetchCatFact();
    }
  }, []);

  async function fetchCatFact() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://catfact.ninja/fact");
      if (!response.ok) {
        throw new Error("Failed to fetch cat fact");
      }
      const data = await response.json();
      setCatFact(data.fact);
      localStorage.setItem("catFact", data.fact);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading)
    return (
      <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" />
          <p className="text-muted">Loading a purrfect fact..</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
        <div className="col-md-6">
          <div className="alert alert-danger">{error}</div>
        </div>
      </div>
    );

  return (
    <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
      <div className="col-md-6">
        <div className="card shadow-lg border-0 rounded-4 p-4">
          <div className="card-body text-center">
            <span className="mb-3 d-block">🐱</span>
            <h2 className="fw-bold mb-4"> Cat Fact</h2>
            <p className="fs-5 text-muted fst-italic mb-4">"{catFact}"</p>
            <button
              className="btn btn-primary btn-lg rounded-4"
              onClick={fetchCatFact}
            >
              New Fact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
