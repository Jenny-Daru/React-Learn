import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // 상태 변경 시 이전의 상태값에 기반하여 변경하여야 한다면 아래 함수 형태를 사용해야함. 
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
//   let buttonCaption = 'Edit'
  
  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
    // buttonCaption = 'Save'
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
