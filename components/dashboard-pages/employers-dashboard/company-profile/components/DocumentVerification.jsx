const DocumentVerification = () => {
    return (
        <div className="form-group col-lg-6 col-md-12">
                <label>Document Verification</label>
                <input
                    type="file"
                    name="profileImage"
                    accept="image/*"
                    className="form-control"
                    required
                />
            </div>
    );
};
export default DocumentVerification;