import { Nav, Link, LinkResume } from './Navigation.style';

function Navigation() {
  return (
    <>
      <Nav>
        <Link to="/">Home</Link>

        <Link to="/projects">Projects</Link>

        <LinkResume
          href="https://yer-resume.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          CV
        </LinkResume>
      </Nav>
    </>
  );
}

export default Navigation;
