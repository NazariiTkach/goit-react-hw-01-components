
import {
  ProfileBox,
  Description,
  Avatar,
  StatsList,
  StatsItem,
  UserName,
  UserTag,
  UserLocation,
  LabelStats,
  QuantityStats,
} from './Profile.styled';

export const Profile = ({
username, tag, location, avatar, followers, viwes, likes
}) => { return (
<ProfileBox>
  <Description>
    <Avatar
      src={avatar}
      alt="User avatar"
    />
    <UserName>{username}</UserName>
    <UserTag>{tag}</UserTag>
    <UserLocation>{location}</UserLocation>
  </Description>

  <StatsList>
    <StatsItem>
      <LabelStats>Followers</LabelStats>
      <QuantityStats>{followers}</QuantityStats>
    </StatsItem>
    <StatsItem>
      <LabelStats>Views</LabelStats>
      <QuantityStats>{viwes}</QuantityStats>
    </StatsItem>
    <StatsItem>
      <LabelStats>Likes</LabelStats>
      <QuantityStats>{likes}</QuantityStats>
    </StatsItem>
  </StatsList>
        </ProfileBox>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    viwes: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
};