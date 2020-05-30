import styled from 'styled-components';

//will need to do pagewrapper, pagemain, content
const PageWrapper: any = styled.div`
  background-image: url(${(props: any) => props.bgImage});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  filter: brightness(0.9);
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main: any = styled.div`
  width: 100vw;
  height: 100vh;
`;

export { Main, PageWrapper };
