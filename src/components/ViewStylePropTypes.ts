import * as PropTypes from 'prop-types';

const BorderStyle = PropTypes.oneOf(['solid', 'dotted', 'dashed']);
const Color = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
const Overflow = PropTypes.oneOf(['visible', 'hidden', 'scroll']);

export default {
  color: Color,
  shadowColor: Color,
  shadowInner: PropTypes.bool,
  shadowSpread: PropTypes.number,
  shadowOffset: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  shadowOpacity: PropTypes.number,
  shadowRadius: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  top: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
  minWidth: PropTypes.number,
  maxWidth: PropTypes.number,
  minHeight: PropTypes.number,
  maxHeight: PropTypes.number,
  margin: PropTypes.number,
  marginVertical: PropTypes.number,
  marginHorizontal: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  padding: PropTypes.number,
  paddingVertical: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  position: PropTypes.oneOf(['absolute', 'relative']),
  flexDirection: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  flexWrap: PropTypes.oneOf(['wrap', 'nowrap']),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
  ]),
  alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'stretch']),
  alignSelf: PropTypes.oneOf(['auto', 'flex-start', 'flex-end', 'center', 'stretch']),
  overflow: Overflow,
  overflowX: Overflow,
  overflowY: Overflow,
  flex: PropTypes.number,
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
  flexBasis: PropTypes.number,
  aspectRatio: PropTypes.number,
  zIndex: PropTypes.number,
  backfaceVisibility: PropTypes.oneOf(['visible', 'hidden']),
  backgroundColor: Color,
  borderColor: Color,
  borderTopColor: Color,
  borderRightColor: Color,
  borderBottomColor: Color,
  borderLeftColor: Color,
  borderRadius: PropTypes.number,
  borderTopLeftRadius: PropTypes.number,
  borderTopRightRadius: PropTypes.number,
  borderBottomLeftRadius: PropTypes.number,
  borderBottomRightRadius: PropTypes.number,
  borderStyle: BorderStyle,
  borderTopStyle: BorderStyle,
  borderRightStyle: BorderStyle,
  borderBottomStyle: BorderStyle,
  borderLeftStyle: BorderStyle,
  borderWidth: PropTypes.number,
  borderTopWidth: PropTypes.number,
  borderRightWidth: PropTypes.number,
  borderBottomWidth: PropTypes.number,
  borderLeftWidth: PropTypes.number,
  opacity: PropTypes.number,
  transform: PropTypes.string,
  transformOrigin: PropTypes.string,
};