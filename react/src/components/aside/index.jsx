import React, { useEffect, useState } from 'react'
import './index.css'


export function Aside() {
  const [user, setUser] = useState({ name: '', avatar_url: '', bio: '',location:'' })

  useEffect(() => {
    fetch('https://api.github.com/users/Cleberdev2001')
      .then(response => response.json())
      .then(data => {
        setUser({
          name: data.name,
          avatar: data.avatar_url,
          bio: data.bio,
          location: data.location,
        })
      })
  }, []);

  return (

    <aside>
      <div className="box" id="profile">
        <div className="photo"><img src={user.avatar} alt="User avatar" /></div>
        <div className="name">{user.name}</div>
        <div className="bio">{user.bio}</div>
      </div>
      <div className="box" id="social">
        <a href="#">
          <div className="logo_container">
            <img src="/src/assets/map-pin.svg" />
          </div>
          <span>{user.location}</span>
        </a>
        <a href="#">
          <div className="logo_container">
            <img src="/src/assets/briefcase.svg" />
          </div>
          <span>Lab2Dev</span>
        </a>
        <a href="https://github.com/Cleberdev2001">
          <div className="logo_container">
            <img src="/src/assets/github.svg" />
          </div>
          <span>Cleberdev2001</span>
        </a>
        <a href="#">
          <div className="logo_container">
            <img src="/src/assets/linkedin.svg" />
          </div>
          <span>Cleber Santana Dias</span></a>
        <a href="#">
          <div className="logo_container">
            <img src="/src/assets/twitter.svg" />
          </div>
          <span>@cleberflick</span>
        </a>
      </div>


      <div className="box" id="tech">
        <div className="titulo">
          <h1>Tecnologias</h1>
        </div>
        <div className="item">Java Script</div>
        <div className="item">ReactJS</div>
        <div className="item">Github</div>
        <div className="item">HTML</div>
        <div className="item">CSS</div>
        <div className="item">Abap</div>
        <div className="item">Phyton</div>
      </div>

      <div className="box" id="exp">
        <div className="Exp_titulo">
          <h1>Experiência</h1>
        </div>
        <div className="Exp">
          <ul>
            <li>
              <strong>Lab2dev</strong> <br />
              2022- Atualmente desenvolvedor
            </li>
          </ul>
        </div>
      </div>

      <div className="box" id="educacao">
        <div className="edu_titulo">
          <h1>Educação</h1>
        </div>
        <div className="edu">
          <ul>
            <li>
              <strong>Uninove</strong> <br />
              2019- Ciências da computação <br /> <br />
            </li>

            <li>
              <strong>Lab2dev</strong><br />
              10/2022 - 12/2022 -Prodev
            </li>
          </ul>

        </div>
      </div>
    </aside>
  )
}