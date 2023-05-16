import {keyframes, styled } from "@mui/material";

const Home = () => {

  const move = keyframes`
    from {
      translateX(0px)
    }
    to{
      transform: translateX(900px) scaleX(-1) 
    }
  `

  const BusMove = styled("img")({
    animation: `${move} 10s forwards`,
  })

  return (
    <>
    <div style={{alignContent: 'center'}}>
      <img src={require('../../media_resources/wimb_logo.png')} alt="" />
      <h4>The site where you can know where is your bus!</h4>
    </div>
    <BusMove src={require('../../media_resources/bus.gif')} style={{transform: 'scaleX(-1)', width:'200px'}}alt=""/>
    </>
  );
};

export default Home
