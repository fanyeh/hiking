import React, { Component } from 'react';
import ComponentHeader from '@components/ComponentHeader';

import Member from './Member';
import style from './index.css';
class Team extends Component {
  render() {
    return (
      <div>
        <ComponentHeader
          title="OUT FABULOUS TEAM"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
        />
        <div className={style.team}>
          <Member
            name="JOHN DOE"
            location="Cortina, Italy"
            imageSource={require('@img/team/team1.jpg')}
          />
          <Member
            name="JESSICA SIMPSON"
            location="Chamonix-Mont-Blanc, France"
            imageSource={require('@img/team/team2.jpg')}
          />
          <Member
            name="ROBERT BROWN"
            location="Kitzbühel, Austria"
            imageSource={require('@img/team/team3.jpg')}
          />
        </div>
      </div>
    );
  }
}

export default Team;
