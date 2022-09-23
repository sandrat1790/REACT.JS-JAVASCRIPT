import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import debug from "sabio-debug";
const _logger = debug.extend("Person");

function Person(props) {
  const aFriend = props.person;
  _logger(props.person);
  const navigate = useNavigate();

  const onLocalPersonClicked = (evt) => {
    evt.preventDefault();
    props.onPersonClicked(aFriend, evt);
  };

  const onEditPersonClicked = () => {
    _logger("edit friend", aFriend);
    const state = { type: "PERSON_VIEW", payload: aFriend };
    navigate(`/Friends/${aFriend.id}`, { state });
  };

  return (
    <div className="col-md-3">
      <div className="card">
        <img
          src={aFriend.primaryImageUrl}
          className="card-img-top"
          width={100}
          height={250}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{aFriend.bio}</h5>
          <h6 className="card-sub-title">{aFriend.headline}</h6>
          <p className="card-text">{aFriend.summary}</p>
          <button
            id={aFriend.id}
            className="link-btn btn btn-danger"
            onClick={onLocalPersonClicked}
          >
            Remove
          </button>
          <button
            id={aFriend.id}
            className="link-btn btn btn-warning"
            onClick={onEditPersonClicked}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

Person.propTypes = {
  person: PropTypes.shape({
    primaryImageUrl: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }),
};

export default Person;
