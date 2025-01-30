export default function AsideBar({ handleIsOpen }) {
  return (
    <aside className="aside-bar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon close-icon"
        viewBox="0 0 512 512"
        onClick={handleIsOpen}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M368 368L144 144M368 144L144 368"
        />
      </svg>
      <div className="categories">
        <a href="#" className="btn">
          Category01
        </a>
        <a href="#" className="btn">
          Category02
        </a>
        <a href="#" className="btn">
          Category03
        </a>
        <a href="#" className="btn">
          Category04
        </a>
        <a href="#" className="btn">
          Category05
        </a>
        <a href="#" className="btn">
          Category06
        </a>
      </div>
    </aside>
  );
}
