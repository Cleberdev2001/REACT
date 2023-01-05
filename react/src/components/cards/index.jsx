import React,{useEffect,useState} from 'react'
import './index.css'

export function Cards() {
  const [repositorys, setRepositorys] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://api.github.com/users/Cleberdev2001/repos'
      )
      const data = await response.json()

      setRepositorys(data)
    }

    fetchData()
  }, [])

  return (
    repositorys.map(repositorys => {
      return (
        <section id="repositories">
          <div className="box" id="projects">
            <div class="mp">
              <h1>My projects</h1>
            </div>

            <div class="see"> <a href="https://github.com/Cleberdev2001?tab=repositories">Veja todos</a>
            </div>
          </div>
          <div className="bc">
            <div className="box" id="my-onix">
              <div class="card">

                <div className="folder">
                  <img src="/src/assets/folder.svg" />
                  <a href={repositorys.html_url} class="title">{repositorys.name}</a>
                </div>

                <div className="descr">

                </div>

                <div className="icon">

                  <div className="icon1">
                    <img src="/src/assets/Vector.svg" />
                    <div class="star">{repositorys.stargazers_count}</div>

                  </div>

                  <div className="icon2">
                    <img src="/src/assets/git-branch.svg" />
                    <div class="forks">{repositorys.forks}</div>

                  </div>

                  <div class="icon3">
                    <img src="/src/assets/Ellipse 2.svg" />
                    <div class="lang">{repositorys.language}</div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>
      )
    })
  )
}