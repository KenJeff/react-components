/*Build a navbar component that displays a site name, navigation links, and a notification badge that updates 
when the user clicks a button."
Requirements:

A Navbar component that displays a site name and three nav links
A notification count tracked in state — starting at 0
A badge next to a "Notifications" link that displays the current count
A button somewhere on the page that adds 1 to the notification count
The badge should only show when the count is greater than 0 */
// import { useState } from "react";

export default function Navbar({ notis }) {
  // const [notis, setNotis] = useState(0);

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Notifications
              </a>
            </li>
            <li>
              {notis > 0 && <p className="badge text-bg-secondary">{notis}</p>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
