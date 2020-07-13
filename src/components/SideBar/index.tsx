import React from 'react';

import List from '../List'
import FollowSugestion from '../FollowSugestion'
import News from '../News'



import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body, 
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter"/>
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List
          title="Talvez você curta"
          elements={[
            <FollowSugestion
              name="Teste"
              nickname="@teste" 
            />,
            <FollowSugestion
              name="Teste"
              nickname="@teste" 
            />,
            <FollowSugestion
              name="Teste"
              nickname="@teste" 
            />
          ]}
        />
        <List
          title="Talvez você curta"
          elements={[
            <News />,
            <News />,
            <News />,
          ]}
        />
      </Body>
    </Container>
  )
}

export default SideBar;