import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>
        Netflix project build by Neil O'Conchuir, and{" "}
        <a href="https://github.com/neiloconchuir/netflix-project"
        target="_blank"
        rel="noreferrer">
          open-source on GitHub
        </a>
      </p>
    </footer>
  );
}

export default Footer
