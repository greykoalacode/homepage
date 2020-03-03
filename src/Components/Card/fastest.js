import React from 'react';

const fastest = ({fast}) =>{
    return(
    <div>
        {fast.map(user => {
          return (
            <li key={user.rank}>
              <a
                className="anch"
                rel="noopener noreferrer"
                target="_blank"
                href={"http://arena.siesgst.ac.in/profile/" + user.profileId}
              >
                {user.name} in {user.timeTaken} in {user.contest}
              </a>
            </li>
          );
        })}
      </div>
    );
}
export default fastest;