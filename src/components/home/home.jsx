const Home = () => {
  return (
    <div>
      <h1>Welcome to Wimb!</h1>
      <h4>The site where you can know where is your bus!</h4>
      <img src={require('../../media_resources/bus.gif')} style={{transform: 'scaleX(-1)'}}alt=""/>
    </div>
  );
};

export default Home
