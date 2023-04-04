import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';
import about5 from './about5.jpg';


const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">All <span>About</span> Me And My  <span>Experience</span></h2>
      
      <div>
           <img className="photo__p" src={about5} alt="about5" width="310px" height="310px" />

           <ul className="des__s">
                <li> Hello! My name is Rutwik Kalbandhe & I enjoy creating things that live on the internet. I'm a passionate Developer, with strong administrative & communcation skills, good attention to detail & the ability to write efficient code. </li><br />
                <li> I have 6 months+ of hands on experience in developing scalable websites/applications using a wide range of frontend and backend skills. I had participate in 3 Hackathons and I'm very happy with the result as well as the process of creating them, I learnt a lot. </li> <br />
                {/* <li> I had participate in 3 Hackathons and I'm very happy with the result as well as the process of creating them, I learnt a lot. </li><br /> */}
                <li> I've completed 4 projects and many small sub projects which includes technologies like HTML, CSS, JavaScript, React, MongoDb, Material UI etc. Looking to further enhance both my frontend and backend skills as the further Full-stack developer. </li><br />
            </ul>
      </div>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);