import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendLists } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <FriendLists> 
            {friends.map(friend => (
      <FriendListItem 
      key={friend.id}
      isOnline={friend.isOnline}
     avatar={friend.avatar}
      name={friend.name}
    />
  ))}
</FriendLists>
    )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
}