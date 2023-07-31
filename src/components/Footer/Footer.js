import { Wrapper, Copy } from './Footer.style';

function Footer() {
  return (
    <Wrapper>
      <Copy>
        &copy; {new Date().getFullYear()} | Developed by Oleksandr Yakob
      </Copy>
    </Wrapper>
  );
}

export default Footer;
