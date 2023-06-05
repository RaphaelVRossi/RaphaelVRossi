import React from 'react';
import './Navigation.scss'

function Navigation() {
  return (
    <section className="navigation">
      <div className="square">
        <p>
          about me
        </p>
      </div>
      <div className="square">
        <p>
          projects
        </p>
      </div>
      <div className="square">
        <p>
          contact
        </p>
      </div>
    </section>
  )
}

export default Navigation;
