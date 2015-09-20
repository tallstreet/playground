import React from 'react';
import Playground from 'component-playground';

export default (code, description, scope) => {
  return (props) => {
    return (
      <main>
        <Playground
          initiallyExpanded={false}
          es6Console={false}
          propDescriptionMap={description}
          codeText={code}
          scope={scope}/>
      </main>
    );
  }
};
