import { AppContainer } from './App.styled';
import user from 'data/user.json'
import { Profile } from 'components/Profile/Profile'
import data from 'data/data.json'
import {Statistic} from 'components/Statistic/Statistic'



export const App = () => {
  return (
    <AppContainer>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistic title="Upload stats" stats={data} />
    </AppContainer>
    
  );
};
