import React from 'react'
import profileImg from '@/assets/images/me.png'
import './Profile.scss'

const Profile = () =>
  <div className="card">
    <div className="card-content">
      <div className="media">
        <div className="media-content has-text-centered">
          <figure className="image my-picture">
            <img className="is-rounded" src={profileImg} />
          </figure>
          <p className="title is-2 has-text-white">Flávio Ribeiro</p>
        </div>
      </div>
    </div>
  </div>

export default Profile