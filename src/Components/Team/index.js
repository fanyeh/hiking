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
          <Member name="JOHN DOE" location="Cortina, Italy" />
          <Member name="JESSICA SIMPSON" location="Chamonix-Mont-Blanc, France" />
          <Member name="ROBERT BROWN" location="Kitzbühel, Austria" />
        </div>
      </div>
    );
  }
}

export default Team;
