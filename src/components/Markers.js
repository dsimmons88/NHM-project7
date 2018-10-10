import {createElement} from 'react';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
//import DraggableControl from './draggable-control';

const propTypes = Object.assign({},  {
  // Custom className
  className: PropTypes.string,
  // Longitude of the anchor point
  longitude: PropTypes.number.isRequired,
  // Latitude of the anchor point
  latitude: PropTypes.number.isRequired,
  // Offset from the left
  offsetLeft: PropTypes.number,
  // Offset from the top
  offsetTop: PropTypes.number,
  // Drag and Drop props
  draggable: PropTypes.bool,
  onDrag: PropTypes.func,
  onDragEnd: PropTypes.func,
  onDragStart: PropTypes.func
});

const defaultProps = Object.assign({}, {
  className: '',
  offsetLeft: 0,
  offsetTop: 0
});

/*
 * PureComponent doesn't update when context changes.
 * The only way is to implement our own shouldComponentUpdate here. Considering
 * the parent component (StaticMap or InteractiveMap) is pure, and map re-render
 * is almost always triggered by a viewport change, we almost definitely need to
 * recalculate the marker's position when the parent re-renders.
 */
export default class Marker extends Component {
  render() {
    const {className, longitude, latitude, offsetLeft, offsetTop} = this.props;


    const [x, y] =
      this.context.viewport.project([longitude, latitude]);

    const containerStyle = {
      position: 'absolute',
      left: x + offsetLeft,
      top: y + offsetTop
    };

    return createElement('div', {
      className: `mapboxgl-marker ${className}`,
      ref: this._onContainerLoad,
      style: containerStyle,
      children: this.props.children
    });
  }

}
/*
Marker.displayName = 'Marker';
Marker.propTypes = propTypes;
Marker.defaultProps = defaultProps;
*/
