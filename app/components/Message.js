import React, {
  Component,
  PropTypes,
  TouchableNativeFeedback,
  View,
  Text
} from 'react-native'
import s from '../styles/MessageStyles'
import _ from 'lodash'

import Avatar from './Avatar'

class Message extends Component {
  constructor(props) {
    super(props)
    this.onMessagePress = this.onMessagePress.bind(this)
  }

  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(this.props, nextProps)) {
      return true
    } else {
      return false
    }
  }

  onMessagePress() {
    const {onResendingMessage, text, rowId} = this.props
    if (!!this.props.failed && this.props.failed === true) {
      onResendingMessage(rowId, text)
    }
  }

  render() {
    const {fromUser, text, sending, failed, sent} = this.props
    const opacity = sending === true ? 0.4 : 1
    const backgroundColor = failed === true ? 'rgba(255, 0, 0, 0.2)' : 'transparent'
    const sended = !!Date.parse(sent) ? Date.parse(sent) : sent

    return (
      <TouchableNativeFeedback
        onPress={() => this.onMessagePress()}>
        <View style={[s.container, {opacity, backgroundColor}]}>
          <Avatar src={fromUser.avatarUrlSmall} size={30} />
          <View style={s.content}>
            <View style={s.top}>
              <Text style={s.username}>{fromUser.username}</Text>
              <Text>{sended}</Text>
            </View>
            <View style={s.bottom}>
              <Text style={s.text}>{text}</Text>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

Message.defaultProps = {
  sending: false,
  failed: false
}

Message.propTypes = {
  id: PropTypes.string,
  rowId: PropTypes.number,
  text: PropTypes.string,
  sent: PropTypes.string,
  fromUser: PropTypes.object,
  sending: PropTypes.bool,
  failed: PropTypes.bool,
  dispatch: PropTypes.func,
  onResendingMessage: PropTypes.func
}

export default Message
