import PropTypes, { arrayOf } from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendLists } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <FriendLists> 
            {friends.map(({id, isOnline, avatar,  name}) => (
      <FriendListItem 
      key={id}
      isOnline={isOnline}
     avatar={avatar}
      name={name}
    />
  ))}
</FriendLists>
    )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
}