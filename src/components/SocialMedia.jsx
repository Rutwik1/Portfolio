import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';


const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://www.linkedin.com/in/rutwikkalbandhe/" target="_blank" rel="noopener noreferrer" title="Linkedin"><BsLinkedin /></a>
    </div>
    <div>
    <a href="https://github.com/Rutwik1" target="_blank" rel="noopener noreferrer" title="Github"><BsGithub /></a>
    </div>
    <div>
    <a href="mailto:hello@rutwikk.com" target="_blank" rel="noopener noreferrer" title="Email"><SiGmail /></a>
    </div>
  </div>
);

export default SocialMedia;