import styled from 'styled-components';
import defaultImg from '../../images/room-1.jpeg';

const StyledHero = styled.section`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${props => props.image ? props.image : defaultImg}) center/cover no-repeat;
  position: relative;
`;

export default StyledHero;