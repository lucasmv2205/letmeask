import styled from 'styled-components';

export const Container = styled.div`
  height: 40px;
  background: ${props => props.theme.colors.primary};
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 0 30px;
`;