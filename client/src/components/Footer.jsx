

const Footer = () => {
  return (
    <div>
    <footer className="bg-black text-gray-400 py-12">
    <div className="pl-32 container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <img alt="Furniro Logo" className="mb-4" src="/logofooter.svg" />
        <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Sitemap</h3>
        <ul>
          <li className="mb-3">
            <a className="hover:text-white" href="#"> Home </a>
          </li>
          <li className="mb-3">
            <a className="hover:text-white" href="#"> Shop </a>
          </li>
          <li className="mb-3">
            <a className="hover:text-white" href="#"> About </a>
          </li>
          <li className="mb-3">
            <a className="hover:text-white" href="#"> Contact </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Help</h3>
        <ul>
          <li className="mb-3">
            <a className="hover:text-white" href="#"> Payment Options </a>
          </li>
          <li className="mb-3">
            <a className="hover:text-white" href="#"> Returns </a>
          </li>
          <li className="mb-3">
            <a className="hover:text-white" href="#"> Privacy Policies </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Location</h3>
        <p className="mb-3">support@euphoria.in</p>
        <p className="mb-3">Ahmedabad Main Road</p>
        <p className="mb-3">Udaipur, India- 313002</p>
      </div>
    </div>
    <div className="border border-gray-700 w-10/12 mx-auto bg-gray-700 my-8"></div>
    <div className="text-center mt-8">
      <p>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</p>
    </div>
  </footer>
    </div>
  )
}

export default Footer
