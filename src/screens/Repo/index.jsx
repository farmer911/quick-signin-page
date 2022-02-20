
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Repo = () => {

  let { id } = useParams();

  const [info, setInfo] = useState({})
  const [listRepo, setListRepo] = useState([])

  const fetchUserInfo = async () => {
    const response = await fetch(`https://api.github.com/users/${id}`)
    const data = await response.json()
    setInfo(data)
  }

  const fetchUserRepo = async () => {
    const response = await fetch(`https://api.github.com/users/${id}/repos`)
    const data = await response.json()
    setListRepo(data)
  }

  useEffect(() => {
    fetchUserInfo()
    fetchUserRepo()
  }, [])

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img src={info.avatar_url} alt="" className="avatar-img" />
            <div className="d-flex mt-3">
              <span>Name:</span>
              <span className="ms-2">{id}</span>
            </div>
            <div className="d-flex">
              <span>{info.bio}</span>
            </div>
            <div className="d-flex">
              <span>Location:</span>
              <span className="ms-2">{info.location}</span>
            </div>

            <Link to="/">Sign Out</Link>
          </div>
        </div>

        <div className="col-8">
          <div className="row">
            {
              !!listRepo.length && listRepo.map(item => (
                <div className="col-5 border me-3 mb-3 p-5" key={item.id}>
                  <div className="d-flex justify-content-between">
                    <span className="fw-bold text-blue fz-14">{item.name}</span>
                    <span className="card-tag d-flex align-items-center">{item.visibility}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Repo;