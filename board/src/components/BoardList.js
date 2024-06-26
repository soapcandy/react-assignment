import { useContext } from "react";
import "../style/List.css";
import BoardContext from "../contexts/BoardContext";

function BoardList() {
  const { boardItemList, setSelectedItem, handleDeleteButton } =
    useContext(BoardContext);

  const handleTitleClick = (item) => {
    setSelectedItem(item);
  };

  // 페이지 네이션 추가해야함
  return (
    <div className="board-list">
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>작성자</th>
            <th>게시일자</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {boardItemList.map((item) => (
            <tr key={item.id}>
              <td className="list-title" onClick={() => handleTitleClick(item)}>
                {item.title}
              </td>
              <td>{item.user}</td>
              <td>{item.date}</td>
              <td>
                <button onClick={() => handleDeleteButton(item.id)}>
                  지우기
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default BoardList;
