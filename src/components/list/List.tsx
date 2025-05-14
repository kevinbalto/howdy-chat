import "./list.css"
import { ChatList } from "./chatlist/ChatList"
import { UserInfo } from "./userinfo/UserInfo"


export const List = () => {
  return (
    <div className="list">
      <UserInfo />
      <ChatList />
    </div>
  )
}
