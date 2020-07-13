import React from 'react';

import Feed from '../Feed'

import { 
  Container, 
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage, 
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Helder Avila</h1>
        <h2>@helderavila</h2>

        <p>
          Developer at <a href="www.google.com">@Google</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 13 de junho de 1999
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>325 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  )
}

export default ProfilePage;