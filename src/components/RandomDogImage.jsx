import { useState, useEffect } from "react";

export default function RandomDogImage() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchImage();
  }, []);

  async function fetchImage() {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!response.ok) {
        throw new Error("Failed to fetch image");
      }
      const data = await response.json();
      setImageUrl(data.message);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading)
    return (
      <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" />
          <p className="text-muted">Loading a puppy pic..</p>
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
    // <div>
    //   <h1>Random Dog Image</h1>
    //   <img src={imageUrl} alt="Random Dog" />
    //   <button onClick={fetchImage}>New Dog</button>
    // </div>
    <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
      <div className="col-md-6">
        <div className="card shadow-lg border-0 rounded-4 p-4">
          <div className="card-body text-center">
            <span className="mb-3 d-block">🐶</span>
            <h2 className="fw-bold mb-4"> Random Dog Image</h2>
            {/* <p className="fs-5 text-muted fst-italic mb-4">"{catFact}"</p> */}
            <img
              className="rounded-3 img-fluid"
              src={imageUrl}
              alt="Random Dog"
            />
            <p className="text-muted">A randomly fetched dog</p>

            <button className="btn-lg rounded-pill" onClick={fetchImage}>
              New Dog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
