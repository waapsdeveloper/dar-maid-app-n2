const Document = () => {
    return (
        <form className="default-form">
            <div className="row">
            <div className="form-group col-lg-6 col-md-12">
                <label>Upload Visa</label>
                <input
                    type="file"
                    name="profileImage"
                    accept="image/*"
                    className="form-control"
                    required
                />
            </div>
            <div className="form-group col-lg-6 col-md-12">
                <label>Upload Certiificates</label>
                <input
                    type="file"
                    name="profileImage"
                    accept="image/*"
                    className="form-control"
                    required
                />
            </div>
            <div className="form-group col-lg-6 col-md-12">
                <label>Upload References</label>
                <input
                    type="file"
                    name="profileImage"
                    accept="image/*"
                    className="form-control"
                    required
                />
            </div>

                {/* Submit Button */}
                <div className="form-group col-lg-12 col-md-12">
                    <button type="submit">Save Documents</button>
                </div>
            </div>
        </form>
    );
};

export default Document;