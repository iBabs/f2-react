import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
        <h2>About</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quo
      temporibus fugiat praesentium sunt nulla, dolorum ab quibusdam doloribus
      pariatur hic excepturi dolor explicabo illo. Expedita sapiente dolores
      eius aliquam!
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        repellat dolorum illo sunt iure doloremque, esse magnam exercitationem
        modi facere at voluptates, eum, officiis nobis vel. Dolor, magnam.
        Facilis nisi blanditiis incidunt amet earum, velit laboriosam quas
        consequuntur ipsa consectetur ea inventore iste sequi deserunt.
      </p>
      <div>
        <Link to='details'> Details</Link>
        <Link to='update'> update</Link>
        <div>
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default About;
