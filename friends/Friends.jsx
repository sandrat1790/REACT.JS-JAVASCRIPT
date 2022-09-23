import React, { useState, useEffect, useCallback } from "react";
import * as friendsService from "../../services/friendsService";
import Person from "./Person";
//import FriendForm from "./FriendForm";
import { useNavigate } from "react-router-dom";

function Friends() {
  const [pageData, setPageData] = useState({
    arrayOfFriends: [],
    friendsComponents: [],
  });

  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);

  const navigate = useNavigate();

  // #region
  //    const [arrayOfFriendsOg] = useState([
  //   {
  //     title: "Mr",
  //     bio: "Bill Nye",
  //     summary: "I love to teach kids about science",
  //     headline: "The Science Guy",
  //     slug: "billNye",
  //     statusId: "Active",
  //     primaryImage: "https://tinyurl.com/mu5xtrb7",
  //   },
  //   {
  //     title: "Mr",
  //     bio: "SpongeBob SquarePants",
  //     summary: "I live in a pineapple under the sea",
  //     headline: "Of Bikini Bottom",
  //     slug: "spongeBobSquarePants",
  //     statusId: "Active",
  //     primaryImage: "https://tinyurl.com/mpjramx4",
  //   },
  //   {
  //     title: "Mr",
  //     bio: "Ash Ketchum",
  //     summary: "I want to be the very best",
  //     headline: "Gotta Catch'em All",
  //     slug: "ashKetchum",
  //     statusId: "Active",
  //     primaryImage: "https://tinyurl.com/2rntu46u",
  //   },
  // ]);
  //console.log(count, setCount);
  //console.log("OG", arrayOfFriendsOg);
  // #endregion

  false && console.log(pageData.arrayOfFriends);

  const onDeleteRequested = useCallback((myPerson, eObj) => {
    console.log(myPerson.id, { myPerson, eObj });

    const handler = getDeleteSuccessHandler(myPerson.id);

    friendsService.deletePerson(myPerson.id).then(handler).catch(onDeleteError);
  }, []);

  const getDeleteSuccessHandler = (idToBeDeleted) => {
    console.log("getDeleteSuccessHandler", idToBeDeleted);
    return () => {
      console.log("onDeleteSuccess", idToBeDeleted);
      setPageData((prevState) => {
        const pd = { ...prevState };
        pd.arrayOfFriends = [...pd.arrayOfFriends];

        const idxOf = pd.arrayOfFriends.findIndex((person) => {
          let result = false;

          if (person.id === idToBeDeleted) {
            result = true;
          }

          return result;
        });

        if (idxOf >= 0) {
          pd.arrayOfFriends.splice(idxOf, 1);
          pd.friendsComponents = pd.arrayOfFriends.map(mapFriend);
        }

        return pd;
      });
    };
  };
  // #region
  // const onDeleteSuccess = (idToBeDeleted) => {
  //   console.log("onDeleteSuccess", idToBeDeleted);
  //   setPageData((prevState) => {
  //     const pd = { ...prevState };
  //     pd.arrayOfFriends = [...pd.arrayOfFriends];

  //     const idxOf = pd.arrayOfFriends.findIndex((person) => {
  //       let result = false;

  //       if (person.id === idToBeDeleted) {
  //         result = true;
  //       }

  //       return result;
  //     });

  //     if (idxOf >= 0) {
  //       pd.arrayOfFriends.splice(idxOf, 1);
  //       pd.friendsComponents = pd.arrayOfFriends.map(mapFriend);
  //     }

  //     return pd;
  //   });
  // };
  // #endregion
  const onDeleteError = (err) => {
    console.error("Delete", err);
  };

  const mapFriend = (aFriend) => {
    //console.log("mapping", aFriend);
    return (
      <Person
        person={aFriend}
        key={"ListA-" + aFriend.slug}
        onPersonClicked={onDeleteRequested}
      />
    );
  };

  useEffect(() => {
    console.log("firing useEffect for getFriends");
    friendsService.getFriends().then(onGetPeopleSuccess).catch(onGetPeopleError);
  }, []);

  const onGetPeopleSuccess = (data) => {
    console.log(data);
    let arrayOfPeople = data.item.pagedItems;
    console.log({ arrayOfPeople });

    setPageData((prevState) => {
      const pd = { ...prevState };
      pd.arrayOfFriends = arrayOfPeople;
      pd.friendsComponents = arrayOfPeople.map(mapFriend);
      return pd;
    });
  };

  const onGetPeopleError = (err) => {
    console.error(err);
  };

  const onHeaderClicked = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };

  const onToggleClick = () => {
    setToggle(() => {
      if (toggle === true) {
        return false;
      } else {
        return true;
      }
    });
  };

  const onNavToFriendForm = () => {
    navigate("/Friends/new");
  };

  return (
    <React.Fragment>
      <div className="container">
        <h1>Friends</h1>
        <h3 onClick={onHeaderClicked}>Rendering {count}</h3>
        <div className="row g-3">
          <div className="col-auto">
            <button className="btn btn-primary" onClick={onToggleClick}>
              Show/Hide Friends
            </button>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary" onClick={onNavToFriendForm}>
              Add / Edit Friend
            </button>
          </div>
          <div className="col-auto">
            <input
              type="search"
              className="form-control"
              id="site-search"
              name="search"
              placeholder=" search friends list"
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
        <div className="row">{toggle === false && pageData.friendsComponents}</div>
      </div>
    </React.Fragment>
  );
}
export default Friends;
