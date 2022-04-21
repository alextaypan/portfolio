import { techSkills } from './techSkills';
import TechSkills from '../../components/TechSkills';
import Contacts from '../../components/Contacts';
import PropTypes from 'prop-types';
import { Title, Info, SubTitle, List } from './HomeView.style';

function HomeView() {
  return (
    <>
      <Title>Hi there!</Title>
      <Info>My name's Oleksandr Yakob and I’m a Front-end Developer!</Info>

      <SubTitle>[ Tech Skills_ ]</SubTitle>
      <List>
        {techSkills.map(({ id, label, icon }) => (
          <TechSkills key={id} label={label} icon={icon} />
        ))}
      </List>
      <SubTitle>[ Contacts_ ]</SubTitle>
      <Contacts />
    </>
  );
}

HomeView.propTypes = {
  techSkills: PropTypes.arrayOf(PropTypes.object),
};

export default HomeView;
