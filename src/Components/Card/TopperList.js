import React from "react";

const TopperList = ({ topFive }) => {
  return (
    <div>
        {topFive.map(user => {
          return (
            <li key={user.rank}>
              <a
                className="anch"
                rel="noopener noreferrer"
                target="_blank"
                href={"http://arena.siesgst.ac.in/profile/" + user.profileId}
              >
                {user.name}
              </a>
            </li>
          );
        })}
    </div>
  );
};

export default TopperList;
