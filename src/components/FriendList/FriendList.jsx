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