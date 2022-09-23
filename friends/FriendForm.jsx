import React, { useState, useEffect } from "react";
import * as friendsService from "../../services/friendsService";
import toastr from "toastr";
import { useLocation } from "react-router-dom";

function FriendForm() {
  const [formData, setFormData] = useState({
    title: "",
    bio: "",
    summary: "",
    headline: "",
    slug: "",
    statusId: "",
    primaryImage: {
      imageUrl: "",
    },
  });

  const handleChange = (evt) => {
    // console.log(evt.target.name, evt.target.value);
    const { name, value } = evt.target;
    setFormData((prevState) => {
      let data = { ...prevState };
      data[name] = value;
      return data;
    });
  };

  const { state } = useLocation();

  useEffect(() => {
    //console.log("firing useEffect for add/edit Friend");

    if (state?.type === "PERSON_VIEW" && state?.payload) {
      //console.log("person change firing");
      setFormData((prevState) => {
        return { ...prevState, ...state.payload };
      });
    }
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      friendsService
        .updatePerson(formData.id, formData)
        .then(onEditSuccess)
        .catch(onEditError);
    } else {
      friendsService
        .addNewFriend(formData)
        .then(onFormSubmitSuccess)
        .catch(onFormSubmitError);
    }
  };

  const onEditSuccess = (response) => {
    console.log(response);
  };
  const onEditError = (errResponse) => {
    console.log(errResponse);
  };

  const onFormSubmitSuccess = (response) => {
    console.log("add success", response.data.item.pagedItems.id);
    toastr.success("success");
  };

  const onFormSubmitError = (err) => {
    console.error(err);
    toastr.error("error");
  };

  return (
    <div className="container">
      <h1>Add / Edit Friend</h1>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            <form>
              <div className="form-group">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="ex Mr"
                  onChange={handleChange}
                  value={formData.title}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bio" className="form-label">
                  Bio
                </label>
                <input
                  type="text"
                  name="bio"
                  className="form-control"
                  placeholder="Full name"
                  onChange={handleChange}
                  value={formData.bio}
                />
              </div>
              <div className="form-group">
                <label htmlFor="summary" className="form-label">
                  Summary
                </label>
                <input
                  type="text"
                  name="summary"
                  className="form-control"
                  placeholder=""
                  onChange={handleChange}
                  value={formData.summary}
                />
              </div>
              <div className="form-group">
                <label htmlFor="headline" className="form-label">
                  Headline
                </label>
                <input
                  type="text"
                  name="headline"
                  className="form-control"
                  placeholder=""
                  onChange={handleChange}
                  value={formData.headline}
                />
              </div>
              <div className="form-group">
                <label htmlFor="slug" className="form-label">
                  Slug
                </label>
                <input
                  type="text"
                  name="slug"
                  className="form-control"
                  placeholder="ex firstnameLastname"
                  onChange={handleChange}
                  value={formData.slug}
                />
              </div>
              <div className="form-group">
                <label htmlFor="statusId" className="form-label">
                  StatusId
                </label>
                <input
                  type="text"
                  name="statusId"
                  className="form-control"
                  placeholder="Active"
                  onChange={handleChange}
                  value={formData.statusId}
                />
              </div>
              <div className="form-group">
                <label htmlFor="primaryImage" className="form-label">
                  PrimaryImage
                </label>
                <input
                  type="text"
                  name="primaryImage"
                  className="form-control"
                  placeholder="insert url to photo"
                  onChange={handleChange}
                  value={formData.primaryImage.imageUrl}
                />
              </div>
              <div>
                <button
                  type="submit"
                  value={formData.id}
                  className="btn btn-success"
                  onClick={handleSubmit}
                >
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendForm;
