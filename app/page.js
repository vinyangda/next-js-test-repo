import Link from "next/link";

export default function Home() {
  let name = "park";
  let link = "http://google.com";
  return (
    <div>
      <h4 className="title">Apple Fresh</h4>
      <p className="title-sub">by {name}</p>
      <a href={link}>go to google</a>
    </div>
  );
}

// style 적용하는 방법
