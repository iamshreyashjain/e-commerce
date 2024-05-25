

export default function HP_Footer(){
    return(
        <>
        <div className="container-fluid bg-info-subtle mt-5">
  <footer className="mx-5  pt-5">
    <div className="row">
      <div className="col-6 col-md-2 ">
        <h5>Get to Know Us
        </h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Vision</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Career</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Investor Relations</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Connect With Us</h5>
        <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Facebook</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Instagram </a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Twitter</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">LinkedIn</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"></a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Make Money With Us</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Become a Vendor</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Become an Affiliate</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Merchandise</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Invest with Us</a></li>
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>

          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4  border-top">
      <p>© 2024 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"></a></li>
        </ul>
    <button className="btn btn-primary" type="button">Admin-Login</button>
    </div>
  </footer>
</div>
        </>
    )
}