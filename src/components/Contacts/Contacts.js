import { FiMail } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

import { List, Item, Link } from './Contacts.style';

function Contacts() {
  return (
    <List>
      <Item>
        <Link
          href="mailto:yakoboleksandr@gmail.com"
          aria-label="E-mail"
          target="_blank"
        >
          <FiMail size="40" />
        </Link>
      </Item>
      <Item>
        <Link
          href="https://github.com/alextaypan/"
          aria-label="GitHub"
          target="_blank"
        >
          <AiFillGithub size="40" />
        </Link>
      </Item>
      <Item>
        <Link
          href="https://www.linkedin.com/in/oyakob/"
          aria-label="LinkedIn"
          target="_blank"
        >
          <FaLinkedin size="40" />
        </Link>
      </Item>
    </List>
  );
}

export default Contacts;
