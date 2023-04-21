//next.js에서는 폴더를 생성하면 자동적으로 '폴더 명' = 'url 주소'가 된다

export default function List() {
  return (
    <div>
      <h4 className="title">List</h4>
      <div className="food">
        <h4>Product 1 $40</h4>
      </div>
      <div className="food">
        <h4>Product 2 $40</h4>
      </div>
    </div>
  );
}
