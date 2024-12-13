/* eslint-disable react/prop-types */
export default function ControlledNavbar(props) {
  return (
    <nav
      className={`p-2 m-2 d-flex rounded justify-content-between align-items-center ${props.theme}`}
    >
      <div className="fs-4 fw-bold">{props.title}</div>
      <div className="">
        {props.menuItems.map((menu) => (
          <span key={menu} className="mx-2 btn text-white">
            {menu}
          </span>
        ))}
      </div>
      <div className="">
        {props.shortcuts.map((item) => (
          <button className={`btn text-white mx-1 ${item}`} key={item}></button>
        ))}
      </div>
    </nav>
  );
}
