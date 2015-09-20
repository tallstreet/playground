import React from 'react';

const styles = {
  headerComponent: {
    boxShadow: '0 0 8px rgba(0,0,0,.4)',
    backgroundColor: '#fafafa',
    padding: '2px'
  },

  headerTeleport: {
    height: '1px',
    left: '-10000px',
    overflow: 'hidden',
    position: 'absolute',
    top: 'auto',
    width: '1px'
  }
};

export default () => {
  return (
    <header role="banner" style={styles.headerComponent}>
      <div className="wrapper">
        <h1 className="hide-palm">
            Playground
        </h1><a className="see-teleport" href="#content" style={styles.headerTeleport}>Skip to Content</a>
      </div>
    </header>
  );
}