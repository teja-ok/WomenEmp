import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SchemesView from './Scheme/SchemesView';
import Nav from './Nav'
import { fetchSchemes } from '../Actions/SchemeActions';
import { fetchTrainee } from '../Actions/TraineeActions';
import { fetchNgos } from '../Actions/NgoActions';
import { Link, useNavigate } from 'react-router-dom';
import NgosView from './NGO/NgosView';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  const dispatch = useDispatch();
  const schemes = useSelector((state) => state.allSchemes.schemes)
  const ngos = useSelector((state) => state.allNgos.ngos)
  const user = useSelector((state) => state.user)
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleScheme = () => {
    document.getElementById('schemes').style.display = "block";
    document.getElementById('ngos').style.display = "none";
  }
  const handleNgo = () => {
    document.getElementById('schemes').style.display = "none";
    document.getElementById('ngos').style.display = "block";
  }
  const handleFeed = () => {
    navigate("/feedback/home")
  }
  useEffect(() => {
    dispatch(fetchTrainee(user.userId))
    dispatch(fetchSchemes())
    dispatch(fetchNgos())
    document.getElementById('schemes').style.display = "none";
    document.getElementById('ngos').style.display = "none";
  }, [])
  // console.log(schemes)
  return (
    <div>
      <Nav />
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item style={{ 'height': "300px" }}>
          <img
            className="d-block w-100"
            src={`https://img.freepik.com/free-vector/flat-hand-drawn-international-women-s-day-illustration_23-2148863944.jpg?w=2000`}
            alt="First slide"
            style={{ 'height': "300px" }}
          />

        </Carousel.Item>
        <Carousel.Item style={{ 'height': "300px" }}>
          <img
            className="d-block w-100"
            src={`https://media.istockphoto.com/photos/happy-confident-asian-woman-raising-her-hands-up-relax-on-summer-picture-id1334123325?b=1&k=20&m=1334123325&s=170667a&w=0&h=OnSoZn8-zQwKzErKrkctlnCe6yOLrhbMCyZHJJ03Leo=`}
            alt="Second slide"
            style={{ 'height': "300px" }}
          />


        </Carousel.Item>
        <Carousel.Item style={{ 'height': "300px" }}>
          <img
            className="d-block w-100"
            src={`https://www.kristendarcy.com/wp-content/uploads/2015/03/women-empowerment-quotes-hd-wallpaper-17.jpg`}
            alt="Third slide"
            style={{ 'height': "300px" }}
          />


        </Carousel.Item>
      </Carousel>

      <button className='buttonBlue' onClick={handleScheme}> View Schemes</button>
      <button className='buttonBlue' onClick={handleNgo}> View NGOs</button>
      <button className='buttonBlue' onClick={handleFeed}> Feedback</button>
      <div id='schemes'><SchemesView schemes={schemes} /></div>
      <div id='ngos'><NgosView ngos={ngos} /></div>
    </div>
  )
}

export default Home