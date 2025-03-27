const ContactInfoBox = () => {
  return (
    <form className="default-form">
      <div className="row">
        {/* Contact Details */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Dail Code</label>
          <input type="number"
            placeholder="+92"
            name="number" />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Phone Number</label>
          <input type="number"
            placeholder="4322321133"
            name="number" />
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <label>Address</label>
          <input
            type="text"
            name="name"
            placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>City</label>
          <select className="chosen-single form-select" required>
            <option>Melbourne</option>
            <option>Pakistan</option>
            <option>Chaina</option>
            <option>Japan</option>
            <option>India</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>State</label>
          <select className="chosen-single form-select" required>
            <option>Sindh</option>
            <option>Punjab</option>
            <option>Balochistan</option>
            <option>Khyber Pakhtun Khuwa</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Country</label>
          <select className="chosen-single form-select" required>
            <option>Australia</option>
            <option>Pakistan</option>
            <option>Chaina</option>
            <option>Japan</option>
            <option>India</option>
          </select>
        </div>


        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactInfoBox;
