import styled from '@emotion/styled';

export const Button = styled.button`
  font-size: 40px;
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  text-transform: capitalize;
  &:hover {
    background-color: ${setBhColor};
  }
`;

function setBhColor(props) {
  switch (props.children) {
    case 'good':
      return 'rgb(62 133 23)';
    case 'neutral':
      return 'rgb(56 107 201)';
    case 'bad':
      return 'rgb(222 80 80)';
    default:
      return '#000';
  }
}
