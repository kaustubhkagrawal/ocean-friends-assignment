export function Footer() {
  return (
    <footer className="w-full h-20 fixed left-0 right-0 bottom-0 z-1 bg-gradient-to-b rounded-t-3xl from-[#2c3657] to-[#141d33]">
      <div className="layout-container hstack gap-8 py-3 px-4 justify-around ">
        <div className="w-14 h-14 rounded-full bg-gradient-to-b from-blue-400 to-violet-500  shadow" />
        <div className="w-14 h-14 rounded-full shadow" />
        <div className="w-14 h-14 rounded-full shadow" />

        <div className="w-14 h-14 rounded-full shadow" />

        {/* <img
            className="w-5 h-5 left-[19px] top-[19px] absolute shadow"
            src="https://via.placeholder.com/20x20"
          /> */}
      </div>
    </footer>
  );
}
