import React, { useState, useEffect } from "react";
import "./App.css";
import "./global.css";
import "./Sidebar.css";
import "./Main.css";

const App = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input__block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div className="input__block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>
          <div className="input__group">
            <div className="input__block">
              <label htmlFor="latitude">Latitude</label>
              <input
                name="latitude"
                id="latitude"
                type="number"
                required
                value={latitude}
                onChange={e => e.target.value}
              />
            </div>
            <div className="input__block">
              <label htmlFor="logitude">Logitude</label>
              <input
                name="logitude"
                id="logitude"
                type="number"
                required
                value={longitude}
                onChange={e => e.target.value}
              />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev__item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/46333794?s=400&v=4"
                alt="breno"
              />
              <div className="user__info">
                <strong>Breno Lopes</strong>
                <span>RectJs, React Native, Node.js</span>
                <p>
                  I am a Front-End Junior career progression developer and a
                  passionate about Javascript and its entire ecosystem.
                </p>
                <a href="https://github.com/brenogsouza">
                  Acessar perfil no github
                </a>
              </div>
            </header>
          </li>
          <li className="dev__item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/46333794?s=400&v=4"
                alt="breno"
              />
              <div className="user__info">
                <strong>Breno Lopes</strong>
                <span>RectJs, React Native, Node.js</span>
                <p>
                  I am a Front-End Junior career progression developer and a
                  passionate about Javascript and its entire ecosystem.
                </p>
                <a href="https://github.com/brenogsouza">
                  Acessar perfil no github
                </a>
              </div>
            </header>
          </li>
          <li className="dev__item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/46333794?s=400&v=4"
                alt="breno"
              />
              <div className="user__info">
                <strong>Breno Lopes</strong>
                <span>RectJs, React Native, Node.js</span>
                <p>
                  I am a Front-End Junior career progression developer and a
                  passionate about Javascript and its entire ecosystem.
                </p>
                <a href="https://github.com/brenogsouza">
                  Acessar perfil no github
                </a>
              </div>
            </header>
          </li>
          <li className="dev__item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/46333794?s=400&v=4"
                alt="breno"
              />
              <div className="user__info">
                <strong>Breno Lopes</strong>
                <span>RectJs, React Native, Node.js</span>
                <p>
                  I am a Front-End Junior career progression developer and a
                  passionate about Javascript and its entire ecosystem.
                </p>
                <a href="https://github.com/brenogsouza">
                  Acessar perfil no github
                </a>
              </div>
            </header>
          </li>
          <li className="dev__item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/46333794?s=400&v=4"
                alt="breno"
              />
              <div className="user__info">
                <strong>Breno Lopes</strong>
                <span>RectJs, React Native, Node.js</span>
                <p>
                  I am a Front-End Junior career progression developer and a
                  passionate about Javascript and its entire ecosystem.
                </p>
                <a href="https://github.com/brenogsouza">
                  Acessar perfil no github
                </a>
              </div>
            </header>
          </li>
        </ul>
      </main>
    </div>
  );
};
export default App;
