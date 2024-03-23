export default function Footer() {
  return (
    <section className="h-[500px] mt-20 bg-footer">
      <div className="h-[0px] bg-line shadow-line"></div>
      <div className="flex flex-row text-center justify-center items-start mt-8">
        <div className="flex flex-col text-left justify-center items-start mr-12">
          <div className="text-white mt-4 mb-4 mr-6">Follow us</div>
          <a href="#" className="text-gray-400 text-xs leading-8 no-underline">
            Instagram
            <br />
          </a>
          <a href="#" className="text-gray-400 text-xs leading-8 no-underline">
            Xiaohongshu
            <br />
          </a>
        </div>
        <div className="ml-12">
          <div className="text-white text-left ml-0 pt-4 pb-4 pl-0">
            Contact
          </div>
          <div>
            <div className="text-gray-400 text-left text-xs leading-8">
              tel: +1 404 698 0990
              <br />
              email: ellazhou2004@126.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
