import { Nav, Link, LinkResume } from './Navigation.style';

function Navigation() {
  return (
    <>
      <Nav>
        <Link to="/">Home</Link>

        <Link to="/projects">Projects</Link>

        <LinkResume
          href="https://drive.google.com/file/d/1FPrnf2-t7mklODixKTr7AX0y0TgbcQI6/view?usp=sharing"
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
